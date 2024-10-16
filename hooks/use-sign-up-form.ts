"use client"


import { SignUpFormSchema } from "@/lib/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


export default function UseSignUp() {
    const form = useForm<z.infer<typeof SignUpFormSchema>>({
        resolver: zodResolver(SignUpFormSchema),
        defaultValues: {
          username: "",
          email: "",
          password: "",
        },
      })
    
      function onSubmit(values: z.infer<typeof SignUpFormSchema>) {
        console.log(values)
      }

      return {form , onSubmit}
    
}