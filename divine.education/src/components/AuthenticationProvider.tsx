import { useEffect, useState } from 'react'
import { User } from 'firebase/auth'

import ViewerContext from '../contexts/ViewerContext'
import { onViewerChange } from '../firebase'

function AuthenticationProvider({ children }: any) {
  const [viewer, setViewer] = useState<User | null>(null)

  useEffect(() => {
    onViewerChange.then(viewer => setViewer(viewer as User))
  }, [])

  return (
    <ViewerContext.Provider value={viewer}>
      {children}
    </ViewerContext.Provider>
  )
}

export default AuthenticationProvider
