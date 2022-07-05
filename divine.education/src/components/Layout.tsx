import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { A, Div, Flex, P } from 'honorable'

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
        position="absolute"
        top={0}
        left={0}
        right={0}
        zIndex={9999}
      >
        <P
          fontSize={24}
          fontWeight="bold"
          as={Link}
          to="/"
          color="text"
          textDecoration="none"
          _hover={{ textDecoration: 'underline' }}
        >
          Divine Education
        </P>
        <A
          ml={2}
          as={Link}
          to="/knowledge"
        >
          Knowledge
        </A>
        <Div flexGrow={1} />
        {viewer?.displayName ? 'Viewer' : 'Anonymous'}
      </Flex>
      {children}
    </Flex>
  )
}

export default Layout
