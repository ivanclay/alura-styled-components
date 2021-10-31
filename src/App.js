import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Components/GlobalStyle";

import { temaClaro, temaEscuro } from './Components/UI/Temas';
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";

function App() {
  return (
    <ThemeProvider theme={temaClaro}>
        <GlobalStyle/>
        <Cabecalho />
        <Container />
    </ThemeProvider>
  );
}

export default App;
