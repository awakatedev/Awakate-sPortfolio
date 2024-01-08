import Head from 'next/head';
import Image from 'next/image';
import { Icon } from "@iconify/react";
import StyledTag from '../components/StyledTag';

function About() {
  return (
    <>
      <Head>
        <title>About me | Awakate.dev</title>
        <meta
          name="description"
          content="Awakate.dev | Awakatedev | Awakate, Find out more about me and what I can do!"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className=" h-full min-h-[660px] flex-col justify-center bg-blackBg bg-Mhero-img bg-cover bg-fixed bg-center bg-no-repeat px-8 md:bg-Dhero-img ">
        <div className="pt-[9vh]">
          <section className="flex w-full justify-center">
            <StyledTag
              type="h2"
              additionalStyle="text-3xl sp:text-6xl text-center font-bold text-primary mt-[1rem]"
            >
              About me
            </StyledTag>
          </section>
          <section className="flex w-full justify-center">
            <div className="my-10 flex h-40 w-full flex-row items-center justify-center overflow-hidden md:w-3/4">
              <div className="flex w-1/2 justify-end ">
                <div className="h-24 w-24 justify-around rounded-full  md:h-32 md:w-32">
                  <Image
                    className="h-24 w-24 justify-around rounded-full  md:h-32 md:w-32"
                    src="/Profile-pic.jpg"
                    alt="Vercel Logo"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
              <div className="ml-5 h-full border border-solid border-y-transparent border-l-primary border-r-transparent pl-5 md:ml-10 md:w-4/5 md:pl-10">
                <StyledTag
                  type="h5"
                  additionalStyle="text-base md:text-xl text-left font-bold text-primary mt-3 mb-3"
                >
                  Full stack developer
                </StyledTag>
                <StyledTag
                  type="p"
                  additionalStyle="text-sm md:text-xl text-justify"
                >
                  Just a guy appasionated
                  <br />
                  about high quality software creation
                </StyledTag>
              </div>
            </div>
          </section>
          <section className="flex items-center justify-center mt-8">
            <StyledTag
              type="p"
              additionalStyle="text-center mb-20 w-full md:w-3/4"
            >
              I am a Venezuelan deeply passionate about viewing technology as an
              art form and crafting digital products. I&#039;ve had the
              privilege to contribute to developments for high-profile clients
              such as ISUZU and Chevron, collaborating closely with a small yet
              skilled team of developers. Throughout my tenure as a software
              developer, I&#039;ve matured into a Full Stack Developer, taking
              on UI design responsibilities, engaging in the structuring of
              project architectures, diving into both front-end and back-end
              development for web and mobile applications, and predominantly
              overseeing the deployment, automation, and management of our cloud
              servers.
              <br />
              <br />
              I&#039;ve had exposure to a vast array of technologies, adhering
              to best practices and clean code. In the frontend sphere,
              I&#039;ve utilised technologies like React.js, Next.js, and
              Wordpress (a platform I&#039;m familiar with but not particularly
              fond of). I&#039;ve also leveraged various CSS pre-processors and
              frameworks for web front-end development, and have employed
              React-Native for mobile app development. In the back-end,
              I&#039;ve worked with technologies such as Nest.js (my preferred
              back-end framework) and Express, along with database management
              using MySQL and MongoDB.
              <br />
              <br /> With comprehensive knowledge and experience in Linux
              environments — my personal operating system of choice — I find
              myself at an advantage when working with cloud architectures,
              especially AWS. It&#039;s my preferred cloud platform, and
              I&#039;ve amassed substantial experience with services like EC2
              and AWS Lightsail. This, combined with my deep understanding of
              the operating system, allows me to optimise opportunities for
              intricate projects.
            </StyledTag>
          </section>
          <section className="flex w-full flex-col items-center">
            <div className="flex flex-col items-center justify-center">
              <StyledTag type="svg" />
              <StyledTag
                type="div"
                additionalStyle="w-16 h-16 shadow-3xl rounded-full flex justify-center items-center"
              >
                <StyledTag type="h4" additionalStyle="text-blackBg font-bold">
                  <Icon icon="fluent:brain-circuit-24-regular" />
                </StyledTag>
              </StyledTag>
              <StyledTag type="h3" additionalStyle="mt-5 mb-20">
                Skills
              </StyledTag>
            </div>
          </section>
          <section className="flex w-full flex-col justify-center pb-10 md:w-11/12 md:flex-row md:justify-around">
            <div className="w-full md:mr-20 md:w-9/12">
              <StyledTag type="h4">Soft skills</StyledTag>
              <StyledTag type="p" additionalStyle="mt-3">
                I really like collaborative work because it is the most
                efficient way to create software. I am a very communicative,
                creative, curious person and I like to propose improvements in a
                general way, both for the benefit of the team and the project
                itself.
                <br />
                <br /> I adapt easily to working environments, I have a great
                facility to learn new technologies and integrate them with my
                stack to provide powerful and efficient results focused on
                scalability, I am passionate about cloud technologies and the
                linux operating system, in which I have an advanced level of
                knowledge being able to take advantage of its potential for
                automation and endless integrations for specific cases such as
                proxies, VPN servers etc.
              </StyledTag>
            </div>
            <div className="hidden w-2/4 md:block">
              <div className="mt-16 w-full bg-transparent">
                <Image
                  className="h-24 w-full justify-around md:h-32 md:w-32"
                  src="/Console.svg"
                  alt="Linux console"
                  width={700}
                  height={400}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default About;
