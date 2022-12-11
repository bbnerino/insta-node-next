import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (!isLogin) router.push("/login");
  }, []);

  return (
    <div>
      <h1>하이</h1>
    </div>
  );
}
