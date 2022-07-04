import { Flex } from 'honorable'
import { useContext } from 'react'

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
        align="center"
        flexShrink={0}
      >
        <pre>
          {JSON.stringify(viewer, null, 2)}
        </pre>
      </Flex>
      <Flex flexGrow={1}>
        {children}
      </Flex>
    </Flex>
  )
}

export default Layout
