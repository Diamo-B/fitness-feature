import { Request, Response } from "express";
import db from "../../prisma/prisma";
import { comparePasswords, hashPassword } from "../utils/hash";
import jwt from "jsonwebtoken";
import { Gender } from "@prisma/client";
export const signup = async (req: Request, res: Response) => {
  
  const {
    firstName,
    lastName,
    email,
    gender,
    weight,
    height,
    birthdate,
    pass,
  } = req.body;
  const hashedPass = await hashPassword(pass);
  const user = await db.user.findUnique({
    where:{
        email
    }
  })
  if(user)
    return res.status(400).json('An account using the given email already exists')
  const newUser = await db.user.create({
    data: {
      firstName,
      lastName,
      email,
      gender: gender==="M"?Gender.male:Gender.female,
      weight,
      height,
      birthdate,
      password: hashedPass,
    },
  });

  return res.status(200).json(newUser);
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });
  if (!user)
    return res
      .status(404)
      .json({ message: "The given email address isn't registered" });
  const comparison = await comparePasswords(password, user.password);
  if (!comparison)
    return res
      .status(400)
      .json({ message: "The given credentials are not valid" });

  const token = jwt.sign({ user }, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  });
  return res.status(200).json({
    token,
  });
};

export const verifyAuth = (req:Request, res:Response) => {
  const token = req.user;
  
    return res.status(200).json({decoded:token})
}