import MusicPlayer from '@/components/MusicPlayer'
import TrackList from '@/components/TrackList'

export default function App() {
  return (
    <div className="bg-black text-customGray">
      <div className="flex flex-col container mx-auto h-[calc(100dvh)] max-h-[calc(100dvh)] rounded-lg gap-2 py-2 justify-between max-w-6xl">
        <TrackList />
        <MusicPlayer />
      </div>
    </div>
  )
}
