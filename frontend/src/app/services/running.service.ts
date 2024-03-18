import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RunningService {
  constructor() {}

  //!=====================================================================================================================================
  // => running distance chart data

  datasetValues: number[] = [5, 10, 8, 15, 20, 6, 20];
  // *Create a BehaviorSubject to hold the dataset as an observable stream, starting with the initial datasetValues.
  private datasetSubject = new BehaviorSubject<number[]>(this.datasetValues);

  // *Exposes a public observable for components to subscribe to.
  public dataset$: Observable<number[]> = this.datasetSubject.asObservable();

  changeDatasetValue(v: number, position: number): void {
    const updatedDataset = [...this.datasetValues]; // copy the datasetValues
    updatedDataset[position] = v; // change the value
    this.datasetValues = updatedDataset; // update the initial arr
    this.datasetSubject.next(updatedDataset); // emits the update
  }

  //!=====================================================================================================================================

  // => weight data ( will be used in the calories chart alongside the ran distance to calculate burned calories)

  private weightValue = 60;
  private weightSubject = new BehaviorSubject<number>(this.weightValue);
  public weight$: Observable<number> = this.weightSubject.asObservable();

  changeWeightValue(weight: number): void {
    this.weightValue = weight; // update the initial arr
    this.weightSubject.next(weight); // emits the update
  }

  //!=====================================================================================================================================

  // => errors detection flag (it will be used in the home page to hide the charts when the form has errors)
  private hasErrorsSubject = new BehaviorSubject<boolean>(false);
  hasErrors$: Observable<boolean> = this.hasErrorsSubject.asObservable();

  formHasErrors() {
    this.hasErrorsSubject.next(true);
  }

  formHasNoErrors() {
    this.hasErrorsSubject.next(false);
  }
}
