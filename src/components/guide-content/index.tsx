import ResumeGuide from "./ResumeGuide";

const NATIVE_GUIDES = {
  resume: ResumeGuide,
} as const;

export function NativeGuideContent({ slug }: { slug: string }) {
  const Component = NATIVE_GUIDES[slug as keyof typeof NATIVE_GUIDES];
  if (!Component) return null;
  return <Component />;
}
