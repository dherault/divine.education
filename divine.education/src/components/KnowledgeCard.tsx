import { Card, Img, P } from 'honorable'

function KnowledgeCard({ name, imageUrl, ...props }: any) {
  return (
    <Card
      borderRadius={4}
      textDecoration="none"
      color="text"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      width={256}
      {...props}
    >
      <Img
        src={imageUrl}
        width="100%"
      />
      <P
        p={1}
        bold
        scribe2
        center
      >
        {name}
      </P>
    </Card>
  )
}

export default KnowledgeCard
