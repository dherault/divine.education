import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from 'honorable'

import theme from './theme'

import Home from './scenes/Home'
import Authentication from './scenes/Authentication'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="authentication"
            element={<Authentication />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
