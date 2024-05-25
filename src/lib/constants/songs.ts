import type { Song } from '@/types'

export const songs: Song[] = [
  {
    id: 1,
    artist: 'TVARI',
    title: 'Tokyo Cafe',
    source: 'src/assets/songs/song1.mp3',
    cover: 'src/assets/covers/song1.jpg',
    favorite: false,
  },
  {
    id: 2,
    artist: 'Top-Flow',
    title: 'Summer Party',
    source: 'src/assets/songs/song2.mp3',
    cover: 'src/assets/covers/song2.jpg',
    favorite: true,
  },
  {
    id: 3,
    artist: 'TVARI',
    title: 'Venice Beach',
    source: 'src/assets/songs/song3.mp3',
    cover: 'src/assets/covers/song3.jpg',
    favorite: false,
  },
]
