import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./HelpCenter.scss";
import { IoMdArrowForward } from "react-icons/io";
const HelpCenter = () => {
  const [cards, setCards] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const fetchCards = async () => {
    try {
      const response = await fetch("http://localhost:4000/cards");
      const data = await response.json();
      setCards(data.cards);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div className="helpCenter">
      <div className="help-sec">
        <h1>How can we help?</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <IoMdArrowForward />
        </div>
      </div>
      <div className="cards">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <Card
              key={card._id}
              title={card.title}
              description={card.description}
            />
          ))
        ) : (
          <p>No Results Found!</p>
        )}
      </div>
    </div>
  );
};

export default HelpCenter;
