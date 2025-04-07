import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {

  const fid = req.nextUrl.searchParams.get("fid");

  if (!fid) {
    console.log("Error: fid parameter is missing");
    return NextResponse.json(
      { error: "fid parameter is required" },
      { status: 400 }
    );
  }

  try {
    const firstCastUrl = `https://hub.pinata.cloud/v1/castsByFid?pageSize=1&fid=${fid}`;
    const firstCastResponse = await axios.get(firstCastUrl);
    
console.log(firstCastResponse.data.messages[0].hash)
    return NextResponse.json({
      hash:firstCastResponse.data.messages[0].hash
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
