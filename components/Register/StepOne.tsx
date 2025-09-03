"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function StepOne({
  data,
  onChange,
}: {
  data: any;
  onChange: (field: string, value: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      <div className="space-y-2">
        <Label htmlFor="produk">Pilih Produk</Label>
        <select
          id="produk"
          value={data.produk}
          onChange={(e) => onChange("produk", e.target.value)}
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-slate-500 focus:ring-2 focus:ring-slate-500"
        >
          <option value="PPOB">PPOB</option>
          <option value="TOP Operator">TOP Operator</option>
          <option value="Core System">Core System</option>
          <option value="Paket Core System & Top Operator">
            Paket Core System & Top Operator
          </option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="pic">Data PIC</Label>
        <Input
          id="pic"
          value={data.pic}
          onChange={(e) => onChange("pic", e.target.value)}
          placeholder="Data PIC"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Nama Lengkap</Label>
        <Input
          id="name"
          value={data.name}
          onChange={(e) => onChange("name", e.target.value)}
          placeholder="Nama Lengkap"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Nomor Handphone</Label>
        <Input
          id="phone"
          value={data.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          placeholder="Nomor Handphone"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Surat Menyurat</Label>
        <Input
          id="email"
          type="email"
          value={data.email}
          onChange={(e) => onChange("email", e.target.value)}
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="jabatan">Jabatan</Label>
        <Input
          id="jabatan"
          value={data.jabatan}
          onChange={(e) => onChange("jabatan", e.target.value)}
          placeholder="Jabatan"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="badanHukum">Jenis Badan Hukum</Label>
        <Input
          id="badanHukum"
          value={data.badanHukum}
          onChange={(e) => onChange("badanHukum", e.target.value)}
          placeholder="PT / CV / dll."
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="perusahaan">Nama Perusahaan</Label>
        <Input
          id="perusahaan"
          value={data.perusahaan}
          onChange={(e) => onChange("perusahaan", e.target.value)}
          placeholder="Nama Perusahaan"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="emailTagihan">Email Tagihan</Label>
        <Input
          id="emailTagihan"
          type="email"
          value={data.emailTagihan}
          onChange={(e) => onChange("emailTagihan", e.target.value)}
          placeholder="billing@example.com"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="website">Website (opsional)</Label>
        <Input
          id="website"
          value={data.website}
          onChange={(e) => onChange("website", e.target.value)}
          placeholder="https://example.com"
        />
      </div>
    </motion.div>
  );
}
