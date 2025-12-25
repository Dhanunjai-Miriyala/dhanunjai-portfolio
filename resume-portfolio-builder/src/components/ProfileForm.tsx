"use client";

import { useProfile } from "../context/ProfileContext";

export default function ProfileForm() {
  const { profile, setProfile } = useProfile();

  return (
    <div className="space-y-4 bg-zinc-900 p-6 rounded-xl text-white">
      <h2 className="text-xl font-semibold">Profile Details</h2>

      <input
        className="w-full p-2 rounded bg-zinc-800"
        placeholder="Name"
        value={profile.name}
        onChange={(e) =>
          setProfile({ ...profile, name: e.target.value })
        }
      />

      <input
        className="w-full p-2 rounded bg-zinc-800"
        placeholder="Role"
        value={profile.role}
        onChange={(e) =>
          setProfile({ ...profile, role: e.target.value })
        }
      />

      <textarea
        className="w-full p-2 rounded bg-zinc-800"
        placeholder="Summary"
        rows={4}
        value={profile.summary}
        onChange={(e) =>
          setProfile({ ...profile, summary: e.target.value })
        }
      />
    </div>
  );
}
