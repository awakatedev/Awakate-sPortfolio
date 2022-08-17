import Head from 'next/head';
import { Icon } from '@iconify/react';
import StyledTag from '../components/StyledTag';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Awakate.dev</title>
      </Head>
      <main className="mtmin-h-[660px] h-full flex-col justify-center bg-blackBg bg-Mhero-img bg-cover bg-fixed bg-center bg-no-repeat px-8 md:bg-Dhero-img ">
        <div className="pt-[9vh]">
          <section className="flex w-full justify-center">
            <StyledTag
              type="h2"
              additionalStyle="text-3xl sp:text-6xl text-center font-bold text-primary mt-[1rem]"
            >
              Contact me
            </StyledTag>
          </section>

          <section className="flex items-center justify-center">
            <StyledTag
              type="p"
              additionalStyle="mt-10 text-center mb-10 w-full md:w-3/4"
            >
              Don't hesitate in contact me, What are you waiting for?
            </StyledTag>
          </section>
          <section className="flex flex-col items-center justify-center ">
            <StyledTag
              type="button"
              additionalStyle="font-black p-0.5 overflow-hidden bg-none hover:bg-primary rounded-lg mt-10 h-20 min-h-[4rem] w-full bg-blackBg text-primary md:w-full md:max-w-[410px] md:items-center rounded-lg"
            >
              <span
                onClick={() => router.push('/Portfolio')}
                className="flex h-full w-full items-center justify-center rounded-lg bg-primary font-medium text-blackBg transition-all duration-300 duration-75 ease-in hover:bg-blackBg hover:text-primary  "
              >
                <Icon className="mr-3" icon="logos:google-gmail" />
                E-mail me
              </span>
            </StyledTag>
            <StyledTag
              type="button"
              additionalStyle="font-black p-0.5 overflow-hidden bg-gradient-to-br shadow-3xl rounded-lg mt-10 h-20 min-h-[4rem] w-full bg-blackBg text-primary md:w-full md:max-w-[410px] md:items-center rounded-lg"
            >
              <a
                href="#"
                className="flex h-full w-full items-center justify-center rounded-lg bg-blackBg font-medium text-primary transition-all duration-300 duration-75 ease-in hover:bg-transparent hover:text-blackBg "
              >
                <Icon className="mr-3" icon="akar-icons:linkedin-box-fill" />{' '}
                Linkedin
              </a>
            </StyledTag>
            <StyledTag
              type="button"
              additionalStyle="font-black p-0.5 overflow-hidden bg-gradient-to-br shadow-3xl rounded-lg mt-10 h-20 min-h-[4rem] w-full bg-blackBg text-primary md:w-full md:max-w-[410px] md:items-center rounded-lg"
            >
              <a
                href="#"
                className="flex h-full w-full items-center justify-center rounded-lg bg-blackBg font-medium transition-all duration-300 duration-75 ease-in hover:bg-transparent hover:text-blackBg "
              >
                <Icon className="mr-3" icon="akar-icons:instagram-fill" />{' '}
                Instagram
              </a>
            </StyledTag>
          </section>
          <section>
            <StyledTag
              type="p"
              additionalStyle="mt-20 mb-10 text-sm font-bold text-primary text-center "
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

export default Contact;
