import * as z from 'zod'

export const loginSchema = z.object({
    email: z.string().email({ message: 'Email is not valid!' }),
    fullName:z
    .string()
    .transform((value: string) => value.trim())
    .pipe(
      z
        .string()
        .min(1, { message: 'First name is required' })
        .max(32, { message: 'First name is too long' })
        .refine((value: string) => /^[a-zA-Z]+[-'s]?[a-zA-Z]+$/.test(value), 'First name should contain only alphabets')
    ),
    password: z.string().min(6, { message: 'Password must be at least 6 characters!' })
  })
  