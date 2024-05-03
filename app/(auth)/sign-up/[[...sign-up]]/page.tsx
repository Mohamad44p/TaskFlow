import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Signupimage from "@/public/images/Signupimage.png";

export default function Page() {
  return (
    <>
      <Image
        src={Signupimage}
        alt="Auth Image"
        width={200}
        height={200}
        className="object-cover object-center"
      />
      <SignUp />
    </>
  );
}
