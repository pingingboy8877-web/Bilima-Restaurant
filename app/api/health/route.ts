import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    service: "bilima-restaurant",
    status: "ok",
    version: "0.1.0",
    timestamp: new Date().toISOString(),
  });
}
