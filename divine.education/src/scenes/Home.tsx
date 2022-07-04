import { Link } from 'react-router-dom'
import { Button } from 'honorable'

function Home() {
  return (
    <>
      Home
      <Button
        as={Link}
        to="/authentication"
      >
        Authentication
      </Button>
    </>
  )
}

export default Home
