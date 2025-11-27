import Image from "next/image";
import BackgroundImage from "../../public/login-background.jpg";

export default function AuthLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return( 
  <div className="relative bg-black h-screen w-screen flex md:items-center md:justify-center md:bg-transparent">
    {/* Logo Netflix - Đặt vị trí tuyệt đối so với khung Layout cha */}
    <div className="absolute top-6 left-6 z-20">
        <h1 className="text-[#e50914] text-4xl font-bold uppercase tracking-tighter cursor-pointer">
          NETFLIX
        </h1>
    </div>
    <Image src={BackgroundImage} priority alt="Background" fill className="sm:object-cover object-center hidden sm:flex -z-10 brightness-75" />
    {children};
  </div>
);}