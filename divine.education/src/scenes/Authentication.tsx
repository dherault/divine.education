import { Button, Div, Flex, P } from 'honorable'
import { signInWithRedirect } from 'firebase/auth'

import { authentication, googleProvider } from '../firebase'
import GoogleIcon from '../icons/GoogleIcon'

function Authentication() {

  function handleGoogleClick() {
    signInWithRedirect(authentication, googleProvider)
  }

  return (
    <Flex
      direction="column"
      flexGrow={1}
      align="center"
      justify="center"
    >
      <Flex direction="column">
        <P
          fontSize={32}
          fontWeight="bold"
        >
          Welcome, student.
        </P>
        <Button
          startIcon={(
            <GoogleIcon width={24} />
          )}
          secondary
          mt={2}
          onClick={handleGoogleClick}
        >
          Sign in with Google
        </Button>
        <P
          mt={1}
          textAlign="center"
        >
          - Or -
        </P>
      </Flex>
    </Flex>
  )
}

export default Authentication
