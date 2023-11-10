import "./Info.css"

interface InfoProps {
  price: number
  remainingDays: number
}

export default function Info(props: InfoProps) {
  return(
    <ul className="info">
      <li>
        <img src="/icon-ethereum.svg" alt="" />
          {props.price}ETH
      </li>

      <li>
        <img src="/icon-clock.svg" alt="" />
        {props.remainingDays} days left
      </li>
    </ul>
  )
}