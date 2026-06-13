// src/app/[guide]/page.tsx

import { notFound, redirect } from "next/navigation";
import { GUIDES } from "../guides";

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ guide: guide.slug }));
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ guide: string }>;
}) {
  const { guide: guideSlug } = await params;
  const guide = GUIDES.find((g) => g.slug === guideSlug);
  if (!guide) notFound();

  redirect(`/${guide.slug}/${guide.tabs[0].slug}`);
}
