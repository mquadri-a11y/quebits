import { Metadata } from "next";

interface MetadataProps {
  title?: string;
  description?: string;
  icons?: Metadata["icons"];
  noIndex?: boolean;
  keywords?: string[];
  author?: string;
  twitterHandle?: string;
  type?: "website" | "article" | "profile";
  locale?: string;
  alternates?: Record<string, string>;
  publishedTime?: string;
  modifiedTime?: string;
}

export const generateMetadata = ({
  title = `Quebits - AI Solutions`,
  description = `We design and build custom AI systems, software and interfaces for businesses.`,
  icons = [
    {
      rel: "icon",
      url: "/icons/icon.png",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      url: "/icons/icon-light.png",
      media: "(prefers-color-scheme: dark)",
    },
  ],
  noIndex = false,
  keywords = [
    "AI marketing automation",
    "social media marketing",
    "software development",
    "startup development",
    "custom software",
    "web development",
    "mobile app development",
    "business software",
    "tech consulting",
    "MVP development",
    "full-stack development",
  ],
  author = "Quebits",
  type = "website",
}: MetadataProps = {}): Metadata => {
  const metadataBase = new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://www.quebits.ca/"
  );

  return {
    metadataBase,
    title: {
      template: `%s | Quebits`,
      default: title,
    },

    description,
    keywords,
    authors: [{ name: author }],
    creator: author,
    publisher: "Quebits",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://quebits.ca",
      siteName: "Quebits",
      title: "Quebits - AI Solutions",
      description:
        "We design and build custom AI systems, software and interfaces for businesses.",
      images: [
        {
          url: "/public/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "Quebits - Custom Software Development Agency",
        },
        {
          url: "/public/opengraph-image.png",
          width: 1200,
          height: 1200,
          alt: "Quebits Logo",
        },
      ],
    },
    icons,
    applicationName: "Quebits",
    category: "technology",
  };
};
