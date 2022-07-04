import { useEffect } from 'react'
import { Button, Div } from 'honorable'

import { ui, uiConfig } from '../firebase'

function Authentication() {

  useEffect(() => {
    ui.start('#firebase-authentication', uiConfig)
  }, [])

  return (
    <>
      Authentication
      <Div id="firebase-authentication" />
    </>
  )
}

export default Authentication
