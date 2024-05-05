import Navbar from "@/components/navbar/Navbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen w-full flex flex-col items-center`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
