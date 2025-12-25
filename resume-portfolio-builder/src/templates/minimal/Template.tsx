"use client";

import { Profile } from "../../types/profile";

export default function MinimalTemplate({
  profile,
}: {
  profile: Profile;
}) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold">{profile.name}</h1>
        <p className="mt-4">{profile.summary}</p>
      </div>
    </section>
  );
}
