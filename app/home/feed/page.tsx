"use client";

import { useUserContext } from "@/context/UserContext";
import { CreateBibe } from "@/components/bibe/CreateBibe";
import { Bibe } from "@/components/bibe/Bibe";
import { fakeBibes } from "./data";

export default function FeedPage() {
  const { hasPostedDailyBibe } = useUserContext();

  return (
    <main className="flex min-h-screen w-full justify-center">
      {!hasPostedDailyBibe && <CreateBibe />}

      <div className="min-h-screen w-[35rem] bg-slate-100 px-[1rem] py-[1rem] flex flex-col gap-[0.5rem]">
        {fakeBibes.map((bibe, index) => {
          return (
            <Bibe
              key={index}
              avatarUrl={bibe.avatarUrl}
              displayName={bibe.displayName}
              title={bibe.title}
              todos={bibe.todos}
              date={bibe.date}
            />
          );
        })}
      </div>
    </main>
  );
}
