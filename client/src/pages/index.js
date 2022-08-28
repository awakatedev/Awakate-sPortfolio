import Hero from 'components/Hero';
import Head from 'next/head';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import StyledTag from '../components/StyledTag';

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
            Web developer experienced in the entire digital product development
            process, from research to design and development.
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
                  icon="akar-icons:nextjs-fill"
                />
              </span>
              <div className="ml-5">
                <StyledTag type="h5" additionalStyle="text-left">
                  Next.js in Front-end
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
                  icon="akar-icons:graphql-fill"
                />
              </span>
              <div className="ml-5">
                <StyledTag type="h5" additionalStyle="text-left ">
                  Graphql as the consulting manager
                </StyledTag>
                <StyledTag type="p" additionalStyle="text-left pb-5">
                  Offers significant optimizations for the flow of requests
                  between back-end and front-end
                </StyledTag>
              </div>
            </div>
            <div className="mt-5 flex">
              <span>
                <Icon className="text-6xl text-primary" icon="bi:wordpress" />
              </span>
              <div className="ml-5">
                <StyledTag type="h5" additionalStyle="text-left">
                  Wordpress as the back-end
                </StyledTag>
                <StyledTag type="p" additionalStyle="text-left pb-5">
                  Provides convenience for managing content and structuring
                  complex software simply and efficiently
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
              additionalStyle="w-16 shadow-3xl h-16 rounded-full flex justify-center items-center"
            >
              <StyledTag type="h4" additionalStyle="text-blackBg font-bold">
                <Icon icon="akar-icons:clipboard" />
              </StyledTag>
            </StyledTag>
            <StyledTag type="h3" additionalStyle="mt-5 mb-20">
              Workflow
            </StyledTag>
          </div>
        </section>
        <section className="grid w-full grid-cols-card1 justify-between gap-2 pb-20 sm:grid-cols-card3 md:grid-cols-cardDesktop2  ">
          <StyledTag type="article" additionalStyle="mt-5 ">
            <StyledTag type="h3" additionalStyle=" font-bold">
              <Icon icon="akar-icons:search" />
            </StyledTag>
            <StyledTag type="h5" additionalStyle=" font-bold">
              User Research
            </StyledTag>
            <StyledTag type="p" additionalStyle="mt-3">
              Process in which we carry out a deep search in order to understand
              the needs of the business, and how having a website could promote
              it, providing comfort to potential users/customers and optimizing
              processes through automation and in this way developing a tool
              that adds value to the business/company. This process consists of
              user and benchmark research to analyze the competitions strategies
              and establish an assertive and innovative proposal.
            </StyledTag>
          </StyledTag>

          <StyledTag type="article" additionalStyle="mt-5 ">
            <StyledTag type="h3" additionalStyle=" font-bold">
              <Icon icon="iconoir:google-docs" />
            </StyledTag>
            <StyledTag type="h5" additionalStyle=" font-bold">
              Information architecture
            </StyledTag>
            <StyledTag type="p" additionalStyle="mt-3">
              After having clear all the aspects of the market, purpose and
              objectives to be achieved obtained through the research, the phase
              of establishing an information structure begins, the How? It will
              be shown to users and it will be the decisive factor to achieve a
              hook and success in the product.
            </StyledTag>
          </StyledTag>

          <StyledTag type="article" additionalStyle="mt-5 ">
            <StyledTag type="h3" additionalStyle=" font-bold">
              <Icon icon="fluent:brain-circuit-20-regular" />
            </StyledTag>
            <StyledTag type="h5" additionalStyle=" font-bold">
              UX creation
            </StyledTag>
            <StyledTag type="p" additionalStyle="mt-3">
              Once all the information that the project will provide to users
              has been structured, the phase of establishing the flow of how
              users will be able to interact and navigate through the platform,
              providing intuitive systems, which is another essential factor
              that will guarantee the permanence of users, follows. on the
              platform.
            </StyledTag>
          </StyledTag>
          <StyledTag type="article" additionalStyle="mt-5 ">
            <StyledTag type="h3" additionalStyle=" font-bold">
              <Icon icon="ph:figma-logo-light" />
            </StyledTag>
            <StyledTag type="h5" additionalStyle=" font-bold">
              UI design
            </StyledTag>
            <StyledTag type="p" additionalStyle="mt-3">
              And of course, aesthetics and how something is shown to a viewer
              is a key factor in generating a positive or negative response to
              something, which is why we take on the task of designing visually
              appealing interfaces that generate a positive impact on users.
            </StyledTag>
          </StyledTag>

          <StyledTag type="article" additionalStyle="mt-5 ">
            <StyledTag type="h3" additionalStyle=" font-bold">
              <Icon icon="bi:code-slash" />
            </StyledTag>
            <StyledTag type="h5" additionalStyle=" font-bold">
              Development
            </StyledTag>
            <StyledTag type="p" additionalStyle="mt-3">
              My development philosophy is based on (Mobile first) development,
              which is to start developing giving priority to the most used
              consumer devices globally (Phones) and once this branch is 100%
              optimized, the structure for devices is developed. larger, be they
              tablets or computers.
            </StyledTag>
          </StyledTag>

          <StyledTag type="article" additionalStyle="mt-5 ">
            <StyledTag type="h3" additionalStyle=" font-bold">
              <Icon icon="iconoir:test-tube" />
            </StyledTag>
            <StyledTag type="h5" additionalStyle=" font-bold">
              Testing
            </StyledTag>
            <StyledTag type="p" additionalStyle="mt-3">
              Once all the development and integration of the software is
              finished, the process of quality testing and correction of
              possible errors follows before being deployed as a final result,
              and in this way guarantee high-quality software.
            </StyledTag>
          </StyledTag>

          <StyledTag type="article" additionalStyle="mt-5 ">
            <StyledTag type="h3" additionalStyle=" font-bold">
              <Icon icon="carbon:deployment-policy" />
            </StyledTag>
            <StyledTag type="h5" additionalStyle=" font-bold">
              Deployment
            </StyledTag>
            <StyledTag type="p" additionalStyle="mt-3">
              Once the Software has been fully developed and its quality and
              correct operation tested, the platform deployment process begins,
              as the final process for delivery as a finished product.
            </StyledTag>
          </StyledTag>
        </section>
      </main>
    </>
  );
}

export default Home;
