// import PropTypes from 'prop-types';

import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-7">
      {cards.map((card) => (
        <Card key={card.id} card={card}></Card>
      ))}
    </div>
  );
};

Cards.propTypes = {};

export default Cards;
