import { ImageResponse } from "next/og";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const text = url.searchParams.get("text");



  return new ImageResponse(
    (
<div tw="flex flex-col w-full h-full bg-[#8a63d2] text-white font-sans border-8 border-gray-300 p-6 justify-center rounded-xl items-center">
  
<div  tw="text-9xl font-extrabold">{text}</div>
<div tw="absolute bottom-10 right-12 rounded-lg border-2 border-white p-2 font-bold">Bot By cashlessman.eth</div>
  <img
    src='https://i.imgur.com/I2rEbPF.png'
    alt="Overlay"
    tw="absolute top-10 left-10 w-15 h-15 rounded-lg border-4 border-white"
  />



</div>
    ),
    {
      width: 600,
      height: 400,
    }
  );
}
