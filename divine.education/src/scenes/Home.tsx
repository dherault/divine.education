import { Link } from 'react-router-dom'
import { Button, Div } from 'honorable'

function Home() {
  return (
    <Div mt={3}>
      Home
      <Button
        as={Link}
        to="/authentication"
      >
        Authentication
      </Button>
    </Div>
  )
}

export default Home
