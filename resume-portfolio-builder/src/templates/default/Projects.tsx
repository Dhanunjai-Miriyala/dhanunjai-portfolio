"use client";

import React, { useState } from "react";
import { Profile } from "../../types/profile";
import { Github } from "lucide-react";

export default function Projects({ profile }: { profile: Profile }) {
  const [filter, setFilter] = useState<"all" | "automation" | "web" | "ai">(
    "all"
  );

  const filteredProjects =
    filter === "all"
      ? profile.projects
      : profile.projects.filter((p) => p.category === filter);

  return (
    <section className="w-full px-12 py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>

        {/* Filters */}
        <div className="flex gap-4 mb-12">
          {["all", "automation", "web", "ai"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-4 py-2 rounded-lg border text-sm transition ${
                filter === cat
                  ? "bg-indigo-600 border-indigo-600"
                  : "border-zinc-700 hover:bg-zinc-800"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500 transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-zinc-400 mb-4 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                className="inline-flex items-center gap-2 text-indigo-400 hover:underline"
              >
                <Github size={16} />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
