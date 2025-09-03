"use client";

import { useState } from "react";

type Props = {
  client: {
    id: string;
    name: string;
  };
  onClose: () => void;
};

export default function AssessmentModal({ client, onClose }: Props) {
  const [formData, setFormData] = useState({
    coreSystem: "",
    rabbitLink: "",
    rabbitUser: "",
    sendDataLink: "",
  });

  const [selections, setSelections] = useState<{ [key: number]: "vendor" | "manual" | "" }>({});

  const modules = [
    ["Registrasi", "OCR"],
    ["Registrasi", "Liveness Detection"],
    ["Registrasi", "Face Comparison"],
    ["Registrasi", "Blacklist Detection"],
    ["Pengajuan Slik", "Credit Bureau"],
    ["Pengajuan Slik", "Credit Scoring"],
    ["Collection", "Tunai"],
    ["Collection", "Virtual Account"],
    ["Collection", "Counter"],
  ];

  const handleSelection = (index: number, value: "vendor" | "manual") => {
    setSelections((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto p-6 animate-fadeIn">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Assessment - {client.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition text-xl"
          >
            ✕
          </button>
        </div>

        {/* Core System */}
        <section className="mb-8">
          <h3 className="font-semibold mb-3 text-gray-700">
            Apabila ada Core System:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { key: "coreSystem", placeholder: "Keterangan" },
              { key: "rabbitLink", placeholder: "Link Rabbit" },
              { key: "rabbitUser", placeholder: "User Rabbit" },
              { key: "sendDataLink", placeholder: "Link Kirim Data" },
            ].map(({ key, placeholder }) => (
              <input
                key={key}
                type="text"
                placeholder={placeholder}
                className="p-3 rounded-lg shadow-sm border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={(formData as any)[key]}
                onChange={(e) =>
                  setFormData({ ...formData, [key]: e.target.value })
                }
              />
            ))}
          </div>
        </section>

        {/* Third Party Section */}
        <section>
          <h3 className="font-semibold mb-4 text-gray-700 text-lg">
            Penggunaan Third Parties
          </h3>
          <div className="space-y-4">
            {modules.map(([modul, fitur], i) => {
              const selection = selections[i] || "";
              return (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-gray-50 hover:bg-gray-100 transition shadow-md flex flex-col gap-4 md:flex-row md:items-center"
                >
                  {/* Modul Info */}
                  <div className="md:w-1/5">
                    <p className="font-semibold text-gray-800">{modul}</p>
                    <p className="text-sm text-gray-500">{fitur}</p>
                  </div>

                  {/* Pilihan Vendor/Manual */}
                  <div className="flex gap-6 md:w-1/5">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name={`choice-${i}`}
                        value="vendor"
                        checked={selection === "vendor"}
                        onChange={() => handleSelection(i, "vendor")}
                        className="accent-blue-600"
                      />
                      <span className="text-gray-700 font-medium">Vendor</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name={`choice-${i}`}
                        value="manual"
                        checked={selection === "manual"}
                        onChange={() => handleSelection(i, "manual")}
                        className="accent-green-600"
                      />
                      <span className="text-gray-700 font-medium">Manual</span>
                    </label>
                  </div>

                  {/* Kalau Vendor dipilih, baru muncul select & textarea */}
                  {selection === "vendor" && (
                    <div className="flex-1 flex flex-col md:flex-row gap-4">
                      <select className="w-full md:w-1/3 p-2 rounded-lg border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
                        <option value="">Pilih Vendor</option>
                        <option value="vendor1">Vendor 1</option>
                        <option value="vendor2">Vendor 2</option>
                      </select>
                      <textarea
                        placeholder="Tulis detail vendor..."
                        className="w-full p-2 rounded-lg border border-gray-200 shadow-sm resize-none h-16 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-10">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition font-medium"
          >
            Batal
          </button>
          <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium shadow">
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}
