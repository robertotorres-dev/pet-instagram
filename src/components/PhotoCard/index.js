import React from 'react'
import { Link } from 'react-router-dom'
import { ImgWrapper, Img, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useMutationToogleLike } from '../../hoc/useMutationToogleLike'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const { mutation } = useMutationToogleLike()

  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const handleFavClick = () => {
    !liked && mutation({
      variables: { input: { id } }
    })
    setLiked(!liked)
  }

  return (
    <Article ref={element}>
      {
      show &&
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
    }
    </Article>
  )
}
