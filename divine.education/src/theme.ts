import { mergeTheme } from 'honorable'
import defaultTheme from 'honorable-theme-default'
import mpRecipe from 'honorable-recipe-mp'

export default mergeTheme(defaultTheme, {
  name: 'Divine Education',
  stylesheet: {
    body: [
      {
        overflow: 'hidden',
      },
    ],
  },
  global: [
    ({ container }: any) => container && {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '50%',
    },
    mpRecipe(),
  ],
})
