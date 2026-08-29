import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const media = await prisma.media.findUnique({ where: { id } });
  if (!media) {
    return new NextResponse("Not found", { status: 404 });
  }

  // prisma Bytes is Uint8Array / Buffer
  const buffer = Buffer.from(media.data as any);

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": media.mimeType,
      "Content-Length": String(media.size),
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Disposition": `inline; filename="${media.filename}"`,
    },
  });
}
