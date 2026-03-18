import ImageKit, { toFile } from "@imagekit/nodejs";
import { logger } from "./logger.js";
import { MusicError } from "../utils/musicError.js";
import env from "./env.js";


const client = new ImageKit({
  publicKey: env.IMAGEKIT_PUBLIC_KEY,
  privateKey: env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: env.IMAGEKIT_URL_ENDPOINT,
});

/**
 * @name uploadFile
 * @description uploads file to imagekit
 * @param {*} file
 */
export async function uploadFile(file) {
  try {
    logger.info("UPLOADING", file.originalname);

    const res = await client.files.upload({
      file: await toFile(file.buffer, file.originalname),
      fileName: file.originalname,
      folder: "/musics",
    });

    logger.info("✅ UPLOADED", { url: res.url, fileId: res.fileId });

    return {
      url: res.url,
      fileId: res.fileId,
      name: res.name,
    };
  } catch (e) {
    logger.error("ImageKit Upload Error:", e);
    throw new MusicError("File upload failed");
  }
}
