import { A, Div, H1, H2, P } from 'honorable'

function UniversalLaws() {
  return (
    <Div
      container
      mt={6}
    >
      <H1>Universal Laws</H1>
      <P mt={2}>
        Also known as the Hermetic Laws, because they come from Hermes, a heavenly being that worked closely on Humanity during the antiquity and even before that.
      </P>
      <P mt={2}>
        These laws applies thourough the Creation. <strong>When in doubt, always refer to them.</strong>
      </P>
      <Principle
        title="The principle of mentalism"
        lead="The All is Mind, the Universe is Mental."
      >
        This principle divulgues the true nature of All: the Mind. Therefore ending any materialistic philosophical points of view.
      </Principle>
      <P mt={4}>
        Source:{' '}
        <A href="https://en.wikipedia.org/wiki/The_Kybalion">Wikipedia</A>
      </P>
    </Div>
  )
}

function Principle({ title, lead, children }: any) {
  return (
    <Div mt={2}>
      <H2>{title}</H2>
      <P
        cursive
        fontSize={24}
        mt={1}
      >
        {lead}
      </P>
    </Div>
  )
}

export default UniversalLaws
