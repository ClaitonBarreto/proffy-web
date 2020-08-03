import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components'

import Routes from './routes'
import SwitchTheme from './components/SwitchTheme'

import GlobalStyle from './defaultStyles/globalstyle'
import { lightTheme, darkTheme } from './defaultStyles/themes';

function App() {

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if(theme == 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <div>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <SwitchTheme toggleTheme={toggleTheme}/>
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
