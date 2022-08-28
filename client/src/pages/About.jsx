import Head from 'next/head';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import StyledTag from '../components/StyledTag';

import TagGlobe from '../components/TagCloud';

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
      <main className="h-full min-h-[660px] flex-col justify-center bg-blackBg bg-Mhero-img bg-cover bg-fixed bg-center bg-no-repeat px-8 md:bg-Dhero-img ">
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
                  Web Developer leader at Diverso Group
                </StyledTag>
                <StyledTag
                  type="p"
                  additionalStyle="text-sm md:text-xl text-justify"
                >
                  Skilled React.js/Wordpress Web Developer specialized in
                  front-end development and skilled in UI and UX.
                </StyledTag>
              </div>
            </div>
          </section>
          <section className="flex items-center justify-center">
            <StyledTag type="p" additionalStyle=" mb-20 w-full md:w-3/4">
              I&#039;m a 20-year-old Venezuelan passionate about technology as
              an art and the creation of digital products, I&#039;m very
              interested in creating tools that work in an economic environment,
              in conclusion I&#039;m very attracted to the fintech market.
              I&#039;m very meticulous in aspects of design and how people see
              and interact with products, which has led me to delve into the
              area of UI and UX for the creation of digital products.
              <br />
              <br />
              My specialty is front-end development, but I have experience and
              interest in the entire software development process including
              back-end development, which is an area I would like and plan to
              delve deeper into.
            </StyledTag>
          </section>
          <section className="flex w-full flex-col items-center">
            <span className="mb-10 text-center text-sm font-bold text-primary">
              YOUR DIGITAL SOLUTION
            </span>
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
              <StyledTag type="h4">My soft skills</StyledTag>
              <StyledTag type="p" additionalStyle="mt-3">
                I really like collaborative work since it is the most efficient
                way to create software. I&#039;m a very communicative and
                expressive person, orderly, punctual and I like to propose
                improvements to generate growth. I adapt easily to work
                environments and have a good performance. assuming the role of
                leader if necessary.
              </StyledTag>
              <StyledTag type="h4" additionalStyle="mt-5">
                Extra
              </StyledTag>
              <StyledTag type="p" additionalStyle="mt-3">
                I&#039;m a big fan of agile methodologies, especially SCRUM, it
                is my favorite work methodology.
              </StyledTag>
            </div>
            <StyledTag
              type="article"
              additionalStyle="w-full mt-10 md:mt-0 md:w-2/5 md:block"
            >
              <StyledTag type="h4" additionalStyle="mb-5">
                Technologies
              </StyledTag>
              <TagGlobe />
            </StyledTag>
          </section>
        </div>
      </main>
    </>
  );
}

export default About;
