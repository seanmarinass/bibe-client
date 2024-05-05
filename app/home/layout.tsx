import Navbar from "@/components/navbar/Navbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
