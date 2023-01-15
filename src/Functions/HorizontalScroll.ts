import { useEffect } from "react";

export function useHorizontalScroll(ref: any) {
  useEffect(() => {
    const el = ref.current;
    if (el) {
      const onWheel = (e: any) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "auto",
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return ref;
}
