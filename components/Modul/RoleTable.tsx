"use client";

import { Settings } from "lucide-react";

import Th from "@/components/atoms/Th";
import Td from "@/components/atoms/Td";
import ActionIcon from "@/components/atoms/ActionIcon";


type Role = {
  id: string;
  name: string;
  description: string;
};

export default function RoleTable({
  roles,
  onView,
}: {
  roles: Role[];
  onView: (role: Role) => void;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="bg-blue-200 text-left text-gray-600 text-xs uppercase tracking-wide">
          <tr>
            <Th>ID</Th>
            <Th>Nama Role</Th>
            <Th>Deskripsi</Th>
            <Th className="text-center">Aksi</Th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {roles.map((role) => (
            <tr key={role.id} className="hover:bg-gray-50/60">
              <Td>
                <div className="font-semibold text-gray-800">{role.id}</div>
              </Td>
              <Td>{role.name}</Td>
              <Td className="text-gray-600">{role.description}</Td>
              <Td className="text-center">
                <div className="flex items-center justify-center gap-3">
                  
                  <ActionIcon
                    icon={<Settings className="h-4 w-4" />}
                    label="Setting"
                    onClick={() => onView(role)}
                    color="gray"
                  />
                </div>
              </Td>
            </tr>
          ))}

          {roles.length === 0 && (
            <tr>
              <td colSpan={4} className="py-10 text-center text-gray-500">
                Tidak ada data role.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

