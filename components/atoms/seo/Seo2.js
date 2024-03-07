import { NextSeo } from "next-seo";

const Page = () => (
  <>
    <NextSeo
      title="Saviour Security"
      description="We are Saviour security  and provide  best security guard services . We are consistently listed as the best private security agency"
      canonical="https://www.savioursecurity.com"
      openGraph={{
        href: "/assets/imgs/template/savior-logo.svg",
        title: "Saviour Security",
        description:
          "We are Saviour security  and provide  best security guard services . We are consistently listed as the best private security agency",
        images: [
          {
            url: "https://www.example.ie/og-image-01.jpg",
            width: 800,
            height: 600,
            alt: "Og Image Alt",
            type: "image/jpeg",
          },
          {
            url: "https://www.example.ie/og-image-02.jpg",
            width: 900,
            height: 800,
            alt: "Og Image Alt Second",
            type: "image/jpeg",
          },
          { url: "https://www.example.ie/og-image-03.jpg" },
          { url: "https://www.example.ie/og-image-04.jpg" },
        ],
        siteName: "SiteName",
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
    />
  </>
);

export default Page;
