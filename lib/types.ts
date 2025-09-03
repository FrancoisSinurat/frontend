export type Client = {
  id: string;
  name: string;
  contact: string;
  date?: string;
  status: string;
  product: string;
};

export type Role = {
  name: string;
  description: string;
};

export const STATUS_OPTIONS = [
  "Submit",
  "Assesment",
  "Implementasi",
  "Migrasi",
  "Training",
  "Pendampingan",
] as const;

export const PRODUCT_OPTIONS = [
  "TOP Operator",
  "TOP CBS",
  "TOP CCS",
  "TOP Mobile",
] as const;

export const INITIAL_CLIENTS: Client[] = [
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
