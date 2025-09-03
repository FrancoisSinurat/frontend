"use client";

import React, { useMemo, useState } from "react";
import { FileText, CheckCircle2, Settings } from "lucide-react";

import RoleDetailModal from "../ModalsComponent/RoleDetailModal";
import VerifModal from "../ModalsComponent/VerifModal";

import Th from "@/components/atoms/Th";
import Td from "@/components/atoms/Td";
import StatusBadge from "@/components/atoms/StatusBadge";
import ActionIcon from "@/components/atoms/ActionIcon";
import { useRouter } from "next/navigation";
import { Client, Role, STATUS_OPTIONS, PRODUCT_OPTIONS } from "@/lib/types";
import { cn } from "@/lib/utils";

const initialData: Client[] = [
  {
    id: "TOP202508000001",
    name: "BPR Bank IMA",
    contact: "Rachmat - 08131929393",
    date: "",
    status: "Submit",
    product: "TOP Operator",
  },
  {
    id: "TOP202508000002",
    name: "Koperas",
    contact: "Sari - 0812121212",
    date: "2025-08-02",
    status: "Assesment",
    product: "TOP CBS",
  },
  {
    id: "TOP202508000003",
    name: "PT Agus Sejahtera",
    contact: "Andi - 081388887777",
    date: "2025-08-05",
    status: "Implementasi",
    product: "TOP CCS",
  },
];

