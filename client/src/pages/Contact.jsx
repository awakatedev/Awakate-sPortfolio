import Head from 'next/head';
import { Icon } from '@iconify/react';
import StyledTag from '../components/StyledTag';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Awakate.dev</title>
        <meta
          name="description"
          content="Don&#039;t hesitate in contact Jhonathan for a web development project or another interesting thing ;)"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="h-screen min-h-[660px] flex-col justify-center bg-blackBg bg-Mhero-img bg-cover bg-fixed bg-center bg-no-repeat px-8 md:bg-Dhero-img ">
        <div className="h-full pt-[9vh]">
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
              Don&#039;t hesitate in contact me, What are you waiting for?
            </StyledTag>
          </section>
          <section className="flex flex-col items-center justify-center ">
            <StyledTag
              type="button2"
              additionalStyle="font-black p-px overflow-hidden bg-none hover:bg-primary rounded-lg mt-6 h-16 min-h-[4rem] w-full bg-blackBg text-primary md:w-full md:max-w-[310px] md:items-center rounded-lg"
            >
              <a
                href="mailto:jhonathanjhs10@gmail.com?Subject=Hey Jhonathan, let's build something amazing!"
                className="flex h-full w-full items-center justify-center rounded-lg bg-primary font-medium text-blackBg transition-all duration-75 ease-in hover:bg-blackBg hover:text-primary "
              >
                <Icon className="mr-3" icon="logos:google-gmail" />
                E-mail me
              </a>
            </StyledTag>
            <StyledTag
              type="button"
              additionalStyle="font-black p-px overflow-hidden bg-gradient-to-br shadow-3xl rounded-lg mt-6 h-16 min-h-[4rem] w-full bg-blackBg text-primary md:w-full md:max-w-[310px] md:items-center rounded-lg"
            >
              <a
                href="https://www.linkedin.com/in/jhonathan-saldarriaga-1a9181202/"
                className="flex h-full w-full items-center justify-center rounded-lg bg-blackBg font-medium text-primary transition-all duration-75 ease-in hover:bg-transparent hover:text-blackBg "
              >
                <Icon className="mr-3" icon="akar-icons:linkedin-box-fill" />{' '}
                Linkedin
              </a>
            </StyledTag>
            <StyledTag
              type="button"
              additionalStyle="font-black p-px overflow-hidden bg-gradient-to-br shadow-3xl rounded-lg mt-6 h-16 min-h-[4rem] w-full bg-blackBg text-primary md:w-full md:max-w-[310px] md:items-center rounded-lg"
            >
              <a
                href="https://www.instagram.com/awakate.dev/"
                className="flex h-full w-full items-center justify-center rounded-lg bg-blackBg font-medium transition-all  duration-75 ease-in hover:bg-transparent hover:text-blackBg "
              >
                <Icon className="mr-3" icon="akar-icons:instagram-fill" />{' '}
                Instagram
              </a>
            </StyledTag>
          </section>
        </div>
      </main>
    </>
  );
}

export default Contact;
