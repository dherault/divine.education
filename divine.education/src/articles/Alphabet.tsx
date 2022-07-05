import { Div, Flex, H1, P } from 'honorable'

function Alphabet() {
  return (
    <Div
      container
      mt={6}
    >
      <H1>Symbolic Alphabet</H1>
      <P mt={2}>
        Dear student,
      </P>
      <P mt={1}>
        It is with great pleasure that I present you with the symbolic alphabet.
        When the gods gave us letters to write, their intention was to make us invoque them by spelling the words in our thoughts.
        Each letter represents a different invocation, a divine nature. When we prononce them, it comes from and goes to the god to whom the letter belongs.
      </P>
      <P mt={1}>
        Such divine natures incarnate as gods that can be classified as <strong>Invocators</strong>.
      </P>
      <Letter glyph="A">
        A is the First. He is the Alpha (as opposed to the Omega), and a Child.
        As an invocator, A is a jnani, He is the penetrator, the front line, often paired with M, the penetrated and mother. He lives over the realm.
        The shape of the letter has to do with Karmic transactions.
      </Letter>
      <Letter glyph="B">
        B is the union of 1 and 2, so both hollistic and divided, the reunification of the dual nature of everything. As an invocator, B is Bhrama, the Father.
        The shape of the letter comes from a divided circle that has been opened.
      </Letter>
      <Letter glyph="C">
        C is half of 2, so a divided being without its other half. As an invocator, C is ???. The shape of the letter comes from a half circle.
      </Letter>
    </Div>
  )
}

function Letter({ glyph, children }: any) {
  return (
    <Flex
      mt={2}
      direction="column"
    >
      <P fontSize={72}>
        {glyph}
      </P>
      <Div mt={1}>
        {children}
      </Div>
    </Flex>
  )
}

export default Alphabet
