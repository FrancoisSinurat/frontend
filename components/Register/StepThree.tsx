"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function StepThree({
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
      <div className="text-center mb-4">
        <p className="text-slate-600">
          Masukkan kode OTP yang telah dikirim ke email / nomor HP anda.
        </p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="otp">Kode OTP</Label>
        <Input
          id="otp"
          value={data.otp}
          onChange={(e) => onChange("otp", e.target.value)}
          placeholder="123456"
          required
        />
      </div>
    </motion.div>
  );
}
