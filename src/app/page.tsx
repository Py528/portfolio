import Button96 from "@/components/button96";
import { MapPin, MoveRight, SquareArrowDown } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[rgb(34,34,46)] flex justify-center min-h-screen">
      <div className="flex flex-col w-3/5 pt-16 space-y-4">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Pranav Shinde</h1>
          <p className="text-gray-500 text-lg">Software Engineer</p>
          <p className="text-gray-500 text-lg">F1 Enthusiast</p>
        </div>

        <div className="flex items-center space-x-2">
          <MapPin className="text-white" />
          <span className="text-slate-400">Pune, India</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2">
          <Link
            href="/resume 23:04.pdf"
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
        <Tabs defaultValue="work" className="bg-transparent">
          <TabsList className="grid w-full grid-cols-2 bg-transparent border border-white/10">
            <TabsTrigger
              value="work"
              className="!text-white data-[state=active]:bg-white/10 data-[state=active]:!text-white"
            >
              Work
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="!text-white data-[state=active]:bg-white/10 data-[state=active]:!text-white"
            >
              Education
            </TabsTrigger>
          </TabsList>
          <TabsContent value="work" className="bg-transparent">
            <Card className="bg-transparent border-1 shadow-none pl-12 border-white/10">
              <ol className="relative border-s border-gray-200 dark:border-gray-700">
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
                    Feb 2025 - April 2025
                  </time>
                  <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                    Oneqid Technologies Private Limited
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
                      Latest
                    </span>
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Data Engineer Intern
                  </p>
                </li>
              </ol>
            </Card>
          </TabsContent>

          <TabsContent value="education" className="bg-transparent">
            <Card className="bg-transparent border-1 shadow-none pl-12 border-white/10">
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
                    June 2023 - Present
                  </time>
                  <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                    Marathwada Mitra Mandal&apos;s College of Engineering
                    &#40;MMCOE&#41;
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
                      Latest
                    </span>
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Artificial Engineering & Data Science
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
                    June 2020 - June 2023
                  </time>
                  <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                    Bharati Vidyapeeth Deemed University &#40;BVJNIOT&#41;
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Computer Technology
                  </p>
                </li>
              </ol>
            </Card>
          </TabsContent>
        </Tabs>
        <div className="skills">
          <div className="text-xl text-white">Skills</div>
          <div className="flex flex-wrap gap-1 text-white">
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/8">
              JavaScript
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              TypeScript
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              Python
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              ReactJS
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              NextJS
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              PostgreSQL
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              Tensorflow
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              Kafka
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              Java
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              Scala
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              Apache Spark
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              AWS
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              Apache Spark
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              Spring Boot
            </span>
            <span className="px-3 py-1 rounded-sm text-sm border border-white/10 bg-white/10">
              Machine Learning
            </span>
          </div>
        </div>
        <div className="projects flex flex-col gap-4 pb-4">
          <div className="text-xl text-white">Projects</div>
          <div className="skilllearn flex flex-col gap-3 p-4 rounded-xl border border-white/10 bg-transparent text-white">
            {/* <video
              src="/sample.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-lg w-full aspect-video object-cover"
            /> */}
            <Image
              src="/skilllearn.png"
              alt="Skill Learn"
              width={1280}
              height={720}
              className="rounded-lg w-full object-cover"
            />

            <div className="text-base font-semibold">Skill Learn</div>

            <p className="text-xs opacity-70 leading-relaxed">
              A micro-course platform for project-based learning and verifiable
              credential issuance.
            </p>

            <div className="technologies flex flex-wrap gap-1 text-[10px]">
              {[
                "Next.js",
                "TailwindCSS",
                "NextAuth.js",
                "Framer Motion",
                "Redux Toolkit",
                "Spring Boot",
                "OAuth2",
                "JWT",
                "AWS S3",
                "Kafka",
                "Docker",
                "Heroku",
                "GitHub Actions",
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
          <div className="tunesync flex flex-col gap-3 p-4 rounded-xl border border-white/10 bg-transparent text-white">
            <Image
              src="/tunesync.png"
              alt="TuneSync"
              width={1280}
              height={720}
              className="rounded-lg w-full object-cover"
            />

            <div className="text-base font-semibold">TuneSync</div>

            <p className="text-xs opacity-70 leading-relaxed">
              Real-time music insights platform with Kafka & Spark pipelines, ML
              recommendations, and BI dashboards via Grafana & Tableau.
            </p>

            <div className="technologies flex flex-wrap gap-1 text-[10px]">
              {[
                "Kafka",
                "Apache Spark",
                "Python",
                "Scikit-learn",
                "AWS S3",
                "AWS Lambda",
                "AWS Redshift",
                "Grafana",
                "Tableau",
                "Docker",
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
          <div className="more-projects flex gap-3 p-4 rounded-xl border border-white/10 bg-transparent text-white">
            More Projects<MoveRight />
          </div>
        </div>
      </div>
    </div>
  );
}
