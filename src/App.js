import { createGlobalStyle } from "styled-components";
import Card from "./components/Card";

const GlobalStyle = createGlobalStyle`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    background-color: rgba(0, 0, 0, 1);
`;


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Card />
    </div>
  );
}

export default App;
