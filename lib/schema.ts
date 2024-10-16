"use client";
import { z } from "zod";

export const SignInFormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters."
    }),
  })

export const SignUpFormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({ message: "Please enter a valid email address" }),

    password: z.string().min(8, {
      message: "Password must be at least 8 characters."
    }),

  })

  export const SendMessageSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    phone: z.number().min(11,{
      message: "Phone number must be 11 characters.",
    }).max(11) ,

    message: z.string().min(2, {
      message: "message must be at least 2 characters.",
    }),
  })