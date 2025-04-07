export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL;

  const config = {
    accountAssociation: {
      header:"",
      payload: "",
      signature:"",
    },
    frame: {
      version: "1",
      name: "LetterBot",
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl:  `${appUrl}/nft?text=LetterBot`,  
      buttonTitle: "LetterBot",
      splashImageUrl: `${appUrl}/icon.png`,
      splashBackgroundColor: "#00c9ff",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
