"use client";

import { useState } from "react";

/* ✅ IMPORT PROFILE DATA */
import { profile as defaultProfile } from "../../../src/data/profile";

/* ✅ IMPORT TEMPLATES */
import DefaultTemplate from "../../templates/default/Template";
import MinimalTemplate from "../../templates/minimal/Template";

export default function DashboardPage() {
  /* ✅ STATE */
  const [profile, setProfile] = useState(defaultProfile);
  const [template, setTemplate] = useState<"default" | "minimal">("default");

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] min-h-screen">

        {/* ================= LEFT – EDITOR ================= */}
        <aside className="border-r border-zinc-800 p-6 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-6">Profile Details</h2>

          <div className="space-y-4">
            <input
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3"
              value={profile.name}
              onChange={(e) =>
                setProfile({ ...profile, name: e.target.value })
              }
            />

            <input
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3"
              value={profile.role}
              onChange={(e) =>
                setProfile({ ...profile, role: e.target.value })
              }
            />

            <textarea
              rows={5}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 resize-none"
              value={profile.summary}
              onChange={(e) =>
                setProfile({ ...profile, summary: e.target.value })
              }
            />
          </div>

          {/* ================= TEMPLATE SWITCH ================= */}
          <div className="mt-8 flex gap-3">
            <button
              onClick={() => setTemplate("default")}
              className={`px-4 py-2 rounded-lg transition ${
                template === "default"
                  ? "bg-indigo-600"
                  : "bg-zinc-800 hover:bg-zinc-700"
              }`}
            >
              Default
            </button>

            <button
              onClick={() => setTemplate("minimal")}
              className={`px-4 py-2 rounded-lg transition ${
                template === "minimal"
                  ? "bg-indigo-600"
                  : "bg-zinc-800 hover:bg-zinc-700"
              }`}
            >
              Minimal
            </button>
          </div>
        </aside>

        {/* ================= RIGHT – LIVE PREVIEW ================= */}
        <main className="overflow-y-auto">
          {template === "default" && (
            <DefaultTemplate profile={profile} />
          )}
          {template === "minimal" && (
            <MinimalTemplate profile={profile} />
          )}
        </main>

      </div>
    </div>
  );
}
