"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@mui/material/Button";

export default function Home() {
  const router = useRouter();
  const goToLogin = () => {
    router.push("/auth/login");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home page</h1>
      <Button onClick={goToLogin} variant="contained">
        Go to Login
      </Button>
    </main>
  );
}
