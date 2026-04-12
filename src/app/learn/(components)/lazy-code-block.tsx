"use client";

import { useRef, useState, useEffect, type ComponentType } from "react";

type LazyCodeBlockProps = {
  code: ComponentType<{
    components?: Record<string, ComponentType<Record<string, unknown>>>;
  }>;
};

export function LazyCodeBlock({ code: Code }: LazyCodeBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {visible ? (
        <Code
          components={{
            pre: (props: Record<string, unknown>) => (
              <pre {...props} className="custom-scrollbar" />
            ),
          }}
        />
      ) : (
        <div className="h-32" />
      )}
    </div>
  );
}
