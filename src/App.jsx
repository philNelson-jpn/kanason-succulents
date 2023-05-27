import './App.css'
import styled from 'styled-components'
import Nav from './components/Nav'
import PictureGrid from './PictureGrid'
import PictureCard from './components/PictureCard'

function App() {
	return (
		<>
			<Wrapper>
				<Nav/>
				<PictureGrid/>
				<PictureCard/>
			</Wrapper>
		</>
	)
}

const Wrapper = styled.div`
	position: absolute;
	inset: 0;
	height: 200vh;
	background-color: hsla(
		155.67567567567568,
		86.04651162790702%,
		96.5686274509804%,
		0.85
	);
`

export default App
