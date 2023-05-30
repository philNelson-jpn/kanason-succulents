import './App.css'
import styled from 'styled-components'
import Nav from './components/Nav'
import PictureGrid from './components/PictureGrid'

function App() {
	return (
		<>
			<Wrapper>
				<Nav />
				<PictureGrid />
			</Wrapper>
		</>
	)
}

const Wrapper = styled.div`
	position: absolute;
	top: 0;
`

export default App
