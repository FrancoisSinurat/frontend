"use client";

import { useState } from "react";

type ModuleFeature = {
  module: string;
  features: string[];
};

export default function RoleDetailModal({ onClose }: { onClose: () => void }) {
  const moduleData: ModuleFeature[] = [
    {
      module: "Sales & Surveyor",
      features: [
        "Check in",
        "Check out",
        "Leads",
        "Pengajuan Slik",
        "Simulasi Angsuran",
        "Laporan Kehadiran",
        "Pengajuan Izin",
        "Kontrak",
        "Prospects",
        "Kelompok",
        "Persiapan Pembiayaan",
      ],
    },
    { module: "Credit Score", features: ["Pengajuan Slik", "Simulasi Angsuran"] },
    {
      module: "Collection",
      features: [
        "Checking",
        "Check in",
        "Check out",
        "Prospects",
        "Kelompok",
        "Persiapan Pembiayaan",
      ],
    },
    { module: "Internal Approval", features: ["Leads", "Pengajuan Slik", "Kontrak"] },
  ];

  const [roleName, setRoleName] = useState("");
  const [roleDesc, setRoleDesc] = useState("");
  const [permissions, setPermissions] = useState<{ [key: string]: boolean }>({});

  const togglePermission = (feature: string) => {
    setPermissions((prev) => ({
      ...prev,
      [feature]: !prev[feature],
    }));
  };

  const handleSave = () => {
    const newRole = {
      name: roleName,
      description: roleDesc,
      permissions,
    };
    console.log("New Role:", newRole);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 animate-fadeIn">
        
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Tambah Module Role</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Form Input */}
        <div className="mb-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nama Role
            </label>
            <input
              type="text"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Contoh: Supervisor Sales"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Keterangan
            </label>
            <textarea
              value={roleDesc}
              onChange={(e) => setRoleDesc(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Contoh: Role untuk mengelola tim sales & surveyor"
              rows={3}
            />
          </div>
        </div>

        {/* Module & Feature Permissions */}
        <div className="space-y-6">
          {moduleData.map((mod, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-gray-50 hover:bg-gray-100 transition shadow-sm"
            >
              <h3 className="font-semibold text-lg mb-4 text-gray-700">
                {mod.module}
              </h3>
              {mod.features.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {mod.features.map((feat, fIdx) => (
                    <label
                      key={fIdx}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition ${
                        permissions[`${mod.module}-${feat}`]
                          ? "bg-blue-50 border-blue-400 shadow"
                          : "bg-white border-gray-200 hover:shadow-sm"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={permissions[`${mod.module}-${feat}`] || false}
                        onChange={() => togglePermission(`${mod.module}-${feat}`)}
                        className="accent-blue-600 h-4 w-4"
                      />
                      <span className="text-gray-700">{feat}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm italic">Tidak ada fitur</p>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-8 border-t pt-4">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition font-medium"
          >
            Batal
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium shadow"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}
