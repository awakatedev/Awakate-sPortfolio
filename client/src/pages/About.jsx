import Head from 'next/head';
import { Icon } from '@iconify/react';
import StyledTag from '../components/StyledTag';

function About() {
  return (
    <>
      <Head>
        <title>About me | Awakate.dev</title>
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
                <div className="h-24 w-24 justify-around rounded-full bg-textGray md:h-32 md:w-1/5" />
              </div>
              <div className="ml-5 h-full border border-solid border-y-transparent border-l-primary border-r-transparent pl-5 md:ml-10 md:w-4/5 md:pl-10">
                <StyledTag
                  type="p"
                  additionalStyle="text-base md:text-xl text-left font-bold text-primary mt-3 mb-3"
                >
                  Web Developer leader at Diverso Group
                </StyledTag>
                <StyledTag
                  type="p"
                  additionalStyle="text-sm md:text-xl text-justify"
                >
                  I specialized in front-end development and skilled in UI and
                  UX to create high quality interfaces.
                </StyledTag>
              </div>
            </div>
          </section>
          <section className="flex items-center justify-center">
            <StyledTag type="p" additionalStyle=" mb-20 w-full md:w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </StyledTag>
          </section>
          <section>
            <StyledTag
              type="p"
              additionalStyle="mb-10 text-sm font-bold text-primary text-center "
            >
              YOUR DIGITAL SOLUTION
            </StyledTag>
            <div className="flex flex-col items-center justify-center">
              <StyledTag type="div" additionalStyle="w-0.5 h-20" />
              <StyledTag
                type="div"
                additionalStyle="w-20 h-20 rounded-full flex justify-center items-center"
              >
                <StyledTag type="h3" additionalStyle="text-blackBg font-bold">
                  <Icon icon="fluent:brain-circuit-24-regular" />
                </StyledTag>
              </StyledTag>
              <StyledTag type="h3" additionalStyle="mt-5 mb-20">
                Skills
              </StyledTag>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default About;
