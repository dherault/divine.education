import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from 'honorable'

import theme from './theme'

import Layout from './components/Layout'
import Home from './scenes/Home'
import Knowledge from './scenes/Knowledge'
import Authentication from './scenes/Authentication'
import AuthenticationProvider from './components/AuthenticationProvider'
import articles from './articles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthenticationProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="knowledge"
                element={<Knowledge />}
              />
              <Route
                path="authentication"
                element={<Authentication />}
              />
              {articles.map(({ path, Component }) => (
                <Route
                  key={path}
                  path={`~/${path}`}
                  element={<Component />}
                />
              ))}
            </Routes>
          </Layout>
        </BrowserRouter>
      </AuthenticationProvider>
    </ThemeProvider>
  )
}

export default App
