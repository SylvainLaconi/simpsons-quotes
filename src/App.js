import "./App.css";
import axios from "axios";
import Card from "./components/Card";
import { useState } from "react";

const initialCard = {
  quote: "I believe the children are the future... Unless we stop them now!",
  character: "Homer Simpson",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  characterDirection: "Right",
};

function App() {
  const [quotecard, setQuotecard] = useState(initialCard);

  const getSimpsonsQuotes = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data)
      .then((data) => setQuotecard(data[0]));
  };

  return (
    <div>
      <button onClick={getSimpsonsQuotes}>Retrieve quote</button>
      <Card {...quotecard} />
    </div>
  );
}

export default App;
