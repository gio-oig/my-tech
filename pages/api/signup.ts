import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import prisma from "../../lib/prisma";
import jwt from "jsonwebtoken";
import cookie from 'cookie'

export const tokenSecret = "myTech";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const salt = bcrypt.genSaltSync();
  const { email, password } = req.body;
  let user;

  try {
    user = await prisma.user.create({
      data: {
        name: `user@${Math.random() * 100}`,
        email: email,
        password: bcrypt.hashSync(password, salt),
        phone: "557441190",
      },
    });
  } catch (error) {
    return res.status(401).json({
      error: "could not create user",
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      time: Date.now(),
    },
    tokenSecret,
    { expiresIn: "8h" }
  );

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("ACCESS_TOKEN", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 8,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    })
  );

  res.json(user);
};
