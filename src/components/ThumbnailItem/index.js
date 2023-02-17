// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateActiveImageId, isActiveImage} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const onClickedImage = () => {
    updateActiveImageId(id)
  }

  const activeImageClassName = isActiveImage ? 'btn-opacity-none' : ''

  return (
    <li className="list-item">
      <button
        type="button"
        className={`button ${activeImageClassName}`}
        onClick={onClickedImage}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
