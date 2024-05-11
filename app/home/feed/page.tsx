"use client";

import { useUserContext } from "@/context/UserContext";
import { CreateBibe } from "@/components/bibe/CreateBibe";

export default function FeedPage() {
  const { hasPostedDailyBibe } = useUserContext();
  console.log(hasPostedDailyBibe);

  return (
    <main className="min-h-screen flex flex-col">
      <div className="min-h-screen w-full justify-items-center px-[10rem]">
        <section className="min-h-screen w-full">
          {!hasPostedDailyBibe && <CreateBibe />}
          <div>This is your feed</div>
        </section>
      </div>
    </main>
  );
}
