"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function StepTwo({
  data,
  onChange,
}: {
  data: any;
  onChange: (field: string, value: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      <div className="space-y-2">
        <Label htmlFor="akta">Akta</Label>
        <Input
          id="akta"
          value={data.akta}
          onChange={(e) => onChange("akta", e.target.value)}
          placeholder="No. Akta"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="nib">NIB</Label>
        <Input
          id="nib"
          value={data.nib}
          onChange={(e) => onChange("nib", e.target.value)}
          placeholder="Nomor Induk Berusaha"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="npwp">NPWP</Label>
        <Input
          id="npwp"
          value={data.npwp}
          onChange={(e) => onChange("npwp", e.target.value)}
          placeholder="NPWP Perusahaan"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="izinUsaha">Izin Usaha</Label>
        <Input
          id="izinUsaha"
          value={data.izinUsaha}
          onChange={(e) => onChange("izinUsaha", e.target.value)}
          placeholder="Nomor Izin Usaha"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="ktpDireksi">KTP Direksi</Label>
        <Input
          id="ktpDireksi"
          value={data.ktpDireksi}
          onChange={(e) => onChange("ktpDireksi", e.target.value)}
          placeholder="Nomor KTP Direksi"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="npwpDireksi">NPWP Direksi</Label>
        <Input
          id="npwpDireksi"
          value={data.npwpDireksi}
          onChange={(e) => onChange("npwpDireksi", e.target.value)}
          placeholder="NPWP Direksi"
          required
        />
      </div>
    </motion.div>
  );
}
