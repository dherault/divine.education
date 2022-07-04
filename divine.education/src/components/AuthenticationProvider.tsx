import { useEffect, useState } from 'react'
import { User, getRedirectResult } from 'firebase/auth'

import ViewerContext from '../contexts/ViewerContext'
import { authentication, onViewerChange } from '../firebase'

function AuthenticationProvider({ children }: any) {
  const [viewer, setViewer] = useState<User | null>(null)

  useEffect(() => {
    onViewerChange.then(viewer => setViewer(viewer as User))
  }, [])

  useEffect(() => {
    getRedirectResult(authentication)
  }, [])

  return (
    <ViewerContext.Provider value={viewer}>
      {children}
    </ViewerContext.Provider>
  )
}

export default AuthenticationProvider
