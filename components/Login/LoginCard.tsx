"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginCard() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${API_URL}/sign-in/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), 
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        setMessage("✅ Login berhasil!");
      } else {
        setMessage("❌ " + (data.error || "Login gagal"));
      }
    } catch {
      setMessage("⚠️ Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center  px-5 py-5">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-2xl border border-slate-200 rounded-2xl backdrop-blur bg-white/90">
          <CardHeader className="pb-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800">
              Login
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Masuk menggunakan email dan password
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLogin} className="flex flex-col gap-7">
              <div>
                <Label htmlFor="email" className="pb-4">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="masukkan email"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="pb-4">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>

              {message && (
                <p
                  className={`text-sm text-center mt-2 ${
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
            </form>
          </CardContent>

          <CardFooter className="flex justify-center px-6 py-4 rounded-b-2xl">
            <Button
              type="submit"
              onClick={handleLogin}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow px-6"
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
