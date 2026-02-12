import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Mail, Mic, Feather } from "lucide-react";

export default function LatoyPHoustonWebsite() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-b from-black to-zinc-900">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Latoy P. Houston
        </motion.h1>
        <p className="mt-6 text-lg md:text-2xl max-w-2xl text-zinc-300">
          Author. Educator. Storyteller of resurrection, healing, and divine revelation.
        </p>
        <div className="mt-8 flex gap-4">
          <Button className="rounded-2xl text-lg px-8 py-6">
            <BookOpen className="mr-2" /> Explore the Books
          </Button>
          <Button variant="outline" className="rounded-2xl text-lg px-8 py-6">
            <Mail className="mr-2" /> Join the Journey
          </Button>
        </div>
      </section>

      {/* BOOKS SECTION */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-16">The Bast Trilogy</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <Card className="bg-zinc-900 rounded-2xl shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Bast: Dark Genesis</h3>
              <p className="text-zinc-300 mb-6">
                The beginning of a spiritual awakening. A journey through darkness toward identity and power.
              </p>
              <Button className="rounded-2xl">Buy on Amazon</Button>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 rounded-2xl shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Bast: Intimacy (Into–me–see)</h3>
              <p className="text-zinc-300 mb-6">
                A deeper revelation. Vulnerability. Healing. The sacred unveiling of truth.
              </p>
              <Button className="rounded-2xl">Buy on Amazon</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="px-6 py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8">About Latoy</h2>
          <p className="text-zinc-300 text-lg leading-relaxed">
            Latoy P. Houston is an educator and author committed to awakening identity, confronting trauma, and revealing divine purpose through storytelling. Her work explores spiritual warfare, inner healing, and resurrection through layered narrative and prophetic symbolism.
          </p>
        </div>
      </section>

      {/* SPEAKING & CONTACT */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-16">Work With Me</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <Card className="bg-zinc-900 rounded-2xl shadow-xl">
            <CardContent className="p-8 text-center">
              <Mic className="mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-4">Speaking</h3>
              <p className="text-zinc-400">Book Latoy for schools, women’s conferences, and literary events.</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 rounded-2xl shadow-xl">
            <CardContent className="p-8 text-center">
              <Feather className="mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-4">Workshops</h3>
              <p className="text-zinc-400">Writing, healing journeys, and faith-centered creative sessions.</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 rounded-2xl shadow-xl">
            <CardContent className="p-8 text-center">
              <Mail className="mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-zinc-400">For media, interviews, or collaborations.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-zinc-500 text-sm">
        © {new Date().getFullYear()} Latoy P. Houston. All Rights Reserved.
      </footer>
    </div>
  );
}
