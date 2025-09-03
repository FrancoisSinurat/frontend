"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

export default function RegisterCard() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    produk: "PPOB",
    pic: "",
    name: "",
    phone: "",
    email: "",
    jabatan: "",
    badanHukum: "",
    perusahaan: "",
    emailTagihan: "",
    website: "",
    akta: "",
    nib: "",
    npwp: "",
    izinUsaha: "",
    ktpDireksi: "",
    npwpDireksi: "",
    otp: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        setMessage("✅ Register berhasil!");
      } else {
        setMessage("❌ " + data.error);
      }
    } catch {
      setMessage("⚠️ Server error");
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    { id: 1, label: "Data Perusahaan" },
    { id: 2, label: "Dokumen Legal" },
    { id: 3, label: "Verifikasi OTP" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <Card className="shadow-2xl border border-slate-200 rounded-2xl backdrop-blur bg-white/90 flex flex-col h-[85vh]">
          <CardHeader className="pb-4">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800">
                Registrasi
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Lengkapi semua langkah di bawah ini
              </p>
            </div>

            {/* Progress Bar */}
            <div className="relative flex items-center justify-between mt-8 px-4">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 rounded-full -z-10" />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.4 }}
                className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full -z-10"
              />
              {steps.map((s) => (
                <div
                  key={s.id}
                  className="flex flex-col items-center text-center w-1/3"
                >
                  <motion.div
                    className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 shadow-sm ${
                      step >= s.id
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-slate-500 border-slate-300"
                    }`}
                  >
                    {s.id}
                  </motion.div>
                  <span
                    className={`mt-2 text-[11px] sm:text-xs ${
                      step >= s.id
                        ? "text-blue-600 font-medium"
                        : "text-slate-500"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </CardHeader>

          {/* Scrollable content */}
          <CardContent className="flex-1 overflow-y-auto px-4 sm:px-8">
            <form
              onSubmit={step === 3 ? handleRegister : (e) => e.preventDefault()}
              className="flex-1 flex flex-col gap-6"
            >
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <StepOne key="step1" data={formData} onChange={handleChange} />
                )}
                {step === 2 && (
                  <StepTwo key="step2" data={formData} onChange={handleChange} />
                )}
                {step === 3 && (
                  <StepThree key="step3" data={formData} onChange={handleChange} />
                )}
              </AnimatePresence>
            </form>

            {message && (
              <p
                className={`text-sm text-center mt-4 ${
                  message.includes("✅")
                    ? "text-green-600"
                    : message.includes("❌")
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {message}
              </p>
            )}
          </CardContent>

          <CardFooter className="flex justify-between px-4 sm:px-8 py-4  bg-WHITE rounded-b-2xl">
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className="rounded-xl"
              >
                Back
              </Button>
            )}
            {step < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="ml-auto bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow"
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                className="ml-auto bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow"
                disabled={loading}
              >
                {loading ? "Loading..." : "Register"}
              </Button>
            )}
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
