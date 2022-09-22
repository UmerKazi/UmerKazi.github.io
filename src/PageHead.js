import Head from "next/head";
const PageHead = ({ page }) => {
  return (
    <Head>
      <title>umerkazi | {page}</title>
    </Head>
  );
};

export default PageHead;
