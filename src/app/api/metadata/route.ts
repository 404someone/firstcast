import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const text = req.nextUrl.searchParams.get("text");

    if (!text) {
        return NextResponse.json({ error: "Missing token ID" }, { status: 400 });
    }

    return NextResponse.json({
        name: `letters #${text} `,
        description: "An NFT by LetterBot",
        image: `https://letters-bot.vercel.app/nft?text=${text}`,
        attributes: [{ trait_type: "letters", value: text }
        ],
    });
}
