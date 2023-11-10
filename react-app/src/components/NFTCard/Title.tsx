import "./Title.css"

interface TitleProps {
  title: string
}

export default function Title(props: TitleProps) {
  return(
    <h2>
      {props.title}
    </h2>
  )
}
