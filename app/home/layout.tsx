import Navbar from "@/components/navbar/Navbar";
import { UserContextProvider } from "@/context/UserContext";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <UserContextProvider>
          <Navbar />
          {children}
        </UserContextProvider>
      </body>
    </html>
  );
}
