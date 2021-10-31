import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Components/GlobalStyle";

import { temaClaro, temaEscuro } from './Components/UI/Temas';
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { BotaoTema } from "./Components/UI";
import SwitcherTheme from './Components/SwitcherTheme';

function App() {
  const [tema, setTema] = useState(true);

  const ToogleTheme = () => {
    setTema((tema) => !tema)
  }

  return (
    <ThemeProvider theme={ tema ? temaClaro : temaEscuro }>
        <GlobalStyle/>
        <BotaoTema onClick={ToogleTheme}>
          <SwitcherTheme tema={tema}/>
        </BotaoTema>
        <Cabecalho />
        <Container />
    </ThemeProvider>
  );
}

export default App;
