import { GameHeader } from "./components/GameHeader"
import { Card } from "./components/Card"
import { use, useEffect, useState } from "react"


const cardValues = [
  "👾",
  "🕹️",
  "🎲",
  "🏆",
  "🖥️",
  "🤖",
  "🖥",
  "📦",
  "👾",
  "🕹️",
  "🎲",
  "🏆",
  "🖥️",
  "🤖",
  "🖥",
  "📦",
]

function App() {
  const [cards, setCards] = useState([])

  const initializeGame = () => {
    //SHUFFLE CARDS
    const finalCards = cardValues.map((value, index) => (
      {
        id: index,
        value,
        isFLipped: false,
        isMatched: false,
      }
    ))

    serCards(finalCards);
  }

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (card) => {
    if (card.isFlipped || card.isMatched) {
      return;
    }

    const newCards = cards.map((c) => {
      if (c.id === card.id){
        return{...c, isFlipped: true };
      } else {}
    });
  };

  return (
    <div className="app">
      <GameHeader score={2} moves={2} />

      <div className="cards-grid">
        {cards.map((card) => (
          <Card card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  )
}

export default App


