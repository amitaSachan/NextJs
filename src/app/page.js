import profileImg from "../../public/vercel.svg";
import Image from "next/image";
export default function Home() {
  console.log(profileImg);
  return (
    <main>
      <h2>
        Image Optimization-optimize the image having width, height and src props
        also lazy loads the image
      </h2>
      <Image src={profileImg} />
      <h1> we can use Html img tag but its not optimize the image </h1>
      <img src={profileImg.src} width={300} heigth={300} />
      <h1>
        {" "}
        need to register image domain if we are using any online image in
        next.config file and width and height property are must{" "}
      </h1>
      <Image
        src="https://www.shutterstock.com/image-photo/red-apple-isolated-on-white-600nw-1727544364.jpg"
        width={300}
        height={300}
      />
    </main>
  );
}
