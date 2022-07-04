import { Link } from 'react-router-dom'
import { Button, Div, Flex } from 'honorable'
// @ts-expect-error
import { PanZoom } from 'react-easy-panzoom'

import KnowledgeCard from '../components/KnowledgeCard'

import articles from '../articles'

const cards = [
  {
    x: 300,
    y: 300,
    name: 'About the master',
  },
]

function Knowledge() {
  return (
    <Flex
      flexGrow={1}
      overflow="hidden"
      position="relative"
      backgroundColor="background-light"
    >
      <PanZoom
        enableBoundingBox
        realPinch
        style={{ width: '100vw', height: '100vh' }}
        minZoom={0.1666}
        maxZoom={1}
        boundaryRatioVertical={0}
        boundaryRatioHorizontal={0}
      >
        <Div
          width="100vw"
          height="100vh"
          position="relative"
        >
          {articles.map(({ x, y, name, path }) => (
            <KnowledgeCard
              key={name}
              name={name}
              position="absolute"
              top={y}
              left={x}
              as={Link}
              to={`/~/${path}`}
            />
          ))}
        </Div>
      </PanZoom>
    </Flex>
  )
}

export default Knowledge
