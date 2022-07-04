import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { A, Flex } from 'honorable'

import ViewerContext from '../contexts/ViewerContext'

function Layout({ children }: any) {
  const viewer = useContext(ViewerContext)

  return (
    <Flex
      direction="column"
      width="100vw"
      height="100vh"
      maxWidth="100vw"
      maxHeight="100vh"
      overflowY="scroll"
      overflowX="hidden"
    >
      <Flex
        py={1}
        px={2}
        align="center"
        flexShrink={0}
        position="absolute"
        zIndex={9999}
      >
        {viewer?.displayName ? 'Viewer' : 'Anonymous'}
        <A
          ml={1}
          as={Link}
          to="/"
        >
          Home
        </A>
        <A
          ml={1}
          as={Link}
          to="/knowledge"
        >
          Knowledge
        </A>
      </Flex>
      {children}
    </Flex>
  )
}

export default Layout
