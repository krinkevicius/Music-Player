import MobilePlayer from '@/components/MobilePlayer'
import MusicPlayer from '@/components/MusicPlayer'
import TrackList from '@/components/TrackList'

export default function App() {
  return (
    <div className="bg-black text-spotifyGray">
      <div className="flex flex-col container mx-auto h-screen max-h-screen rounded-lg gap-2 py-2 lg:flex-row-reverse justify-between">
        <TrackList />
        <MobilePlayer />
        <MusicPlayer />
      </div>
    </div>
  )
}
