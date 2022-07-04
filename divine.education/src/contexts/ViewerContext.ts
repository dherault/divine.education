import { createContext } from 'react'
import { User } from 'firebase/auth'

export default createContext<User | null>(null)
