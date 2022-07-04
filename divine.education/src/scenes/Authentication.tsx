import { useEffect } from 'react'
import { Div } from 'honorable'
import { UserCredential } from 'firebase/auth'

import { ui, uiConfig } from '../firebase'

function Authentication() {

  useEffect(() => {
    ui.start('#firebase-authentication', {
      ...uiConfig,
      callbacks: {
        signInSuccessWithAuthResult(authResult: UserCredential) {
          console.log('authResult', authResult)

          return false
        },
      },
    })
  }, [])

  return (
    <>
      Authentication
      <Div id="firebase-authentication" />
    </>
  )
}

export default Authentication
