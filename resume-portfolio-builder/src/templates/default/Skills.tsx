"use client";

import { Profile } from "../../types/profile";
import { Skill } from "../../types/profile";
import { Code, Database, Bot, TestTube } from "lucide-react";
import React from "react";

const icons: Record<string, React.ReactNode> = {
  java: <Code size={20} />,
  selenium: <TestTube size={20} />,
  playwright: <TestTube size={20} />,
  api: <Database size={20} />,
  sql: <Database size={20} />,
  ai: <Bot size={20} />,
};

export default function Skills({ profile }: { profile: Profile }) {
  return (
    <section className="w-full px-12 py-24 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {profile.skills.map((skill: Skill) => (
            <div
              key={skill.key}
              className="flex flex-col gap-2 px-5 py-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500 transition"
            >
              {/* Skill Header */}
              <div className="flex items-center gap-3">
                <span className="text-indigo-400">
                  {icons[skill.key] ?? <Code size={20} />}
                </span>
                <span className="text-zinc-200 font-medium">
                  {skill.label}
                </span>
              </div>

              {/* Skill Level Bar */}
              <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    skill.level === "advanced"
                      ? "w-[90%] bg-indigo-500"
                      : skill.level === "intermediate"
                      ? "w-[65%] bg-indigo-400"
                      : "w-[40%] bg-indigo-300"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
