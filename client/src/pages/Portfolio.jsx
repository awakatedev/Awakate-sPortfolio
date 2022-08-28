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
      <main className="flex h-full min-h-[660px] flex-col bg-blackBg bg-Mhero-img bg-cover bg-fixed bg-center bg-no-repeat px-5 md:bg-Dhero-img lg:px-10 sp:px-10">
        <div className="mt-[9vh]">
          <div className="flex w-full justify-center">
            <StyledTag
              type="h2"
              additionalStyle="text-3xl sp:text-6xl text-center font-bold text-primary max-w-[440px] mt-[1rem]"
            >
              Portfolio
            </StyledTag>
          </div>
          <div className="my-10 grid w-full grid-cols-card2 justify-between gap-x-2 gap-y-[5vh] pt-5 sm:grid-cols-card3 md:grid-cols-cardDesktop2  md:gap-x-4 lg:grid-cols-cardDesktop3 xl:grid-cols-cardDesktop4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
    </>
  );
}
export default Portfolio;
