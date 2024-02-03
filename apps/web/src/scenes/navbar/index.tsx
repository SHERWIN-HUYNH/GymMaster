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
import { signIn } from "@/api/auth";
import { setToken } from "@/utils/token";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SignIn } from "./FormSignIn";
import FormSignIn from "./FormSignIn";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ForgotPasswordForm from "./ForgotPasswordForm"
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
  const [tab, setTab] = useState<"sign-in" | "forgot-password">("sign-in");
  const onLoginSubmit = async (data: SignIn) => {
    try {
      const res = await signIn(data);
      setToken(res.accessToken);
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  };
  const onForgotPassword = async (data: ForgotPassword) => {
    try {
   await forgotPassword(data);
      toast.success("Forgot password successfully")
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  };
  const onOpenChange =async () => {
    if(tab != 'sign-in')
      setTab('sign-in')
  }
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
                  <Dialog onOpenChange={onOpenChange}>
                    <DialogTrigger asChild>
                      <Button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
                        Sign in
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Sign in</DialogTitle>
                      </DialogHeader>
                      {/* FORM SIGN-IN AND FORGOT-PASSWORD */}
                      <Tabs value={tab} className="w-[400px]">
                        {/* SIGN IN */}
                        <TabsContent value="sign-in">
                          <FormSignIn
                            onSubmit={onLoginSubmit}
                            onForgotPasswordClick={() =>
                              setTab("forgot-password")
                            }
                          />
                        </TabsContent>
                        {/* FORGOT-PASSWORD */}
                        <TabsContent value="forgot-password">
                         <ForgotPasswordForm onSubmit={onForgotPassword}/>
                        </TabsContent>
                      </Tabs>
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
