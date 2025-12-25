"use client";

import { Profile } from "../../types/profile";

export default function About({ profile }: { profile: Profile }) {
  return (
    <section className="w-full px-12 py-24 bg-black text-white">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-semibold mb-8 border-b border-zinc-800 pb-4">
          About
        </h2>

        <div className="space-y-6 text-zinc-300 leading-7">
          {profile.about.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

      </div>
    </section>
  );
}
