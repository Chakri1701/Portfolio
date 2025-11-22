"use client";

import Button from "@/components/ui/Button";

export default function CopyChip({ label }: { label: string }) {
  return (
    <Button
      variant="black"
      size="sm"
      title="Click to copy"
      className="rounded-lg"
      onClick={() => navigator.clipboard?.writeText(label)}
    >
      {label}
    </Button>
  );
}
