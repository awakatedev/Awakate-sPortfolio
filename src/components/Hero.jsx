import { useRouter } from 'next/router';
import StyledTag from './StyledTag';
import Donnut from "../components/DonnutAnimation";

function Hero() {
  const router = useRouter();

  return (
    <section className="w-full flex  md:flex-row justify-between gap-40 items-center pt-[14vh] md:mt-0  z-100">
      <section className=" flex w-full flex-col items-start  md:justify-start  md:w-7/12 ">
        <h1
          className={`font-black bg-clip-text text-transparent duration-700 ease-in bg-gradient-to-br text-justify   font-title duration-700 from-pink-500 to-orange-800`}
        >
          This is <br /> Jhonathan's <br /> portfolio
        </h1>

        <StyledTag type="h3" additionalStyle="text-secondary  mt-10">
          Full Stack Developer
        </StyledTag>
        <section className="mt-10 flex w-full flex-col content-center justify-start md:mt-20 md:w-7/12 md:flex-row">
          <StyledTag
            type="button2"
            additionalStyle="font-black mr-5 p-px overflow-hidden bg-none hover:bg-primary rounded-lg  h-12 min-h-[4rem] w-full bg-blackBg text-primary md:w-full md:max-w-[280px] md:items-center rounded-lg"
          >
            <button
              type="button"
              onClick={() => router.push("/About")}
              className="flex h-full w-full items-center justify-center rounded-lg bg-primary text-lg font-medium text-blackBg transition-all duration-300  ease-in hover:bg-blackBg hover:text-primary "
            >
              Learn more about me
            </button>
          </StyledTag>

          <StyledTag
            type="button"
            additionalStyle="font-black p-0.5 overflow-hidden bg-gradient-to-br shadow-3xl rounded-lg mt-5 md:mt-0 h-12 min-h-[4rem] w-full bg-blackBg text-primary md:w-full md:max-w-[280px] md:items-center rounded-lg"
          >
            <button
              type="button"
              onClick={() => router.push("/Portfolio")}
              className="flex h-full w-full items-center justify-center rounded-lg bg-blackBg text-lg font-medium text-primary transition-all duration-300  ease-in hover:bg-transparent hover:text-blackBg "
            >
              See what I&#039;ve done
            </button>
          </StyledTag>
        </section>
      </section>
    </section>
  );
}
export default Hero;
