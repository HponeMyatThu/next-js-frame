import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

const Index = () => {
  const { token } = useAuth();
  const router = useRouter();

  if (typeof window === "undefined") return;
  if (!router.isReady) return;

  if (!token) {
    router.push("/auth/login");
  } else {
    router.push("/dashboard");
  }

};

export default Index;
