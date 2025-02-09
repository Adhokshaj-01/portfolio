"use client"
import { WorkFlowCard } from "@/components/workflow-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";
import { ChevronRight, FolderOpenDot, Mail } from "lucide-react";
import { useSplashScreen } from "@/context/SplashScreenContext";
import { useEffect } from "react";
import { Splash } from "next/font/google";
import SplashScreen from "./splash/SplashScreen";


const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const { showSplash, setShowSplash } = useSplashScreen();
  useEffect(() => {
    if (showSplash) {
      setTimeout(() => {
        setShowSplash(false); 
      }, 2000); 
    }
  }, [showSplash, setShowSplash]);
  return (
<>
    {showSplash ? (<SplashScreen/>) : <main className="flex flex-col min-h-[100dvh] space-y-10">
      
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
            <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={` 𑁭t's  ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Obsession - Hardwork<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>
               */}
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
       
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <BoxReveal boxColor={"#48A6A7"} duration={0.5}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
          </BoxReveal>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
          
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
  <div className="space-y-2">
    <div className="flex items-center justify-center inline-block text-foreground p-3 border-b-2 w-[fit-content] text-md text-underline">
      My Projects&nbsp;<FolderOpenDot />
    </div>
    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
      Check out my latest work
    </h2>
    <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
      I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
    </p>
  </div>
</div>

          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  // dates={project?.date'}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                 Work Flow
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                I enjoy building things and turning ideas into digital craftsmanship
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                 
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-0 ml-4 divide-y divide-dashed border-l ">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.description}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <WorkFlowCard
                    description={project.description}
                    icon={project.icons}
                  />
                </BlurFade>
                
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="queto">
      
        <div className="grid items-center justify-center mb-6 md:px-6 w-full py-12 text-center ">
        
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <BoxReveal boxColor={"grey"} duration={1}>
            <div className="text-center flex text-4xl">
               <text className="italic font-serif">Obsession</text>&nbsp;<ChevronRight size={40} color="grey"/>&nbsp;<text className="font-mono line-through">Everything</text>
            </div>
      </BoxReveal>
          </BlurFade>
         </div>
      </section>
      <section id="contact">
      
        <div className="grid items-center justify-center gap-4 px-4  md:px-6 w-full py-12 text-center ">
        
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
          
            <div className="relative z-10 space-y-3 ml-6">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm text-center">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">
                Contact Me
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to connect ? Just send a mail{" "}
                and I'll respond ASPA. 
              </p>
              <Button className="justify-center align-center ">
                <a href={`mailto:${DATA.contact.email}`}>Send a mail &nbsp;</a><Mail/></Button>

            </div>
            <InteractiveGridPattern
           className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 -z-1",
         )}
          />
          </BlurFade>
         </div>
      </section>
      {/*  */}
      
    </main>}
    </>
  );
}
