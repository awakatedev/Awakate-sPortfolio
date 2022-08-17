import Hero from 'components/Hero';
import Head from 'next/head';
import { Icon } from '@iconify/react';
import StyledTag from '../components/StyledTag';

function Home() {
  return (
    <>
      <Head>
        <title>Home | Awakate.dev</title>
      </Head>
      <main className="mtmin-h-[660px] h-full flex-col justify-center bg-blackBg bg-Mhero-img bg-cover bg-fixed bg-center bg-no-repeat px-8 md:bg-Dhero-img ">
        <Hero />
        <section className="flex w-full flex-col items-center">
          <StyledTag
            type="p"
            additionalStyle="mt-40 mb-20 text-center w-full md:w-3/4"
          >
            Web developer experienced in the entire digital product development
            process, from research to design and development.
          </StyledTag>
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
      </main>
    </>
  );
}

export default Home;
