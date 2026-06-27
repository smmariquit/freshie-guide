import FreshieGuide from "./FreshieGuide";

const NATIVE_GUIDES = {
  freshie: FreshieGuide,
} as const;

export function NativeGuideContent({ slug }: { slug: string }) {
  const Component = NATIVE_GUIDES[slug as keyof typeof NATIVE_GUIDES];
  if (!Component) return null;
  return <Component />;
}
