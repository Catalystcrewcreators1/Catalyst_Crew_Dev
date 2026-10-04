import { KiwiLoader } from "@/components/ui/KiwiLoader";

export default function Loading() {
  return (
    <div className="min-h-[60vh] w-full flex items-center justify-center">
      <KiwiLoader />
    </div>
  );
}
