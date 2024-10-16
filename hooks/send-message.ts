"use client"

import { SendMessageSchema } from "@/lib/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


export default function SendMessage() {
    const form = useForm<z.infer<typeof SendMessageSchema>>({
        resolver: zodResolver(SendMessageSchema),
        defaultValues: {
            username: "",
            email: "",
            phone : undefined ,
            message: "",
            },
        })
        
        function onSubmit(values: z.infer<typeof SendMessageSchema>) {
            console.log(values)
        }

        return {form , onSubmit}
    
}