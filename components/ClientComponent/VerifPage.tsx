"use client";

import { useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export type Client = {
  id: string;
  name: string;
  contact: string;
  date: string;
  status: string;
  product: string;
};

type Props = {
  client: Client;
  onClose: () => void;
};

export default function VerifPage({ client, onClose }: Props) {
  const [notes, setNotes] = useState("");

  return (
    <div className="h-screen flex flex-col bg-white ">
      {/* Sticky Header */}
      <div className="top-0 z-20 px-6 pb-4 border-b sticky bg-white">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          
          Verifikasi Client - {client.name}
        </h2>
        <p className="text-sm text-gray-500">ID Client: {client.id}</p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-3x">
        {/* Data Client */}
        <section>
          <h3 className="font-semibold mb-3 text-gray-700">Detail Client</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: "ID Client", value: client.id },
              { label: "Nama", value: client.name },
              { label: "Kontak", value: client.contact },
              { label: "Tanggal", value: client.date },
              { label: "Status", value: client.status },
              { label: "Produk", value: client.product },
            ].map(({ label, value }, i) => (
              <div className="space-y-1.5" key={i}>
                <Label>{label}</Label>
                <Input
                  value={value}
                  disabled
                  className="bg-muted/50 cursor-not-allowed"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Catatan */}
        <section>
          <h3 className="font-semibold mb-3 text-gray-700">
            Catatan Verifikasi
          </h3>
          <Textarea
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Tambahkan catatan bila perlu..."
            className="resize-none"
          />
        </section>
      </div>

      {/* Sticky Footer */}
      <div className="px-6 py-3 flex justify-end gap-3 border-t bg-white">
        <button
          onClick={onClose}
          className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition font-medium flex items-center gap-2"
        >
          <X className="h-4 w-4" /> Batal
        </button>
        <button
          onClick={() => {
            console.log("Verifikasi:", { ...client, notes });
            onClose();
          }}
          className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium shadow flex items-center gap-2"
        >
          <CheckCircle2 className="h-4 w-4" /> Simpan & Verifikasi
        </button>
      </div>
    </div>
  );
}
