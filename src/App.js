import React from "react";
import { Container } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import UriRouter from './routers/routes';

const subCont = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        margin: '0',
        padding: '0',
        backgroundColor: 'transparent',
        width: '100%',
        maxWidth: '100%',
      },
    },
  },
});


function App() {
  
  return (
    <ThemeProvider theme={subCont}>
    <div className="App">
        <Container >
          <UriRouter />
        </Container>
    </div>
    </ThemeProvider>
  );
}

export default App;