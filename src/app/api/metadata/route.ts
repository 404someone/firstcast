import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const hash = req.nextUrl.searchParams.get("hash");
    const fid = req.nextUrl.searchParams.get("fid");


    if (!hash) {
        return NextResponse.json({ error: "Missing hash" }, { status: 400 });
    }

    return NextResponse.json({
        name: `first cast/reply of Fid:${fid} `,
        description: "An NFT of first cast/reply on farcaster",
        image: `https://client.warpcast.com/v2/cast-image?castHash=${hash}`,
        attributes: [{ trait_type: "fid", value: fid }
        ],
    });
}
