import { songs } from '@/lib/constants/songs'
import type { Song } from '@/types'
import { create } from 'zustand'

type State = {
  songs: Song[]
  currentSong: Song
  isPlaying: boolean
  volume: number
  currentTime: number
  onPlayPause: () => void
  onNextPrevSong: (direction: 'next' | 'prev') => void
  onSelectSong: (id: Song['id']) => void
  onSetVolume: (volume: number) => void
  onSetCurrentTime: (time: number) => void
  onToggleFavorite: (id: Song['id']) => void
}

export const useStore = create<State>()((set, get) => ({
  songs,
  currentSong: songs[0],
  isPlaying: false,
  volume: 0.5,
  currentTime: 0,
  onPlayPause: () => set(state => ({ isPlaying: !state.isPlaying })),
  onNextPrevSong: (direction: 'next' | 'prev') =>
    set(() => {
      const { songs, currentSong } = get()

      const currentIndex = songs.findIndex(song => song.id === currentSong.id)
      const newIndex =
        (currentIndex + (direction === 'next' ? 1 : -1) + songs.length) % songs.length
      return { currentSong: songs[newIndex] }
    }),
  onSelectSong: (id: Song['id']) =>
    set(() => {
      const { songs } = get()
      const selectedSong = songs.find(song => song.id === id)
      return { currentSong: selectedSong, isPlaying: true }
    }),
  onSetVolume: (volume: number) => set({ volume }),
  onSetCurrentTime: (time: number) => set({ currentTime: time }),
  onToggleFavorite: (id: Song['id']) =>
    set(state => {
      const updatedSongs = state.songs.map(song =>
        song.id === id ? { ...song, favorite: !song.favorite } : song,
      )

      const updatedCurrentSong =
        state.currentSong.id === id
          ? { ...state.currentSong, favorite: !state.currentSong.favorite }
          : state.currentSong

      return {
        songs: updatedSongs,
        currentSong: updatedCurrentSong,
      }
    }),
}))
