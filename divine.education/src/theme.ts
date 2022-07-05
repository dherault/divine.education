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
    ({ cursive }: any) => cursive && {
      fontFamily: "'Tangerine', cursive",
    },
    mpRecipe(),
  ],
  Button: {
    Root: [
      {
        transition: 'background-color 150ms ease',
      },
      ({ secondary }: any) => secondary && {
        backgroundColor: 'transparent',
        border: '1px solid primary',
        color: 'primary',
        ':hover': {
          backgroundColor: 'transparency(primary, 90)',
        },
        ':active': {
          backgroundColor: 'transparency(primary, 80)',
        },
      },
    ],
  },
})
