import Image from "next/image";
import ProfilePic from "@/../public/profile-image.png";

export default function HomePage() {
  return (
    <div className="flex justify-center items-center gap-4">
      <Image 
        src={ProfilePic}
        alt="Profile Picture"
        placeholder="blur"
        className="w-[350px]"
      />
      <h1>Hello! This is my home page!</h1>
    </div>
  );
}
