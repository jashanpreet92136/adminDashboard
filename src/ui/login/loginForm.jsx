"use client";

import { useRouter } from "next/navigation";
import { authenticate } from "../../app/lib/actions";
import styles from "./login.module.css";
import { useActionState, useEffect } from "react";

const LoginForm = () => {
  const [state, formAction] = useActionState(authenticate, undefined);
  const router = useRouter();
  useEffect(() => {
    if (state === "SUCCESS") {
      router.push("/dashboard");
    }
  }, [state, router]);
  return (
    <form action={formAction} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state && state}
    </form>
  );
};

export default LoginForm;
