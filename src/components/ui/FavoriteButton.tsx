import { useStore } from '@/store'
import { Song } from '@/types'
import handleNoPropagationClick from '@/utils/handleNoPropagationClick'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { IoIosCheckmarkCircle } from 'react-icons/io'

type FavoriteButtonProps = {
  songId: Song['id']
  isFavorite: boolean
  isShowing: boolean
}

export default function FavoriteButton({ songId, isFavorite, isShowing }: FavoriteButtonProps) {
  const buttonTitle = isFavorite ? 'Remove from favorites' : 'Add to favorites'
  const onToggleFavorite = useStore(state => state.onToggleFavorite)

  return (
    (isShowing || isFavorite) && (
      <button
        onClick={handleNoPropagationClick(() => onToggleFavorite(songId))}
        className="flex items-center justify-center"
        title={buttonTitle}
      >
        {isFavorite ? (
          <IoIosCheckmarkCircle className="fill-spotifyGreen size-6" />
        ) : (
          <IoMdAddCircleOutline className="fill-spotifyGray size-6 hover:fill-white" />
        )}
      </button>
    )
  )
}
