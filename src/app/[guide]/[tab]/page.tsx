// src/app/[guide]/[tab]/page.tsx

import { redirect } from "next/navigation";

export default async function TabPage({
  params,
}: {
  params: Promise<{ guide: string }>;
}) {
  const { guide } = await params;
  redirect(`/${guide}`);
}
