import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from 'honorable'

import theme from './theme'

import Layout from './components/Layout'
import Home from './scenes/Home'
import Authentication from './scenes/Authentication'
import AuthenticationProvider from './components/AuthenticationProvider'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthenticationProvider>
        <Layout>
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
        </Layout>
      </AuthenticationProvider>
    </ThemeProvider>
  )
}

export default App
