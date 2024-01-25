import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMedia";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ContactUs from "../contactus/ContactUs";
import FormSigIn from "@/shared/formSignIn";
import signIn from "@/api/auth";
import { useForm } from "react-hook-form";
import { setToken } from "@/utils/token";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};
// isAboveMenuScreens:
const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navabarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  const [isClicked, setIsClicked] = useState(false);
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
    px-5 py-3 placeholder-white`;
  const [fullName, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger(); // coming to new form
    e.preventDefault();
    if (!isValid) {
    }
    try {
      const res = await signIn({ email, fullName, password });
      setToken(res.accessToken);
      toast.success("Login successfully!");
      console.log(res.token);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };
  const forgetPassword = async (params: any) => {
    console.log("FORGET PASSWORD");
  };
  return (
    <nav>
      <div
        className={`${navabarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img src={Logo} alt="Logo" />
            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/* NAV ITEMS */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
                        Sign in
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Sign in</DialogTitle>
                      </DialogHeader>

                      {/* <FormSigIn/> */}
                      <form autoComplete="false">
                        {/* INPUT 1 */}
                        <input
                          className={inputStyles}
                          type="text"
                          placeholder="NAME"
                          {...register("name", {
                            required: true,
                            maxLength: 100,
                          })}
                          onChange={(e) => {
                            setname(e.target.value);
                          }}
                        />
                        {errors.name && (
                          <p className="mt-1 text-primary-500">
                            {errors.name.type == "required" &&
                              "This filed is requied"}
                            {errors.name.type == "maxLength" &&
                              "Max length is 100"}
                          </p>
                        )}

                        {/* INPUT 2 */}
                        <input
                          className={inputStyles}
                          type="text"
                          placeholder="EMAIL"
                          {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          })}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        {errors.email && (
                          <p className="mt-1 text-primary-500">
                            {errors.email.type == "required" &&
                              "This filed is requied"}
                            {errors.email.type == "pattern" &&
                              "Invalid email address"}
                          </p>
                        )}
                        {/* INPUT 3 */}
                        <input
                          className={inputStyles}
                          type="text"
                          placeholder="PASSWORD"
                          {...register("password", {
                            required: true,
                            maxLength: 100,
                          })}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                        {errors.password && (
                          <p className="mt-1 text-primary-500">
                            {errors.password.type == "required" &&
                              "This filed is requied"}
                            {errors.password.type == "maxLength" &&
                              "Max length is 100"}
                          </p>
                        )}
                      </form>
                      {/* FORGOT PASSWORD */}
                      <p
                        className="hover:text-primary-200 text-sm font-bold text-primary-500 underline hover:cursor-pointer"
                        onClick={forgetPassword}
                      >
                        Forget Password
                      </p>
                      <DialogFooter>
                        <Button
                          type="submit"
                          className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                          onClick={onSubmit}
                        >
                          SUBMIT
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className=" ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
function trigger() {
  throw new Error("Function not implemented.");
}
