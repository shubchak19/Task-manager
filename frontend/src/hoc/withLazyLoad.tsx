import { Loader2Icon } from "lucide-react";
import { lazy, Suspense } from "react";

type ImportFunc = () => Promise<{
  default: () => JSX.Element;
}>;

function withLazyLoad(importFunc: ImportFunc) {
  const LazyComponent = lazy(importFunc);
  return () => (
    <Suspense
      fallback={
        <div className="w-full h-full flex-1 flex justify-center items-center">
          <Loader2Icon className="animate-spin" />
        </div>
      }
    >
      <LazyComponent />
    </Suspense>
  );
}

export default withLazyLoad;
