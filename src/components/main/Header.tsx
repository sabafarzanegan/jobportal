import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import logo from "../../../public/images/logo (1).png";
import { Button } from "../ui/button";
import { BriefcaseBusiness } from "lucide-react";
import { Save } from "lucide-react";

function Header() {
  return (
    <div className="py-4 flex items-center justify-between">
      <div>
        <img src={logo} alt="joblogo" className="w-18 h-14 text-white" />
      </div>
      <div>
        <SignedOut>
          <SignInButton
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
            mode="modal">
            <Button variant="default">ورود</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-10 h-10 rounded-full",
              },
            }}>
            <UserButton.MenuItems>
              <UserButton.Link
                label="شغل های من"
                href="/my-jobs"
                labelIcon={<BriefcaseBusiness />}
              />
            </UserButton.MenuItems>
            <UserButton.MenuItems>
              <UserButton.Link
                label="شغل های ذخیره شده"
                href="/save-jobs"
                labelIcon={<Save />}
              />
            </UserButton.MenuItems>
          </UserButton>
        </SignedIn>
      </div>
    </div>
  );
}

export default Header;
