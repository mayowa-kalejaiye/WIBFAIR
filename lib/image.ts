import sharp from "sharp";

const MAX_WIDTH = 1200;
const QUALITY = 80;

export async function processImage(file: File): Promise<{ buffer: Buffer; mimeType: string; width: number; height: number; size: number }> {
  const arrayBuffer = await file.arrayBuffer();
  const input = Buffer.from(arrayBuffer);

  // Resize to max width, keep aspect, convert to webp
  const image = sharp(input);
  const meta = await image.metadata();

  const resized = image.resize({
    width: MAX_WIDTH,
    withoutEnlargement: true,
    fit: "inside",
  });

  const buffer = await resized.webp({ quality: QUALITY }).toBuffer();
  const outMeta = await sharp(buffer).metadata();

  return {
    buffer,
    mimeType: "image/webp",
    width: outMeta.width ?? meta.width ?? 0,
    height: outMeta.height ?? meta.height ?? 0,
    size: buffer.length,
  };
}
