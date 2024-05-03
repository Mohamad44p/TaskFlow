import Image from "next/image";
export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex items-center justify-center gap-12 h-screen">
      {children}
    </div>
  );
}
