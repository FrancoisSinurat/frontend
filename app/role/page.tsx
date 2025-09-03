"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import RoleTable from "@/components/Modul/RoleTable";
import RoleDetailModal from "@/components/ModalsComponent/RoleDetailModal";
import AddRoleModal from "@/components/ModalsComponent/AddModulModal";

type Role = {
  id: string;
  name: string;
  description: string;
};

export default function RolePage() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [openAddModal, setOpenAddModal] = useState(false);

  const roles: Role[] = [
    { id: "1", name: "SuperAdmin", description: "Backoffice" },
    { id: "2", name: "Collection", description: "Aplikasi" },
    { id: "3", name: "Sales", description: "Aplikasi" },
  ];

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-gray-800">
          Setting Module Aplikasi
        </h1>
      {/* Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-6">
        <div/>
        <button
          onClick={() => setOpenAddModal(true)}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
        >
          <Plus size={18} />
          Tambah Module Role
        </button>
      </div>

      {/* Table */}
      <div className="rounded-2xl bg-white shadow ring-1 ring-gray-100 overflow-hidden">
        <RoleTable roles={roles} onView={(role) => setSelectedRole(role)} />
      </div>

      {/* Detail Modal */}
      {selectedRole && (
        <RoleDetailModal
          role={selectedRole}
          onClose={() => setSelectedRole(null)}
        />
      )}

      {/* Add Modal */}
      {openAddModal && <AddRoleModal onClose={() => setOpenAddModal(false)} />}
    </main>
  );
}
