import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Onboarding() {
  const { user } = useUser();
  const navigate = useNavigate();
  const handleRoleuser = async (role: string) => {
    await user?.update({
      unsafeMetadata: { role },
    });
    navigate(role === "candidate" ? "/jobs" : "/post-jobs");
  };
  useEffect(() => {
    if (user?.unsafeMetadata.role) {
      navigate(
        user.unsafeMetadata.role === "candidate" ? "/jobs" : "/post-jobs"
      );
    }
  }, [user]);
  return (
    <main
      className="flex flex-col justify-center
     items-center gap-y-16">
      <div className="flex items-center justify-center">
        <h1 className="gradient-title font-bold text-xl md:text-4xl lg:text-6xl ">
          ...من هستم یک
        </h1>
      </div>
      <div className="flex items-center justify-center gap-x-6">
        <Button
          size="xl"
          variant="destructive"
          onClick={() => {
            handleRoleuser("candidate");
          }}>
          کارفرما
        </Button>
        <Button
          size="xl"
          variant="default"
          onClick={() => {
            handleRoleuser("recuiter");
          }}>
          کارجو
        </Button>
      </div>
    </main>
  );
}

export default Onboarding;
