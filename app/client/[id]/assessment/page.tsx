"use client";

import { useParams, useSearchParams } from "next/navigation";
import AssessmentPage from "@/components/ClientComponent/AssesmentPage";

export default function AssessmentRoutePage() {
  const params = useParams();
  const searchParams = useSearchParams();

  const id = params.id as string;
  const name = searchParams.get("name") || "Tanpa Nama";

  const client = { id, name };

  return(
    <AssessmentPage client={client} />
    ); 
}
