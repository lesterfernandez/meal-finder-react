import StyledApp from "./components/styled/App.styled";
import Header from "./components/Header";
import Content from "./components/Content";
import { useState } from "react";

function App() {
  const [meals, setMeals] = useState([]);
  const [input, setInput] = useState("");

  const search = async e => {
    e.preventDefault();
    const term = input;
    if (term.trim().length > 0) {
      setInput("");

      const result = await (
        await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      ).json();
      if (result.meals == null) {
        setMeals([]);
      } else {
        setMeals(result.meals);
      }
    } else {
      setMeals([]);
    }
  };

  const handleChange = e => {
    setInput(e.target.value);
  };

  const clear = () => {
    setMeals([]);
    setInput("");
  };

  return (
    <StyledApp>
      <Header search={search} handleChange={handleChange} input={input} clear={clear}/>
      <Content meals={meals} />
    </StyledApp>
  );
}

export default App;
