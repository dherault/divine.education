import { Button, Div, Flex } from 'honorable'
import { MouseEvent as ReactMouseEvent, WheelEvent, useCallback, useEffect, useState } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'

const circles: Array<{ x: number, y: number }> = []

for (let i = 0; i < 100; i++) {
  circles.push({
    x: Math.random() * 100,
    y: Math.random() * 100,
  })
}

function Knowledge() {
  return (
    <Flex
      flexGrow={1}
      overflow="hidden"
    >
      <TransformWrapper
        centerOnInit
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }: any) => (
          <TransformComponent
            wrapperStyle={{ flexGrow: 1, display: 'flex' }}
            contentStyle={{ width: 1920, height: 1080 }}
          >
            <Div
              position="absolute"
              top={0}
              left={0}
              backgroundColor="green"
              width={64}
              height={64}
            />
            <Div
              position="absolute"
              top="calc(100% - 64px)"
              left="calc(100% - 64px)"
              backgroundColor="green"
              width={64}
              height={64}
            />
            {circles.map(({ x, y }, i) => (
              <Div
                position="absolute"
                left={`${x}%`}
                top={`${y}%`}
                width={64}
                height={64}
                borderRadius="50%"
                backgroundColor="red"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {i}
              </Div>
            ))}
          </TransformComponent>
        )}
      </TransformWrapper>
    </Flex>
  )
}

export default Knowledge
