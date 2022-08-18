import { useRouter } from 'next/router';
import StyledTag from './StyledTag';

function Hero() {
  const router = useRouter();

  return (
    <section className=" flex w-full flex-col items-center pt-[25vh] md:mt-0 md:justify-center md:px-[10vh]">
      <StyledTag
        type="h1"
        additionalStyle="font-black bg-clip-text text-transparent"
      >
        I am Jhonathan
      </StyledTag>

      <StyledTag type="h2" additionalStyle="text-primary sp:text-6xl mt-[1rem]">
        Web developer
      </StyledTag>
      <StyledTag
        type="button"
        additionalStyle="font-black p-0.5 overflow-hidden bg-gradient-to-br shadow-3xl rounded-lg mt-[10vh] h-20 min-h-[4rem] w-full bg-blackBg text-primary md:w-full md:max-w-[410px] md:items-center rounded-lg"
      >
        <button
          type="button"
          onClick={() => router.push('/Portfolio')}
          className="flex h-full w-full items-center justify-center rounded-lg bg-blackBg font-medium text-primary transition-all duration-75 ease-in hover:bg-transparent hover:text-blackBg "
        >
          Take a look at my job
        </button>
      </StyledTag>
    </section>
  );
}
export default Hero;
