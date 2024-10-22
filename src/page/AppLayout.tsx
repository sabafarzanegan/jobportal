import Header from "@/components/main/Header";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <main className="min-h-screen container px-10">
        <Header />
        <Outlet />
      </main>
      <div className="flex items-center justify-center py-8 bg-primary-foreground">
        <footer className="px-10">
          <span>ساخته شده با ❤توسط صبا</span>
        </footer>
      </div>
    </>
  );
}

export default AppLayout;
