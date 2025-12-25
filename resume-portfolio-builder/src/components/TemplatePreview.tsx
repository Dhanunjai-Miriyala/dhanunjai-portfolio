"use client";

import { templates, TemplateKey } from "../templates";
import { useProfile } from "../context/ProfileContext";

export default function TemplatePreview({
  template,
}: {
  template: TemplateKey;
}) {
  const { profile } = useProfile();
  const TemplateComponent = templates[template];

  return <TemplateComponent profile={profile} />;
}
