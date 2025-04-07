import { Metadata } from "next";
import App from "~/app/app";

const appUrl = process.env.NEXT_PUBLIC_URL;

export const revalidate = 300;

interface Props {
  searchParams: Promise<{
    text: string;
  }>;
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { text} = await searchParams;
  
  const frame = {
    version: "next",
    imageUrl: text 
    ? `${appUrl}/og?text=${text}`
    : `${appUrl}/og?text=LetterBot`,
        button: {
          title: text?`Mint ${text}`: "Mint LetterBot",
    action: {
      type: "launch_frame",
      name: "letterBot",
      url: `${appUrl}`,
      splashImageUrl: `${appUrl}/icon.png`,
      splashBackgroundColor: "#00c9ff",
      },
    },
  };

  return {
    title: "LetterBot",
    openGraph: {
      title: "LetterBot by cashlessman.eth",
      description: "LetterBot by cashlessman.eth",
    },
    other: {
      "fc:frame": JSON.stringify(frame),
    },
  };
}

export default function Home() {
  return (<App />);
}


