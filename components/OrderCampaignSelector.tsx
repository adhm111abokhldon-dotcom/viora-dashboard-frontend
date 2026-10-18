"use client";

import CampaignPicker from "./CampaignPicker";
import type { CampaignReference } from "@/lib/api";

export default function OrderCampaignSelector({
  id,
  value,
  onChange,
}: {
  id?: string;
  value: CampaignReference | null;
  onChange: (campaign: CampaignReference | null) => void;
}) {
  const selected = value ? [value] : [];

  return (
    <div id={id}>
      <CampaignPicker
        value={selected}
        onChange={(campaigns) => onChange(campaigns[0] ?? null)}
      />
    </div>
  );
}
