"use client";

import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import type { Profile } from "../../types/profile";


/* ✅ Explicit Props interface */
interface DefaultTemplateProps {
  profile: Profile;
}

export default function DefaultTemplate({
  profile,
}: DefaultTemplateProps) {
  return (
    <>
      <Hero profile={profile} />
      <About profile={profile} />
      <Skills profile={profile} />
      <Projects profile={profile} />
    </>
  );
}
