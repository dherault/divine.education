import { Link } from 'react-router-dom'
import { Button, Div, Flex, P, Svg } from 'honorable'
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
          <Svg
            viewBox="0 0 100 100"
            position="absolute"
            top={-512 - 128}
            left="calc(50% - 1024px * 1.666 / 2)"
            width={1024 * 1.666}
          >
            <path
              id="curve1"
              fill="transparent"
              d="
                M 90 50
                m -80 0
                a 100 100 0 0 1 80 0
              "
            />
            <text
              width="100"
              fontSize="1.75rem"
              fontFamily="'Tangerine', cursive"
            >
              <textPath xlinkHref="#curve1">
                Knowledge
              </textPath>
            </text>
          </Svg>
          <Svg
            viewBox="0 0 100 100"
            position="absolute"
            top={1024 - 256}
            left="calc(50% - 512px * 1.666 / 2 - 1024px)"
            width={512 * 1.666}
            transform="rotate(33deg)"
          >
            <path
              id="curve2"
              fill="transparent"
              d="
                M 90 50
                m -80 0
                a 100 100 1 0 0 80 0
              "
            />
            <text
              width="100"
              fontSize="2.22rem"
              letterSpacing={1}
              fontFamily="'Tangerine', cursive"
            >
              <textPath xlinkHref="#curve2">
                &nbsp;Beliefs
              </textPath>
            </text>
          </Svg>
          <Svg
            viewBox="0 0 100 100"
            position="absolute"
            top={1024}
            left="calc(50% - 512px * 1.666 / 2)"
            width={512 * 1.666}
          >
            <path
              id="curve3"
              fill="transparent"
              d="
                M 90 50
                m -80 0
                a 100 100 1 0 0 80 0
              "
            />
            <text
              width="100"
              fontSize="2.22rem"
              letterSpacing={1}
              fontFamily="'Tangerine', cursive"
            >
              <textPath xlinkHref="#curve3">
                &nbsp;Science
              </textPath>
            </text>
          </Svg>
          <Svg
            viewBox="0 0 100 100"
            position="absolute"
            top={1024 - 256}
            left="calc(50% - 512px * 1.666 / 2 + 1024px)"
            width={512 * 1.666}
            transform="rotate(-33deg)"
          >
            <path
              id="curve4"
              fill="transparent"
              d="
                M 90 50
                m -80 0
                a 100 100 1 0 0 80 0
              "
            />
            <text
              width="100"
              fontSize="2.22rem"
              letterSpacing={1}
              fontFamily="'Tangerine', cursive"
            >
              <textPath xlinkHref="#curve4">
                &nbsp;Beings
              </textPath>
            </text>
          </Svg>
          {articles.map(({ x, y, name, imageUrl, path }) => (
            <KnowledgeCard
              key={name}
              name={name}
              imageUrl={imageUrl}
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
