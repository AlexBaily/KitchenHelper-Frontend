import React from "react";
import { Container, Button, Paper } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import SplashImg from '../images/splash.jpg';
import { useAuth0 } from "../utils/react-auth0-spa";


  

const theme = createMuiTheme({
    overrides: {
      MuiContainer: {
        root: {
          fontFamily: 'Roboto',
          color: 'white',
          justifyContent: 'center',
          align: 'center',
          textAlign: 'center',
          alignItems: 'center',
          direction: 'row',
          backgroundImage: `url(${SplashImg})`,
          backgroundPosition: 'center',
          width: '100%',
          maxWidth: '100%',
          height: '50%',
          margin: '0',
          padding: '0',
        },
      },
    },
  });


const Splash = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    
    return (
     <div>
      <ThemeProvider theme={theme}>
          <Container>  
              <p>KitchenHelper</p>
            {!isAuthenticated && (
                <button onClick={() => loginWithRedirect({})}>Log in</button>
            )}
         </Container>
      </ThemeProvider>
    </div>
  );
}

export default Splash;