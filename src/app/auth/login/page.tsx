"use client";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";

export default function Login() {
  const router = useRouter();
  const goToHome = () => {
    router.push("/");
  };
  const goToRegister = () => {
    router.push("/auth/register");
  };
  return (
    <>
      <h1>This is the Login Page</h1>
      <Button onClick={goToHome} variant="contained">
        Go to Home
      </Button>
      <Button onClick={goToRegister} variant="contained">
        Go to Register
      </Button>
    </>
  );
}
