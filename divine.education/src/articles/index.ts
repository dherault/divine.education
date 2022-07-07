import aboutTheMasterImageUrl from '../images/master.png'
import universalLawsImageUrl from '../images/emerald-tablet.png'
import symbolicAlphabetImageUrl from '../images/alphabet.png'

import AboutTheMaster from './AboutTheMaster'
import UniversalLaws from './UniversalLaws'
import Alphabet from './Alphabet'

export default [
  {
    Component: AboutTheMaster,
    imageUrl: aboutTheMasterImageUrl,
    name: 'About the Master',
    path: 'about-the-master',
    x: 'calc(50% - 256px / 2 - 512px)',
    y: 330,
  },
  {
    Component: UniversalLaws,
    imageUrl: universalLawsImageUrl,
    name: 'Universal Laws',
    path: 'universal-laws',
    x: 'calc(50% - 256px / 2)',
    y: 330,
  },
  {
    Component: Alphabet,
    imageUrl: symbolicAlphabetImageUrl,
    name: 'Symbolic Alphabet',
    path: 'symbolic-alphabet',
    x: 'calc(50% - 256px / 2 + 512px)',
    y: 330,
  },
]
