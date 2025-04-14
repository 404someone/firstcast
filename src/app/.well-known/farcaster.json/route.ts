export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL;

  const config = {
    accountAssociation: {
      header:"eyJmaWQiOjI2ODQzOCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDIxODA4RUUzMjBlREY2NGMwMTlBNmJiMEY3RTRiRkIzZDYyRjA2RWMifQ",
      payload: "eyJkb21haW4iOiJmaXJzdGNhc3QudmVyY2VsLmFwcCJ9",
      signature:"MHg2NTNkZGVmMTc5YzU3OTMyOWNmYjMzNGEwN2NiNjE3MmNiMzliZDRiMDQxOTFjYTAwOTMzOGNhM2RlNDgzYjczMTkzNTNiZGFhYWIxYTg4ZGQ0YzdmZjk0YmYxYjRlY2FhYzNkZjVkZWI3MWExZTNhNjYxNTI1NTA5ZWFmM2RkNDFj",
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
