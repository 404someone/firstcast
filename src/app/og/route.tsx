import { ImageResponse } from "next/og";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const text = url.searchParams.get("text");



  return new ImageResponse(
    (
<div tw="flex w-[600px] h-[400px] justify-center items-center bg-[#b4a3d4]">
  <img
    src="https://client.warpcast.com/v2/cast-image?castHash=0xda9e81d4cb81b774abc8f131b115cc37ac327671"
    alt="Overlay"
    tw="h-full object-contain"
  />
</div>


    ),
    {
      width: 600,
      height: 400,
    }
  );
}
