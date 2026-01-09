import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function GET() {
  const dir = path.join(process.cwd(), "public", "industry");
  let files: { name: string; bytes: number }[] = [];
  try {
    files = fs.readdirSync(dir).map((name) => {
      const fp = path.join(dir, name);
      const stat = fs.statSync(fp);
      return { name, bytes: stat.size };
    });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message ?? String(e) });
  }
  return NextResponse.json({ ok: true, cwd: process.cwd(), files });
}
