import { render, screen } from "@testing-library/react"
import NFTCard from "."

const equilibrium = {
  image: "/image-equilibrium.jpg",
  title: "Equilibrium #3429",
  caption: "Our Equilibrium collection promotes balance and calm.",
  price: 0.041,
  remainingDays: 3,
  creationOf: "Jules Wyvern",
  creatorAvatar: "/image-avatar.png"
}

test("renders container with all related children", () =>{
  render(<NFTCard {...equilibrium} />)
  expect(screen.getByAltText("nft's image")).toBeInTheDocument()
  expect(screen.getByText("Equilibrium #3429")).toBeInTheDocument()
  expect(screen.getByText("Our Equilibrium collection promotes balance and calm.")).toBeInTheDocument()
  expect(screen.getByText("0.041ETH")).toBeInTheDocument()
  expect(screen.getByText("3 days left")).toBeInTheDocument
  expect(screen.getByText("Jules Wyvern")).toBeInTheDocument()
  expect(screen.getByAltText("creator's avatar")).toBeInTheDocument()
})