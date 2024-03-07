import Head from "next/head";
import { useRouter } from "next/router";

// !Guide: Change these default meta
const defaultMeta = {
  title: "Saviour Security",
  siteName: "Saviour Security",
  description:
    "We are Saviour security  and provide  best security guard services . We are consistently listed as the best private security agency",
  url: "",
  type: "security",
  robots: "follow, noindex",
  /**
   * No need to be filled, will be populated with openGraph function
   * If you wish to use a normal image, just specify the path below
   */
  image: "savior-logo.svg",
};

function SeoProps(props) {
  this.date = props.date;
  this.templateTitle = props.templateTitle;
  //Assign any other properties from defaultMeta if exists.
  Object.assign(this, props);
}

<Seo seoprops={SeoProps} />;
// type SeoProps = {
//   date?: string,
//   templateTitle?: string,
// } & Partial<typeof defaultMeta>;

export default function Seo(props) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta["title"] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  // Use siteName if there is templateTitle
  // but show full title if there is none
  // ? Uncomment code below if you want to use default open graph
  // meta['image'] = openGraph({
  //   description: meta.description,
  //   siteName: props.templateTitle ? meta.siteName : meta.title,
  //   templateTitle: props.templateTitle,
  // });

  return (
    <Head>
      <meta charset="UTF-8" />
      <meta http-equiv="content-language" content="es" />
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      {/* <link
        rel="icon"
        href="/assets/imgs/template/savior-logo.svg"
        type="image/icon type"
        sizes="16x16"
      /> */}
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* // !Guide: Remove or change to your handle */}
      {/* <meta name='twitter:site' content='@' /> */}
      {/* <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta
            name="publish_date"
            property="og:publish_date"
            content={meta.date}
          />
           // !Guide: Remove or change to your name 
          <meta name="author" property="article:author" content="SaaSPay" />
        </>
      )} */}

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}
