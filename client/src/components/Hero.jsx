import { useRouter } from 'next/router';
import StyledTag from './StyledTag';

function Hero() {
  const router = useRouter();

  return (
    <section className=" flex w-full flex-col items-center pt-[22vh] md:mt-0 md:justify-center md:px-[10vh]">
      <StyledTag
        type="h1"
        additionalStyle="font-black bg-clip-text text-transparent"
      >
        I&#039;m Jhonathan
      </StyledTag>

      <StyledTag type="h2" additionalStyle="text-primary sp:text-6xl mt-0.5">
        Web developer
      </StyledTag>
      <section className="mt-14 flex w-full flex-col content-center justify-center md:mt-20 md:w-7/12 md:flex-row">
        <StyledTag
          type="button2"
          additionalStyle="font-black mr-5 p-px overflow-hidden bg-none hover:bg-primary rounded-lg  h-12 min-h-[4rem] w-full bg-blackBg text-primary md:w-full md:max-w-[280px] md:items-center rounded-lg"
        >
          <button
            type="button"
            onClick={() => router.push('/About')}
            className="flex h-full w-full items-center justify-center rounded-lg bg-primary text-lg font-medium text-blackBg transition-all duration-300  ease-in hover:bg-blackBg hover:text-primary "
          >
            Know more about me
          </button>
        </StyledTag>

        <StyledTag
          type="button"
          additionalStyle="font-black p-0.5 overflow-hidden bg-gradient-to-br shadow-3xl rounded-lg mt-5 md:mt-0 h-12 min-h-[4rem] w-full bg-blackBg text-primary md:w-full md:max-w-[280px] md:items-center rounded-lg"
        >
          <button
            type="button"
            onClick={() => router.push('/Portfolio')}
            className="flex h-full w-full items-center justify-center rounded-lg bg-blackBg text-lg font-medium text-primary transition-all duration-300  ease-in hover:bg-transparent hover:text-blackBg "
          >
            Take a look at my job
          </button>
        </StyledTag>
      </section>
    </section>
  );
}
export default Hero;
