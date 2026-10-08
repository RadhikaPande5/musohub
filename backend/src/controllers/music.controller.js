const musicModel = require("../models/music.model");
const albumModel = require("../models/album.model");
const jwt = require('jsonwebtoken');
const {uploadMusicFile} = require("../services/storage.services")

async function postSoundTrack(req, res){

    const {title} = req.body.title;
    const file = req.file;
    const result = await uploadMusicFile(file.buffer.toString('base64'))
    const music = await musicModel.create({
        uri : result.uri,
        title,
        artist: req.user.id
    })
    res.status(201).json({
        message: "Music track created successfully",
        music: {
            id: music._id,
            uri: music.uri,
            title: music.title,
            artist: music.artist
        }
    })

}

async function createAlbum(req, res){

    const { title, songIds } = req.body;

    const album = await albumModel.create({
        title,
        artist: req.user.id,
        songs: songsIds,
    })

    res.status(201).json({
        message: "Album created successfully",
        album: {
            id: album._id,
            title: album.title,
            artist: album.artist,
            songs: album.songs
        }
    })

}

async function getAllMusics(req,res){

    const musics = await musicModel
        .find()
        .limit(10)
        .populate("artist", "username email")

    res.status(200).json({
        message: "Sounds fetched successfully",
        songs: songs,
    })

}

async function getAllAlbums(req, res){

    const albums = await albumModel.find().select("title artist").populate("artist", "username email").populate("musics")

    res.status(200).json({
        message: "Albums fetched successfully",
        albums: albums
    })

}

async function getAlbumById(req, res){

    const albumId = req.params.albumId;

    const album = await albumModel.findById(albumId).populate("artist", "username email").populate("music")

    return res.status(200).json({
        message: "Album fetched successfully",
        album: album
    })

}

module.exports = {postSoundTrack, createAlbum, getAllMusics, getAllAlbums, getAlbumById}