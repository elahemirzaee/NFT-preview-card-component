import './ImageOverlay.css'

interface ImageOverlayProps {
  image: string
}

export default function ImageOverlay(props: ImageOverlayProps) {
  return(
    <figure className="image-overlay">
      <img className="nft-card-image" src={props.image} alt="nft's image" />

      <figcaption>
          <img src="/icon-view.svg" alt="" />
      </figcaption>
    </figure>
  )
}
