import { Card } from 'honorable'

function KnowledgeCard({ name, ...props }: any) {
  return (
    <Card
      p={1}
      borderRadius={4}
      textDecoration="none"
      color="text"
      {...props}
    >
      {name}
    </Card>
  )
}

export default KnowledgeCard
