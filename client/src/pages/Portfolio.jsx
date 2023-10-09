import Head from 'next/head';
import Card from '../components/Card';
import StyledTag from '../components/StyledTag';

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio | Awakate.dev</title>
        <meta
          name="description"
          content="Thake a look of the things Awakate.dev can do!"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex h-full flex-col bg-blackBg bg-Mhero-img bg-cover bg-fixed bg-center bg-no-repeat px-5 md:bg-Dhero-img lg:px-10 sp:px-10">
        <div className="mt-[9vh] h-full">
          <div className="flex w-full justify-center">
            <StyledTag
              type="h2"
              additionalStyle="text-3xl sp:text-5xl text-center font-bold text-primary max-w-[440px] mt-[1rem]"
            >
              Portfolio
            </StyledTag>
          </div>
          <section className="flex h-full w-full justify-center md:mx-10">
            <Card />
          </section>
        </div>
      </main>
    </>
  );
}
export default Portfolio;
