import { songs } from '@/lib/constants/songs'
import type { Song } from '@/types'
import { create } from 'zustand'
import { createRef } from 'react'

type State = {
  songs: Song[]
  player: React.RefObject<HTMLAudioElement>
}

const useGetPlayer = (): React.RefObject<HTMLAudioElement> => {
  const audioRef = createRef<HTMLAudioElement>()

  return audioRef
}

export const useTestStore = create<State>()(() => ({
  songs,
  player: useGetPlayer(),
}))
