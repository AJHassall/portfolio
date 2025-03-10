import i1 from '/Echo.png';
import i2 from '/wolfenstein.png';
import i3 from '/YouTubeCommentDeleter.png';

import j1 from '/icbc_london_logo.jpeg';
import j2 from '/mandon_software_limited_logo.jpeg';

import { Container, SimpleGrid, Text, Title, TypographyStylesProvider } from '@mantine/core';
import { HeroHeader } from '@/components/HeroHeader/HeroHeader';
import { ContactMeSection } from '@/components/Intro/Contact/ContactSection';
import { Project } from '@/components/Project/Project';
import { SkillsSection } from '@/components/SkillSection/SkillSection';
import { WorkHistoryCard } from '@/components/WorkHIstoryCard/WorkHistoryCard';
import { DownloadResumeLink } from '@/components/ResumeLink/ResumeLink';

export function HomePage() {
  return (
    <>
      <HeroHeader />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="var(--mantine-color-blue-2)"
          fill-opacity="1"
          d="M0,128L60,133.3C120,139,240,149,360,144C480,139,600,117,720,133.3C840,149,960,203,1080,229.3C1200,256,1320,256,1380,256L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>
      <Container size="sm" p="xl" bg="white">
        <section id="Introduction">
          <SimpleGrid verticalSpacing="sm">
            <TypographyStylesProvider fz="sm">
              <Text inherit>
                I'm a full-stack developer with over three years of experience building robust web
                applications in the banking and insurance sectors. My technical expertise spans C#,
                ASP.NET, SQL, and Azure, alongside modern front-end frameworks like React and
                Next.js.
              </Text>
              <Text inherit>
                Throughout my career, I've consistently tackled complex technical challenges,
                optimized database performance, and delivered impactful solutions within Agile
                environments. I'm passionate about continuous learning and recently achieved the
                Azure AZ-900 certification.
              </Text>
              <Text inherit>
                In addition to my professional experience, I'm actively refining my skills through
                personal projects, ensuring I stay ahead of modern development practices."
              </Text>
            </TypographyStylesProvider>
          </SimpleGrid>
        </section>
        
        <section id="WorkExperience">
          <SimpleGrid verticalSpacing="xl" pt="xl">
            <Title id="WorkExperience"> Work Experience</Title>
            <WorkHistoryCard
              title="Software Engineer | Consultant"
              imageUrl={j1} // Replace with your image path
              description="Contributed to enhancing financial applications using C#, ASP.NET, and SQL. Worked in an Agile environment, managed application releases, resolved technical issues, and optimized database queries. Integrated RabbitMQ for seamless communication between applications."
              company="Wiley Edge (Placement at ICBC London Limited)"
              startDate={new Date(2022, 4, 1)} // May 1, 2022
              endDate={new Date(2023, 7, 31)} // August 31, 2023
              skills={['C#', 'ASP.NET', 'SQL', 'Agile', 'RabbitMQ', 'MS SQL']}
            />
            <WorkHistoryCard
              title="Software Developer"
              imageUrl={j2} // Replace with your image path
              description="Developed web-based insurance solutions using React, JavaScript, ASP.NET, and Azure. Progressed from an apprenticeship to leading projects, implementing features like quote calculations, new policies, claim management, and payments. Proficient in Azure cloud infrastructure."
              company="Mandon Software Limited"
              startDate={new Date(2020, 7, 1)} // August 1, 2020
              endDate={new Date(2022, 4, 31)} // May 31, 2022
              skills={[
                'React',
                'JavaScript',
                'ASP.NET',
                'Azure',
                'CSS',
                'MVC',
                'Progress Open Edge',
              ]}
            />
          </SimpleGrid>
          <DownloadResumeLink/>
        </section>
        <section id="Projects">
          <SimpleGrid verticalSpacing="xl" pt="xl">
            <Title> Projects</Title>
            <Project
              title="Echo"
              description="Real time desktop audio transposition using rust."
              imageUrl={i1}
              githubUrl="https://github.com/AJHassall/echo"
              technologies={[
                'Rust',
                'Neon-Rs',
                'Tokio',
                'Whisper-AI',
                'React',
                'Electron',
                'Webpack',
                'TypeScript',
                'JavaScript',
              ]}
            />
            <Project
              title="SFML wolfenstein"
              description="wolfenstein style game engine built with C++ and SFML"
              imageUrl={i2}
              githubUrl="https://github.com/AJHassall/sfml-wolfenstein"
              technologies={['C++', 'SFML', 'PREMAKE']}
            />
            <Project
              title="Youtube comment blocker"
              description="Hides all comments from selected users."
              imageUrl={i3}
              githubUrl="git@github.com:AJHassall/youtube-comment-blocker.git"
              technologies={['Extension', 'Javascript', 'Docker', 'Postgres']}
            />
          </SimpleGrid>
        </section>
        <section id="Skills">
          <SkillsSection />
        </section>
        <section id='Contact'>
          <ContactMeSection />
        </section>
      </Container>
    </>
  );
}
