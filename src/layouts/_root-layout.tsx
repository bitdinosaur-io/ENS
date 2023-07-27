import dynamic from "next/dynamic";
import Loader from "@/components/functions/loader";
import { useIsMounted } from "@/lib/hooks/use-is-mounted";

const ClassicLayout = dynamic(() => import("@/layouts/classic"), {
  loading: () => <FallbackLoader />,
});

function FallbackLoader() {
  return (
    <div className="fixed z-50 grid h-full w-full place-content-center">
      <Loader variant="blink" />
    </div>
  );
}

export default function RootLayout({
  children,
  contentClassName,
}: React.PropsWithChildren<{ contentClassName?: string }>) {
  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <ClassicLayout contentClassName={contentClassName}>
      {children}
    </ClassicLayout>
  );
}
