import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { neobrutalism, dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/main/theme-provider.tsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ClerkProvider
        appearance={{
          baseTheme: dark,
        }}
        publishableKey={PUBLISHABLE_KEY}
        afterSignOutUrl="/">
        <App />
      </ClerkProvider>
    </ThemeProvider>
  </React.StrictMode>
);
