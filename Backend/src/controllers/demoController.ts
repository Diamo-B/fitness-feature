import { Request, Response } from "express";

export const demo = (req: Request, res: Response) => {
  res.json({ message: "Protected route", user: req.user });
};
