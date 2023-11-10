import './App.css';
import NFTCard from './components/NFTCard';

const equilibrium = {
  image: "/image-equilibrium.jpg",
  title: "Equilibrium #3429",
  caption: "Our Equilibrium collection promotes balance and calm.",
  price: 0.041,
  remainingDays: 3,
  creationOf: "Jules Wyvern",
  creatorAvatar: "/image-avatar.png"
}

function App() {
  return (
    <div className="container">
      <NFTCard {...equilibrium} /> 
    </div>
  );
}

export default App;
