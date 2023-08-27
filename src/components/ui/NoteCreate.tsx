"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "./button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./form"
import { Input } from "./input"
import { createNote, getUser } from "../../services/api"
import { useMutation, useQuery } from "react-query"
import type { nData } from "../../services/api"
import { Check } from 'lucide-react'

const FormSchema = z.object({
    note: z.string().min(2, {
        message: "notes must be at least 2 characters.",
    }),
})

const NoteCreate = () => {
    const user = useQuery('user', getUser);
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            note: "",
        },
    })

    const mutation = useMutation(createNote);

    function onSubmit(data: z.infer<typeof FormSchema>) {
        const newNote: nData = {
            user_id: user.data?.id,
            note: data.note,
        }
        mutation.mutate(newNote);
        form.reset();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center">
                <FormField
                    control={form.control}
                    name="note"
                    render={({ field }) => (
                        <FormItem className='flex grow items-center '>
                            <FormControl>
                                <Input placeholder="write your note here" {...field} className='shadow-md shadow-gray-500 text-lg' />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Check size={20} className='relative right-8' onClick={form.handleSubmit(onSubmit)} />
                {/* <Button type="submit">Submit</Button> */}
            </form>
        </Form>
    )
}

export default NoteCreate;