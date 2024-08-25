import './App.css'
import Container from './components/Container/Container'
import Typography from './components/Typography/Typography'

function App() {

  return (
    <>
      <Container>
        <Typography type={'rtf'} size={'h2'} weight={'semibold'}>
          Ut Enim Ad Minim Veniam
        </Typography>
        <Typography type={'rtf'} size={'h3'} weight={'semibold'}>
          Quis Nostrud Exercitation Ullamco Laboris.
        </Typography>
        <Typography type={'rtf'} size={'p'} weight={'regular'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor <a>incididunt ut labore et dolore magna aliqua</a>.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
        <Typography type={'rtf'} size={'p'} weight={'regular'}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>

        <Typography type={'rtf'} size={'h3'} weight={'semibold'}>
          Felis Massa Luctus Purus
        </Typography>
        <Typography type={'rtf'} size={'h4'} weight={'semibold'}>
          Geneva Vel Ticindunt Vulputate
        </Typography>
        <Typography type={'rtf'} size={'p'} weight={'regular'}>
          Imperdiet, quam aliquam, sit amet mattis.
        </Typography>
        <Typography type={'rtf'} size={'p'} weight={'regular'}>
          <ul>
            <li>Elementum: Alilquam sit amet lectus</li>
            <li>Vestibulum: Accumsan velit</li>
            <li>Fringilla: Sed ultricies dolor</li>
          </ul>
          <ol>
            <li>Cursus: Fusce ve agna</li>
            <li>Pretium: Morbi auctor turpis</li>
            <li>Suscipit: Donec euismod librero</li>
          </ol>
        </Typography>

        <Typography type={'rtf'} size={'h4'} weight={'semibold'}>
          Audemar Vel Tincidunt Vulputate
        </Typography>
        <Typography type={'rtf'} size={'h5'} weight={'semibold'}>
          Rolaq Vel Tincidunt Vulputate
        </Typography>
        <Typography type={'rtf'} size={'p'} weight={'regular'}>
          Imperdiet, quam aliquam, sit amet mattis.
          Duis velit, euismod in, tristique et, tempus sit amet, sem.
          Sit amet, sem. Sit amet, sem. Sit amet, sem.
        </Typography>
        <Typography type={'rtf'} size={'h5'} weight={'semibold'}>
          Starq Vel Tincidunt Vulputate
        </Typography>
        <Typography type={'rtf'} size={'p'} weight={'regular'} italic>
          Imperdiet, quam aliquam, sit amet mattis.
          Duis velit, euismod in, tristique et, tempus sit amet, sem.
          Sit amet, sem. Sit amet, sem. Sit amet, sem.
        </Typography>
        <Typography type={'rtf'} size={'h6'} weight={'semibold'}>
          Kaiselius el Tincidunt Vulputate
        </Typography>
        <Typography type={'rtf'} size={'p'} weight={'regular'}>
          Imperdiet, quam aliquam, sit amet mattis.
          Duis velit, euismod in, tristique et, tempus sit amet, sem.
          Sit amet, sem. Sit amet, sem. Sit amet, sem.
        </Typography>
      </Container>
    </>
  )
}

export default App
