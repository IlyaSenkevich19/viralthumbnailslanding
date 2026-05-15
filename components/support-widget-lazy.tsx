"use client";

import dynamic from "next/dynamic";

const SupportWidget = dynamic(() => import("@/components/SupportWidget"), {
  ssr: false,
  loading: () => null,
});

export default function SupportWidgetLazy() {
  return <SupportWidget />;
}
