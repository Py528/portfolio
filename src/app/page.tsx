"use client";
import Button96 from "@/components/button96";
import { MapPin, MoveRight, SquareArrowDown } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import CustomGridBackground from "@/components/CustomGridBackground";

export default function Home() {
  return (
    <div className="bg-black flex justify-center min-h-screen relative">
      <div className="absolute inset-0 z-0">
        <CustomGridBackground />
      </div>
      <div className="flex flex-col w-full sm:w-4/5 md:w-3/4 lg:w-3/5 xl:w-3/5 px-8 pt-16 sm:py-20 lg:py-40 lg:pt-20 mx-auto h-full max-w-3xl space-y-4 relative z-10">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Pranav Shinde</h1>
          <p className="text-gray-500 text-lg">Cloud & DevOps Engineer</p>
        </div>

        <div className="flex items-center space-x-2">
          <MapPin className="text-white" />
          <span className="text-slate-400">Pune, India</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2">
          <Link
            href="/shindepranav.pdf"
            download
            className="text-white rounded-md border-2 px-3 py-1 flex items-center gap-2 text-sm"
          >
            <SquareArrowDown />
            Resume
          </Link>
          <Link
            href="https://www.linkedin.com/in/pranaavshinde/"
            target="_blank"
          >
            <FaLinkedin className="text-white size-6" />
          </Link>
          <Link href="https://x.com/Pranaav2412" target="_blank">
            <FaSquareXTwitter className="text-white size-6" />
          </Link>
          <Link href="https://github.com/py528" target="_blank">
            <FaGithub className="text-white size-6" />
          </Link>
        </div>
        <Button96>Get to the fun side</Button96>
        <Tabs
          defaultValue="work"
          className="bg-transparent backdrop-brightness-50"
        >
          <TabsList className="grid w-full grid-cols-2 bg-transparent border border-white/20">
            <TabsTrigger
              value="work"
              className="!text-white data-[state=active]:bg-white/90 data-[state=active]:!text-white"
            >
              Work
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="!text-white data-[state=active]:bg-white/90 data-[state=active]:!text-white"
            >
              Education
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="work"
            className="bg-transparent backdrop-brightness-50"
          >
            <Card className="bg-transparent border-1 shadow-none pl-12 border-white/20">
              <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-6 ms-6">
                  <span className="absolute flex items-center justify-center w-10 h-10 bg-black rounded-full -start-5">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </span>

                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Jan 2025 - Apr 2025
                  </time>
                  <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                    Vital Vistara
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Full Stack Development Intern
                  </p>
                  <ul className="text-sm text-gray-400 dark:text-gray-500 list-disc list-inside space-y-1"> <li>Deployed scalable, cloud-native applications on AWS, achieving 99.9% availability.</li> <li>Architected microservices using Docker and Kubernetes for robust system performance.</li> <li>Automated CI/CD pipelines (GitHub Actions, AWS CodePipeline), cutting deployment time by 40%.</li> </ul>
                </li>
                <li className="mb-6 ms-6">
                  <span className="absolute flex items-center justify-center w-10 h-10 bg-black rounded-full -start-5">
                    <Image
                      src="/oneqid-removebg.png"
                      alt="OneQID Logo"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </span>

                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Jun 2024 - Aug 2024
                  </time>
                  <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                    Oneqid Technologies, IIT Delhi Research and Innovation Park
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Web Development Intern
                  </p>
                  <ul className="text-sm text-gray-400 dark:text-gray-500 list-disc list-inside space-y-1"> <li>Migrated legacy infrastructure to Next.js, resulting in a 35% increase in page load performance.</li> <li>Implemented automated Vercel deployment workflows, boosting Lighthouse performance scores from 65 to 92.</li> </ul>
                </li>
              </ol>
            </Card>
          </TabsContent>

          <TabsContent
            value="education"
            className="bg-transparent backdrop-brightness-50"
          >
            <Card className="bg-transparent border-1 shadow-none pl-12 border-white/20">
              <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-6 ms-6">
                  <span className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full -start-5">
                    <Image
                      src="/mmcoe-removebg.png"
                      alt="OneQID Logo"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </span>

                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    2023 - Present
                  </time>
                  <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                    Marathwada Mitra Mandal&apos;s College of Engineering
                    &#40;MMCOE&#41;
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    B.E. in AI and Data Science
                  </p>
                </li>
                <li className="mb-6 ms-6">
                  <span className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full -start-5">
                    <Image
                      src="/bvjniot-removebg.png"
                      alt="OneQID Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </span>

                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    2020 - 2023
                  </time>
                  <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                    Bharati Vidyapeeth Deemed University &#40;BVJNIOT&#41;
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Diploma in Computer Technology
                  </p>
                </li>
              </ol>
            </Card>
          </TabsContent>
        </Tabs>
        <div className="skills">
          <div className="text-xl text-white backdrop-brightness-50">
            Skills
          </div>
          <div className="flex flex-wrap gap-1 text-white backdrop-brightness-10">
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              AWS
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              Azure
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              GCP
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              Kubernetes
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              Docker
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              Terraform
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              GitHub Actions
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              AWS CodePipeline
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              CloudFormation
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              TypeScript
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              Node.js
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              Next.js
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              Kotlin
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              Python
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              PostgreSQL
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              MongoDB
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              Firebase
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              Supabase
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              Linux
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              Bash
            </span>
          </div>
        </div>
        <div className="projects flex flex-col gap-4 pb-4 backdrop-brightness-50">
          <div className="text-xl text-white">Projects</div>
          <div className="skilllearn flex flex-col gap-3 p-4 rounded-xl border border-white/20 bg-transparent backdrop-brightness-50 text-white">
            {/* <video
              src="/sample.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-lg w-full aspect-video object-cover"
            /> */}
            <Image
              src="/skill learn ui.png"
              alt="Skill Learn"
              width={1280}
              height={720}
              className="rounded-lg w-full object-cover"
            />

            <div className="text-base font-semibold">Skill Learn - Interactive Learning Platform</div>
            <p className="text-xs opacity-50">Sep 2024 - Present</p>

            <p className="text-xs opacity-70 leading-relaxed">
              Full Stack Developer | Architected secure course media storage using AWS S3 with strict IAM policies. 
              Engineered Docker-based execution service for sandboxed code execution. Deployed scalable backend using 
              Supabase (PostgreSQL) and TypeScript.
            </p>

            <div className="technologies flex flex-wrap gap-1 text-[10px]">
              {[
                "Next.js",
                "TypeScript",
                "AWS S3",
                "Docker",
                "Supabase",
                "PostgreSQL",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded-sm bg-white/10 border border-white/10 text-[8px]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="athlete-connect flex flex-col gap-3 p-4 rounded-xl border border-white/20 bg-transparent backdrop-brightness-50 text-white">
            <div className="w-full grid grid-cols-3 gap-2">
              <Image
                src="/athlete connect main dashboard.jpeg"
                alt="Athlete Connect Main Dashboard"
                width={400}
                height={600}
                className="rounded-lg w-full h-80 object-contain"
              />
              <Image
                src="/athelete connect test dashboard.jpeg"
                alt="Athlete Connect Test Dashboard"
                width={400}
                height={600}
                className="rounded-lg w-full h-80 object-contain"
              />
              <Image
                src="/posedetection.jpeg"
                alt="Pose Detection"
                width={400}
                height={600}
                className="rounded-lg w-full h-80 object-contain"
              />
            </div>

            <div className="text-base font-semibold">Athlete Connect - AI Sports Talent Assessment</div>
            <p className="text-xs opacity-50">Aug 2024 - Oct 2024</p>

            <p className="text-xs opacity-70 leading-relaxed">
              Backend & Cloud Engineer | Implemented real-time data synchronization and secure authentication using Firebase, 
              supporting high-concurrency usage. Optimized backend logic for AI-powered fitness assessments. 
              Top 10 National Finalist, Smart India Hackathon.
            </p>

            <div className="technologies flex flex-wrap gap-1 text-[10px]">
              {[
                "Firebase",
                "Kotlin",
                "ML Kit",
                "Real-time DB",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded-sm bg-white/10 border border-white/10 text-[8px]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="more-projects flex gap-3 p-4 rounded-xl border border-white/2 0 bg-transparent text-white">
            More Projects
            <MoveRight />
          </div>
        </div>
      </div>
    </div>
  );
}
