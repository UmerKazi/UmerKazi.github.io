import Head from "next/head";
const PageHead = ({ page }) => {
  return (
    <Head>
      <title>umerkazi | {page}</title>
      <meta
        name="description"
        content="Hey there, it's Umer!"
      />
    </Head>
  );
};

export default PageHead;
