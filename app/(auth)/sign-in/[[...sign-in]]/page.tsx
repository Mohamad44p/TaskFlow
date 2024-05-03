import { SignIn } from "@clerk/nextjs";
import Signupimage from "@/public/images/Signinimage.png";
import Image from "next/image";

export default function Page() {
  return(
    <>
      <Image
        src={Signupimage}
        alt="Auth Image"
        width={300}
        height={300}
        className="object-cover object-center"
      />
      <SignIn />
    </>
  )
}