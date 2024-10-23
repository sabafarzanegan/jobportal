import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import logo from "../../../public/images/logo (1).png";
import { Button } from "../ui/button";

function Header() {
  return (
    <div className="py-4 flex items-center justify-between">
      <div>
        <img src={logo} alt="joblogo" className="w-18 h-14 text-white" />
      </div>
      <div>
        <SignedOut>
          <SignInButton mode="modal">
            <Button variant="default">ورود</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Header;
