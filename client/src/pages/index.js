import Head from 'next/head';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Hero from 'components/Hero';
import StyledTag from '../components/StyledTag';
import TagGlobe from '../components/TagCloud';

function Home() {
  return (
    <>
      <Head>
        <title>Home | Awakate.dev</title>
        <meta
          name="description"
          content="Jhonathan Hartswing Saldarriaga Gallango, Web-developer"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className=" h-full min-h-[660px] flex-col justify-center bg-blackBg bg-Mhero-img bg-cover bg-fixed bg-center bg-no-repeat px-8 md:bg-Dhero-img ">
        <Hero />
        <section className="flex w-full flex-col items-center">
          <StyledTag
            type="p"
            additionalStyle="mt-40 mb-5 text-center w-full md:w-3/4"
          >
            Full Stack developer experienced in the entire digital product
            development process, from research to design and development.
          </StyledTag>

          <span className="mb-10 text-center text-sm font-bold text-primary">
            YOUR DIGITAL SOLUTION
          </span>
          <div className="flex flex-col items-center justify-center">
            <StyledTag type="svg" />
            <StyledTag
              type="div"
              additionalStyle="w-16 shadow-3xl h-16 rounded-full flex justify-center items-center"
            >
              <StyledTag type="h4" additionalStyle="text-blackBg font-bold">
                <Icon icon="icon-park:code-computer" />
              </StyledTag>
            </StyledTag>

            <StyledTag type="h3" additionalStyle="mt-5 mb-20">
              Stack
            </StyledTag>
          </div>
        </section>
        <section className="flex w-full flex-col-reverse justify-center pb-10 md:w-11/12 md:flex-row md:justify-around">
          <StyledTag
            type="article"
            additionalStyle="w-full mt-10 md:mt-0 md:w-2/5 md:block"
          >
            <StyledTag type="h4" additionalStyle="mb-5">
              Technologies
            </StyledTag>
            <TagGlobe />
          </StyledTag>
          <div className="w-full md:w-5/12">
            <StyledTag type="h4" additionalStyle="text-left pb-5">
              Current stack
            </StyledTag>
            <StyledTag type="p" additionalStyle="text-left">
              I&#039;m currently working with the following stack as it is
              highly customizable, scalable and high performance for building
              software that will last over time.
            </StyledTag>

            <div className="mt-10 flex">
              <span>
                <Icon
                  className="text-6xl text-primary"
                  icon="ri:reactjs-fill"
                />
              </span>
              <div className="ml-5">
                <StyledTag type="h5" additionalStyle="text-left">
                  Next.js in web Front-end and React Native in mobile
                </StyledTag>
                <StyledTag type="p" additionalStyle="text-left pb-5">
                  Offers high performance and scalability
                </StyledTag>
              </div>
            </div>
            <div className="mt-5 flex">
              <span>
                <Icon
                  className="text-6xl text-primary"
                  icon="ph:database-duotone"
                />
              </span>
              <div className="ml-5">
                <StyledTag type="h5" additionalStyle="text-left ">
                  MySQL, MongoDB & Redis in the database
                </StyledTag>
                <StyledTag type="p" additionalStyle="text-left pb-5">
                  Offers significant optimizations for the flow of requests
                  between back-end and front-end
                </StyledTag>
              </div>
            </div>
            <div className="mt-5 flex">
              <span>
                <Icon
                  className="text-6xl text-primary"
                  icon="simple-icons:prisma"
                />
              </span>
              <div className="ml-5">
                <StyledTag type="h5" additionalStyle="text-left">
                  Nest.js with Prisma ORM in the back-end
                </StyledTag>
                <StyledTag type="p" additionalStyle="text-left pb-5">
                  Provides convenience for managing content and structuring
                  complex software simply and efficiently
                </StyledTag>
              </div>
            </div>
            <div className="mt-5 flex">
              <span>
                <Icon className="text-6xl text-primary" icon="uil:linux" />
              </span>
              <div className="ml-5">
                <StyledTag type="h5" additionalStyle="text-left">
                  Cloud & Automation
                </StyledTag>
                <StyledTag type="p" additionalStyle="text-left pb-5">
                  Advanced level of proficiency in the use of linux, cloud
                  providers such as AWS and digital ocean and the use
                  technologies for the management of cloud servers such as
                  nginx, docker and pm2.
                </StyledTag>
              </div>
            </div>
          </div>
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
              I really like collaborative work because it is the most efficient
              way to create software. I am a very communicative, creative,
              curious person and I like to propose improvements in a general
              way, both for the benefit of the team and the project itself.
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
      </main>
    </>
  );
}

export default Home;
