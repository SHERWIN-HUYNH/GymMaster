import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/utils/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export type SignIn = z.infer<typeof loginSchema>;

interface Props {
  onSubmit: SubmitHandler<SignIn>;
}

export default function FormSignIn({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignIn>({
    mode: "onSubmit",
    resolver: zodResolver(loginSchema),
  });
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white text-white`;
  return (
    <>
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
       
        {/* INPUT 2 */}
        <Input
          className={inputStyles}
          {...register("password")}
          placeholder="Password"
          type="password"
        />
        {errors.password && (
          <p className="mt-1 text-primary-500">{errors.password.message}</p>
        )}
        <Button
          type="submit"
          className="mt-5 w-full rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
        >
          SUBMIT
        </Button>
      </form>
     
     
    </>
  );
}
