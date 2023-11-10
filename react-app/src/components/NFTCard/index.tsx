import Avatar from "./Avatar"
import Caption from "./Caption"
import ImageOverlay from "./ImageOverlay"
import Info from "./Info"
import Title from "./Title"
import './index.css'

interface NFTCardProps {
  image: string
  title: string
  caption: string
  price: number
  remainingDays: number
  creationOf: string
  creatorAvatar: string
}

export default function NFTCard(props: NFTCardProps) {
  return(
    <div className="nft-card">
      <ImageOverlay image={props.image} />

      <Title title={props.title} />

      <Caption caption={props.caption} />

      <Info price={props.price} remainingDays={props.remainingDays} />

      <Avatar creatorAvatar={props.creatorAvatar} creationOf={props.creationOf} />
    </div>
  )
}
