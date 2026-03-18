import mongoose from "mongoose";

const musicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
    },
    artist: {
      type: String,
      required: [true, "Artist is required"],
    },
    artistId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Artist Id is required"],
    },
    musicUrl: {
      type: String,
      required: [true, "Music Url is required"],
    },
    coverImageUrl: {
      type: String,
      required: [true, "Cover Image Url is required"],
    },
  },
  { timestamps: true },
);

export const musicModel = mongoose.model("musics", musicSchema);
