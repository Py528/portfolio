"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import CustomGridBackground from "@/components/CustomGridBackground";

export default function ProjectsPage() {
  return (
    <div className="bg-black flex justify-center min-h-screen relative">
      <div className="absolute inset-0 z-0">
        <CustomGridBackground />
      </div>
      <div className="flex flex-col w-full sm:w-4/5 md:w-3/4 lg:w-3/5 xl:w-3/5 px-8 pt-16 sm:py-20 lg:py-40 lg:pt-20 mx-auto h-full max-w-3xl space-y-4 relative z-10">
        <Link href="/" className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors mb-4">
          <ArrowLeft className="w-5 h-5" />
          Back
        </Link>

        <div className="text-center space-y-6 py-20">
          <h1 className="text-4xl font-bold text-white">More Projects</h1>
          <p className="text-lg text-gray-400">
            More projects are being tested locally at <span className="text-white font-semibold">port 3000</span>
          </p>
          <p className="text-sm text-gray-500">
            Stay tuned for updates on additional portfolio projects
          </p>
        </div>
      </div>
    </div>
  );
}
