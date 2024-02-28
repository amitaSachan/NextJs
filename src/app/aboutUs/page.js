"use client";
import { useRouter } from "next/navigation";

const aboutUs = () => {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  return (
    <>
      <h1>About Us Page</h1>
      <button onClick={() => navigate("/")}>Go to Home Page</button>
    </>
  );
};

export default aboutUs;
