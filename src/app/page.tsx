import { Metadata } from "next";
import App from "~/app/app";

const appUrl = process.env.NEXT_PUBLIC_URL;

export const revalidate = 300;

interface Props {
  searchParams: Promise<{
    hash: string;
  }>;
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { hash} = await searchParams;
  
  const frame = {
    version: "next",
    imageUrl: hash 
    ? `${appUrl}/og?hash=${hash}`
    : `${appUrl}/cover.png`,
        button: {
          title:"View your first cast",
    action: {
      type: "launch_frame",
      name: "first cast",
      url: `${appUrl}`,
      splashImageUrl: `${appUrl}/icon.png`,
      splashBackgroundColor: "#15202B",
      },
    },
  };

  return {
    title: "first cast",
    openGraph: {
      title: "first cast by cashlessman.eth",
      description: "first cast by cashlessman.eth",
    },
    other: {
      "fc:frame": JSON.stringify(frame),
    },
  };
}

export default function Home() {
  return (<App />);
}


