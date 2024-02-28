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
      <br />
      <br />
      <button onClick={() => navigate("/aboutUs/aboutusstudent")}>
        Go to Student About us page
      </button>{" "}
      <br />
      <br />
      <button onClick={() => navigate("/aboutUs/aboutusteacher")}>
        Go to Teacher About us page
      </button>
    </>
  );
};

export default aboutUs;
