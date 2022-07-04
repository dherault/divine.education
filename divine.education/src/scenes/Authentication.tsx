import { Button } from 'honorable'
import { signInWithRedirect } from 'firebase/auth'

import { authentication, googleProvider } from '../firebase'

function Authentication() {

  function handleGoogleClick() {
    signInWithRedirect(authentication, googleProvider)
  }

  return (
    <>
      Authentication
      <Button onClick={handleGoogleClick}>
        Sign in with Google
      </Button>
    </>
  )
}

export default Authentication
