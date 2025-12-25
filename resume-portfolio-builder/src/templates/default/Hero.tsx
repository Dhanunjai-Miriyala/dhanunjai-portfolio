"use client";

import type { Profile } from "../../types/profile";

interface HeroProps {
  profile: Profile;
}

export default function Hero({ profile }: HeroProps) {
  const [firstName, ...rest] = profile.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section className="w-full px-12 py-24 bg-gradient-to-r from-black via-zinc-900 to-black text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <p className="text-zinc-400 mb-3">Hello, I’m</p>

          <h1 className="text-5xl font-bold mb-4">
            {firstName}{" "}
            <span className="text-indigo-400">{lastName}</span>
          </h1>

          <h2 className="text-2xl text-zinc-300 mb-6">
            {profile.role}
          </h2>

          <p className="text-zinc-400 leading-8 max-w-xl">
            {profile.summary}
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <div className="w-[360px] h-[360px] rounded-2xl bg-zinc-800 flex items-center justify-center text-zinc-500">
            Image Placeholder
          </div>
        </div>

      </div>
    </section>
  );
}
