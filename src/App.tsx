import { useState } from "react";
import "./App.css";

function App() {
  const toolkit = [
    "JavaScript",
    "TypeScript",
    "React",
    "HTML",
    "CSS",
    "Node",
    "Testes automatizados",
  ];
  const [index, setIndex] = useState(0);
  const [toolList, setToolList] = useState(toolkit);
  const [input, setInput] = useState("");

  function handleBtnNext() {
    if (index + 1 < toolList.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleBtnPrev() {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(6);
    }
  }
  function handleClick() {
    if (input) {
      setToolList([...toolList, input]);
    }
  }

  return (
    <div className="App">
      <h1>Caixa de ferramenta de uma Pessoa Desenvolvedora</h1>
      <h2>{toolList[index]}</h2>
      <button onClick={handleBtnPrev}>Anterior</button>
      <button onClick={handleBtnNext}>Próximo</button>
      <section>
        <h3>Adicione novas ferramentas:</h3>
        <input onChange={({ target }) => setInput(target.value)} />
        <button onClick={handleClick}>Adicionar</button>
      </section>
      <section>
        <h3>Lista de intes do carrosel:</h3>
        <ul>
          {toolList.map((tool) => (
            <li>{tool}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
