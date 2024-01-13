import * as z from 'zod'

export const loginSchema = z.object({
  email: z.string().email({ message: 'Email is not valid!' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters!' })
})

export const resetPasswordSchema = z
  .object({
    password: z.string().min(6, { message: 'Password must be at least 6 characters!' }),
    confirmPassword: z.string().min(6, { message: 'Password must be at least 6 characters!' })
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword']
  })

export const updateProfileSchema = z.object({
  firstName: z
    .string()
    .transform(value => value.trim())
    .pipe(
      z
        .string()
        .min(1, { message: 'First name is required' })
        .max(32, { message: 'First name is too long' })
        .refine(value => /^[a-zA-Z]+[-'s]?[a-zA-Z]+$/.test(value), 'First name should contain only alphabets')
    ),
  lastName: z
    .string()
    .transform(value => value.trim())
    .pipe(z.string().min(1, { message: 'Last name is required' })),
  dob: z.string().min(1, { message: 'Date of birth is required' })
})
