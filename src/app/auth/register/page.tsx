"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@mui/material/Button";

export default function Register() {
  const router = useRouter();
  const goToHome = () => {
    router.push("/");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Register page</h1>
      <Button onClick={goToHome} variant="contained">
        Go to Home
      </Button>
    </main>
  );
}
