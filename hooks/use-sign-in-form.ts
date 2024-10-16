"use client"

import { SignInFormSchema } from "@/lib/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


export default function UseSignIn() {
    const form = useForm<z.infer<typeof SignInFormSchema>>({
        resolver: zodResolver(SignInFormSchema),
        defaultValues: {
          username: "",
          password: "",
        },
      })
    
      function onSubmit(values: z.infer<typeof SignInFormSchema>) {
        console.log(values)
      }

      return {form , onSubmit}
    
}