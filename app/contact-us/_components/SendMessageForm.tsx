'use client'

import { Form, FormControl, FormField, FormItem , FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SendMessage from '@/hooks/send-message';
import React from 'react'

const SendMessageForm = () => {

    const { form, onSubmit } = SendMessage();

  return (
    <div>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} 
                  
                  className="border rounded-[55px] p-1 pl-3 "
                  placeholder="Your Name" />
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
                <div className="relative">
                  <FormControl>
                    <Input
                      {...field}
                      type={'email'}
                      className="border  p-1 pl-3"
                      placeholder="Your Email"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormControl>
                    <Input
                      {...field}
                      
                      className="border  p-1 pl-3"
                      placeholder="Your Phone"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormControl>
                    <Textarea
                      {...field}
                      
                      className="border  p-1 pl-3 py-2 placeholder:text-[#9F9F9F]"
                      placeholder="Your Message"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <button type="submit" className=" btn_main py-3 font-medium">Send Message</button>
        </form>
      </Form>
    </div>
  )
}

export default SendMessageForm