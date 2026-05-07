import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";

import { siteConfig } from "@/lib/site";

function profileImageExists(path: string) {
  if (!path.startsWith("/")) {
    return false;
  }

  return existsSync(join(process.cwd(), "public", path));
}

function getProfileImage() {
  const candidates = [
    siteConfig.profileImage,
    "/images/renato-profile.jpg",
    "/images/renato-profile.jpeg",
    "/images/renato-profile.png",
    "/images/renato-profile.webp",
  ].filter(Boolean) as string[];

  return candidates.find((candidate) => profileImageExists(candidate));
}

export function ProfileVisual() {
  const profileImage = getProfileImage();

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-lg">
      {profileImage ? (
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-100">
          <Image
            alt="Renato Boucas"
            className="object-cover"
            fill
            priority
            sizes="(min-width: 1024px) 360px, 100vw"
            src={profileImage}
          />
        </div>
      ) : (
        <div className="grid aspect-[4/5] place-items-center rounded-lg border border-dashed border-slate-300 bg-[linear-gradient(135deg,_#f8fafc_0%,_#e0f2fe_100%)] text-center">
          <div>
            <p className="text-5xl font-bold text-slate-950">RB</p>
            <p className="mt-3 text-sm font-semibold text-slate-600">Renato Boucas</p>
            <p className="mt-1 text-xs text-slate-500">AI + Data + Salesforce Architecture</p>
          </div>
        </div>
      )}
    </div>
  );
}
