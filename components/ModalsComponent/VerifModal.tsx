"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, X } from "lucide-react";

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

export default function VerifModal({ client, onClose }: Props) {
  const [notes, setNotes] = useState("");

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-2xl rounded-2xl p-6 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl font-semibold text-gray-900">
            <CheckCircle2 className="h-7 w-7 text-green-600" />
            Verifikasi Client
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            Pastikan data client sudah sesuai sebelum melakukan verifikasi.
          </DialogDescription>
        </DialogHeader>

        {/* Data Client */}
        <div className="space-y-6 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <Label htmlFor="client-id">ID Client</Label>
              <Input
                id="client-id"
                value={client.id}
                disabled
                className="bg-muted/50 cursor-not-allowed"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="client-name">Nama</Label>
              <Input
                id="client-name"
                value={client.name}
                disabled
                className="bg-muted/50 cursor-not-allowed"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="client-contact">Kontak</Label>
              <Input
                id="client-contact"
                value={client.contact}
                disabled
                className="bg-muted/50 cursor-not-allowed"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="client-date">Tanggal</Label>
              <Input
                id="client-date"
                value={client.date}
                disabled
                className="bg-muted/50 cursor-not-allowed"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="client-status">Status</Label>
              <Input
                id="client-status"
                value={client.status}
                disabled
                className="bg-muted/50 cursor-not-allowed"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="client-product">Produk</Label>
              <Input
                id="client-product"
                value={client.product}
                disabled
                className="bg-muted/50 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Catatan */}
          <div className="space-y-1.5">
            <Label htmlFor="notes">Catatan Verifikasi</Label>
            <Textarea
              id="notes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Tambahkan catatan bila perlu..."
              className="resize-none"
            />
          </div>
        </div>

        {/* Footer */}
        <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-3 mt-6">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex items-center gap-2 rounded-xl w-full sm:w-auto"
          >
            <X className="h-4 w-4" /> Batal
          </Button>
          <Button
            onClick={() => {
              console.log("Verifikasi:", { ...client, notes });
              onClose();
            }}
            className="flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
          >
            <CheckCircle2 className="h-4 w-4" /> Simpan & Verifikasi
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
