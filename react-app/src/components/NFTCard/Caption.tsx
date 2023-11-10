import "./Caption.css"

interface CaptionProps {
  caption: string
}

export default function Caption(props: CaptionProps) {
  return(
    <p className="caption">
      {props.caption}
    </p>
  )
}