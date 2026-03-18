import { musicModel } from "../models/music.model.js";

/**
 * @name MusicServiceClass
 * @description Contains all the methods for music service, intercting with DB
 * @route /api/musics/
 */
class MusicService {
  /**
   * @name createMusicService
   * @description Create music and upload file
   */
  async createMusic({
    title,
    description,
    artist,
    artistId,
    musicUrl,
    coverImageUrl,}
  ) {
    return await musicModel.create({
      title,
      description,
      artist,
      artistId,
      musicUrl,
      coverImageUrl,
    });
  }
}

export const musicService = new MusicService();
