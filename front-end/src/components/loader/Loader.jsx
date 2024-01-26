import { LoaderContainer, NewtonsCradleContainer, NewtonsCradleDot } from './styles'

const Loader = () => {
  return (
    <LoaderContainer>
      <NewtonsCradleContainer>
        <NewtonsCradleDot />
        <NewtonsCradleDot />
        <NewtonsCradleDot />
        <NewtonsCradleDot />
      </NewtonsCradleContainer>
    </LoaderContainer>
  )
}

export default Loader
