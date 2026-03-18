import { uploadFile } from "../config/storage.js";
import { musicService } from "../services/music.service.js";

/**
 * @name MusicControllerClass
 * @description Contains all the methods for music controllers
 * @route /api/musics/
 */
class MusicController {
  /**
   * @name createMusicController
   * @description Create music and upload file
   * @route /api/musics/createMusic
   */
  async createMusic(req, res, next) {
    try {
      const musicFile = req.files["music"][0];
      const coverImageFile = req.files["coverImage"][0];

      // * upload files
      const [music, coverImage] = await Promise.all([
        uploadFile(musicFile),
        uploadFile(coverImageFile),
      ]);

      const data = await musicService.createMusic({
        ...req.body,
        // artist: `${req.user.firstName} ${req.user.lastName}`,
        // artistId: req.user.id,
        musicUrl: music.url,
        coverImageUrl: coverImage.url,
      });
      
      return res.status(201).json({
        success: true,
        message: "Music created successfully",
        data,
      });
    } catch (e) {
      next(e);
    }
  }
}

export const musicController = new MusicController();
