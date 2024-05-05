import { Card } from "@/components/ui/card";
import { Button, CardContent } from "@mui/material";
import { CreateBibe } from "./CreateBibe";

export default function FeedPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="min-h-screen w-full justify-items-center px-[10rem]">
        <section className="min-h-screen">
          <CreateBibe />
        </section>
      </div>
    </main>
  );
}
