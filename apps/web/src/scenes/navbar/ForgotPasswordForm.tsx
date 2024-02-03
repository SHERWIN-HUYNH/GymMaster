import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { forgotPassword, loginSchema } from '@/utils/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';


export type ForgotPassword = z.infer<typeof forgotPassword>;

interface Props {
  onSubmit: SubmitHandler<ForgotPassword>,

}

function ForgotPasswordForm({onSubmit}:Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<ForgotPassword>({
        mode: "onSubmit",
        resolver: zodResolver(forgotPassword),
      });
      const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
      px-5 py-3 placeholder-white text-white`;
  return (
    <form
        className="space-y-4 p-6"
        autoComplete="false"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* INPUT 1 */}
        <Input
          className={inputStyles}
          {...register("email")}
          placeholder="Email"
          type="email"
        />
        {errors.email && (
          <p className="mt-1 text-primary-500">{errors.email.message}</p>
        )}       
        <Button
          type="submit"
          className="mt-5 w-full rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
        >
          SUBMIT
        </Button>
      </form>
  )
}

export default ForgotPasswordForm