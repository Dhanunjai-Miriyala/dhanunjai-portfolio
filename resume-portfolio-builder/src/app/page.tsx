"use client";

import { templates, TemplateKey } from "../templates/index";
import { useState } from "react";
import { profile } from "../data/profile";

export default function Home() {
  const [activeTemplate, setActiveTemplate] =
    useState<TemplateKey>("default");

  const ActiveTemplate = templates[activeTemplate];

  return (
    <>
      {/* TEMP SWITCHER (later moved to dashboard) */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setActiveTemplate("default")}
          className="px-3 py-1 bg-indigo-600 rounded"
        >
          Default
        </button>
        <button
          onClick={() => setActiveTemplate("minimal")}
          className="px-3 py-1 bg-zinc-700 rounded"
        >
          Minimal
        </button>
      </div>

      <ActiveTemplate profile={profile} />
    </>
  );
}

