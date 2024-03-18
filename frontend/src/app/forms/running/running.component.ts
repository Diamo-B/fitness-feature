import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RunningService } from 'src/app/services/running.service';

@Component({
  selector: 'app-running-form',
  templateUrl: './running.component.html',
})
export class RunningFormComponent implements OnInit {
  @Input() selectedTab: number = 0;

  weekDays: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  private runningService: RunningService = inject(RunningService);
  chartData: number[] | undefined;
  chartForm: FormGroup = new FormGroup({});
  weight: number = 0;

  ngOnInit() {
    this.runningService.dataset$.subscribe((data) => {
      this.chartData = data;
    });

    this.runningService.weight$.subscribe((data) => {
      this.weight = data;
    });

    this.chartForm = new FormGroup({
      Monday: new FormControl(this.chartData![0], [
        Validators.min(0),
        Validators.required,
        Validators.pattern(/^\d+$/),
      ]),
      Tuesday: new FormControl(this.chartData![1], [
        Validators.min(0),
        Validators.required,
        Validators.pattern(/^\d+$/),
      ]),
      Wednesday: new FormControl(this.chartData![2], [
        Validators.min(0),
        Validators.required,
        Validators.pattern(/^\d+$/),
      ]),
      Thursday: new FormControl(this.chartData![3], [
        Validators.min(0),
        Validators.required,
        Validators.pattern(/^\d+$/),
      ]),
      Friday: new FormControl(this.chartData![4], [
        Validators.min(0),
        Validators.required,
        Validators.pattern(/^\d+$/),
      ]),
      Saturday: new FormControl(this.chartData![5], [
        Validators.min(0),
        Validators.required,
        Validators.pattern(/^\d+$/),
      ]),
      Sunday: new FormControl(this.chartData![6], [
        Validators.min(0),
        Validators.required,
        Validators.pattern(/^\d+$/),
      ]),
      weight: new FormControl(this.weight, [
        Validators.min(30),
        Validators.required,
        Validators.pattern(/^\d+$/),
      ]),
    });
  }

  getFormControl(day: string): FormControl | null {
    return this.chartForm?.get(day) as FormControl;
  }

  updateData(day: string, event: Event) {
    const newValue = (event.target as HTMLInputElement)?.value || '';
    this.chartForm.get(day)?.setValue(newValue);
    const position = this.weekDays.findIndex((d) => d == day);
    if (!this.chartForm.get(day)?.errors)
    {
      this.runningService.changeDatasetValue(parseFloat(newValue), position);
      this.runningService.formHasNoErrors();
    }
    else
      this.runningService.formHasErrors();
  }

  updateWeight(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.chartForm.get('weight')?.setValue(value);
    if (!this.chartForm.get('weight')?.errors) {
      this.runningService.changeWeightValue(parseInt(value));
      this.runningService.formHasNoErrors();
    }
    else
      this.runningService.formHasErrors();
  }
}
