"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff } from 'lucide-react';
import UseSignUp from "@/hooks/use-sign-up-form";
import Link from "next/link";

const SignUpForm = () => {
    const { form, onSubmit } = UseSignUp();
    const [showPassword, setShowPassword] = useState(false); 

    return (
        <div className="flex flex-col w-full relative">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold leading-4 text-[#2F2F2F] text-[15px]"> Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} 
                    className="border rounded-[55px] p-1 pl-3"
                    placeholder=" Your full name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold leading-4 text-[#2F2F2F] text-[15px]"> Email</FormLabel>
                  <FormControl>
                    <Input {...field} 
                    className="border rounded-[55px] p-1 pl-3"
                    placeholder="Your email address"
                    type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
  
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-[15px] leading-4 text-[#2F2F2F]">Password</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        className="border p-1 pl-3"
                        placeholder="Your password"
                      />
                    </FormControl>
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400"
                    >
                      {showPassword ? <Eye /> : <EyeOff />}
                    </span>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          
            <button type="submit" className="w-full btn_main py-3 font-semibold">Log in</button>
          </form>
        </Form>
      </div>
    );
};

export default SignUpForm;
