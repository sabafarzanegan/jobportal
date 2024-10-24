import { SignIn, useUser } from "@clerk/clerk-react";
import { ReactNode } from "react";

type props = {
  children: ReactNode;
};

function PrivateRoute({ children }: props) {
  const user = useUser();

  return user.user ? (
    <div>{children}</div>
  ) : (
    <div className="flex items-center justify-center ">
      <SignIn
        signUpForceRedirectUrl="/onboarding"
        fallbackRedirectUrl="/onboarding"
      />
    </div>
  );
}

export default PrivateRoute;