export default function TableClients() {
  const route = useRouter();
  const [clients] = useState<Client[]>(initialData);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [selectedVerif, setSelectedVerif] = useState<Client | null>(null);

  const [q, setQ] = useState("");
  const [fStatus, setFStatus] = useState<string>("all");
  const [fProduct, setFProduct] = useState<string>("all");

  const [page, setPage] = useState(1);
  const pageSize = 8;

  // Filtering
  const filtered = useMemo(() => {
    const text = q.toLowerCase().trim();
    return clients.filter((c) => {
      const byText =
        !text ||
        c.id.toLowerCase().includes(text) ||
        c.name.toLowerCase().includes(text) ||
        c.contact.toLowerCase().includes(text);
      const byStatus = fStatus === "all" || c.status === fStatus;
      const byProduct = fProduct === "all" || c.product === fProduct;
      return byText && byStatus && byProduct;
    });
  }, [clients, q, fStatus, fProduct]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="w-full px-4 py-6 md:px-6">
      {/* Header + Filter */}
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-end">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          {/* Search */}
          <div className="relative">
            <input
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setPage(1);
              }}
              placeholder="Cari ID/Nama/Kontak…"
              className="w-full sm:w-64 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-gray-300 focus:ring-2 focus:ring-blue-100"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
              ⌘K
            </span>
          </div>

          {/* Status Filter */}
          <select
            value={fStatus}
            onChange={(e) => {
              setFStatus(e.target.value);
              setPage(1);
            }}
            className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-gray-300 focus:ring-2 focus:ring-blue-100"
          >
            <option value="all">Semua Status</option>
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          {/* Produk Filter */}
          <select
            value={fProduct}
            onChange={(e) => {
              setFProduct(e.target.value);
              setPage(1);
            }}
            className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-gray-300 focus:ring-2 focus:ring-blue-100"
          >
            <option value="all">Semua Produk</option>
            {PRODUCT_OPTIONS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="grid gap-4 md:hidden">
        {current.map((client) => (
          <div
            key={client.id}
            className="rounded-2xl bg-white p-4 shadow ring-1 ring-gray-100"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {client.name}
                </p>
                <p className="text-xs text-gray-500">{client.id}</p>
                <p className="text-xs text-gray-600 mt-1">{client.contact}</p>
              </div>
              <StatusBadge value={client.status} />
            </div>

            <div className="mt-3 flex flex-col gap-2 text-sm text-gray-600">
              <p>
                <span className="font-medium">Tanggal:</span>{" "}
                {client.date || "-"}
              </p>
              <p>
                <span className="font-medium">Produk:</span>{" "}
                <span className="text-gray-700">{client.product}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">Status:</span>
                <StatusBadge value={client.status} />
              </p>
            </div>

            {/* Actions */}
            <div className="mt-4 flex justify-end gap-3">
              <ActionIcon
                icon={<FileText className="h-4 w-4" />}
                label="Assessment"
                onClick={() =>
                  route.push(
                    `/client/${client.id}/assessment?name=${encodeURIComponent(
                      client.name
                    )}`
                  )
                }
                color="blue"
              />
              <ActionIcon
                icon={<CheckCircle2 className="h-4 w-4" />}
                label="Verifikasi"
                onClick={() => setSelectedVerif(client)}
                color="green"
              />
              <ActionIcon
                icon={<Settings className="h-4 w-4" />}
                label="Setting Roles"
                onClick={() =>
                  setSelectedRole({
                    name: client.name,
                    description: `Role untuk ${client.name}`,
                  })
                }
                color="gray"
              />
            </div>
          </div>
        ))}

        {current.length === 0 && (
          <p className="text-center text-sm text-gray-500">Tidak ada data.</p>
        )}
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <div className="overflow-hidden rounded-2xl bg-white shadow ring-1 ring-gray-100">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-200 text-left text-gray-600 text-xs uppercase tracking-wide">
                <tr>
                  <Th>ID Klien</Th>
                  <Th>Nama Klien</Th>
                  <Th>Info Kontak</Th>
                  <Th>Tanggal Kerja Sama</Th>
                  <Th>Status</Th>
                  <Th>Produk</Th>
                  <Th className="text-center">Aksi</Th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {current.map((client) => (
                  <tr key={client.id} className="hover:bg-gray-50/60">
                    <Td>
                      <div className="font-semibold text-gray-800">
                        {client.id}
                      </div>
                    </Td>
                    <Td>{client.name}</Td>
                    <Td className="text-gray-600">{client.contact}</Td>
                    <Td className="text-gray-500">{client.date || "-"}</Td>
                    <Td>
                      <StatusBadge value={client.status} />
                    </Td>
                    <Td>
                      <span className="text-gray-700 font-medium">
                        {client.product}
                      </span>
                    </Td>
                    <Td className="text-center">
                      <div className="flex items-center justify-center gap-3">
                        <ActionIcon
                          icon={<FileText className="h-4 w-4" />}
                          label="Assessment"
                          onClick={() =>
                            route.push(
                              `/client/${client.id}/assessment?name=${encodeURIComponent(
                                client.name
                              )}`
                            )
                          }
                          color="blue"
                        />
                        <ActionIcon
                          icon={<CheckCircle2 className="h-4 w-4" />}
                          label="Verifikasi"
                          onClick={() => setSelectedVerif(client)}
                          color="green"
                        />
                        <ActionIcon
                          icon={<Settings className="h-4 w-4" />}
                          label="Setting Roles"
                          onClick={() =>
                            setSelectedRole({
                              name: client.name,
                              description: `Role untuk ${client.name}`,
                            })
                          }
                          color="gray"
                        />
                      </div>
                    </Td>
                  </tr>
                ))}

                {current.length === 0 && (
                  <tr>
                    <td colSpan={7} className="py-10 text-center text-gray-500">
                      Tidak ada data.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between gap-3 p-3">
            <p className="text-xs text-gray-500">
              Menampilkan {(page - 1) * pageSize + 1}
              {" - "}
              {Math.min(page * pageSize, filtered.length)} dari{" "}
              {filtered.length} data
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className={cn(
                  "rounded-xl px-3 py-2 text-xs font-medium transition",
                  page === 1
                    ? "bg-gray-50 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-gray-50 ring-1 ring-gray-200"
                )}
              >
                Sebelumnya
              </button>
              <span className="text-xs text-gray-600">
                Hal. {page} / {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className={cn(
                  "rounded-xl px-3 py-2 text-xs font-medium transition",
                  page === totalPages
                    ? "bg-gray-50 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-gray-50 ring-1 ring-gray-200"
                )}
              >
                Berikutnya
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {selectedRole && (
        <RoleDetailModal
          role={selectedRole}
          onClose={() => setSelectedRole(null)}
        />
      )}

      {selectedVerif && (
        <VerifModal
          client={{ ...selectedVerif, date: selectedVerif?.date || "" }}
          onClose={() => setSelectedVerif(null)}
        />
      )}
    </div>
  );
}
