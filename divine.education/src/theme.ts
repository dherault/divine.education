import { mergeTheme } from 'honorable'
import defaultTheme from 'honorable-theme-default'

export default mergeTheme(defaultTheme, {
  name: 'Divine Education',
  stylesheet: {
    body: [
      {
        overflow: 'hidden',
      },
    ],
  },
})
