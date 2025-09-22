"use client";

import { section } from "framer-motion/client";
import { useState } from "react";

type Props = {
  client: {
    id: string;
    name: string;
  };
};

export default function AssessmentPage({ client }: Props) {
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
    <div className="h-screen flex flex-col bg-white m-8">
      {/* Sticky Header */}
      <div className="top-0 z-20   px-6 pb-4 border-b sticky bg-white ">
        <h2 className="text-2xl font-bold text-gray-800 ">
          Assessment - {client.name}
        </h2>
        <p className="text-sm text-gray-500">Client ID: {client.id}</p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* Core System */}
        <section>
          <h3 className="font-semibold mb-3 text-gray-700">Apabila ada Core System:</h3>
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
                  className="p-5 rounded-xl bg-white hover:bg-gray-50 transition shadow-md flex flex-col gap-4 md:flex-row md:items-center"
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

                  {/* Kalau Vendor dipilih */}
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
      {/* Footer Sticky */}
      <div className=" px-6 py-3 flex justify-end gap-3 mb-8">
        <button className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition font-medium">
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
