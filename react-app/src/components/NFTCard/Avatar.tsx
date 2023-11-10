import "./Avatar.css"

interface AvatarProps {
  creationOf: string
  creatorAvatar: string
}

export default function Avatar(props: AvatarProps) {
  return(
    <div className="nft-card-avatar">
      <img src={props.creatorAvatar} alt="creator's avatar" />

      <p>Creation of <span>{props.creationOf}</span></p>
    </div>
  )
}
