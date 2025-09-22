"use client";

import { useParams, useSearchParams } from "next/navigation";
import VerifPage from "@/components/ClientComponent/VerifPage";

export default function VerifikasiRoutePage() {
  const params = useParams();
  const searchParams = useSearchParams();

  const id = params.id as string;
  const name = searchParams.get("name") || "Tanpa Nama";
  const contact = searchParams.get("contact") || "-";
  const date = searchParams.get("date") || "";
  const status = searchParams.get("status") || "-";
  const product = searchParams.get("product") || "-";

  const client = { id, name, contact, date, status, product };

  return <VerifPage client={client} onClose={() => history.back()} />;
}
