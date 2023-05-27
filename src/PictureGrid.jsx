import styled from 'styled-components'
import PictureCard from './components/PictureCard'

const pictures = [
	{
		id: crypto.randomUUID(),
		src: 'src/assets/images/KanasonSucculentsLogoPng.png',
		alt: 'kanason-logo',
		caption: 'good job',
	},
	{
		id: crypto.randomUUID(),
		src: 'src/assets/images/KanasonSucculentsLogoPng.png',
		alt: 'kanason-logo',
		caption: 'bad job',
	},
	{
		id: crypto.randomUUID(),
		src: 'src/assets/images/KanasonSucculentsLogoPng.png',
		alt: 'kanason-logo',
		caption: 'terrible job',
	},
]

export default function PictureGrid() {
	return (
		<Wrapper>
            <Photo src='src/assets/images/KanasonSucculentsLogoPng.png'/>
            <Photo src='src/assets/images/KanasonSucculentsLogoPng.png'/>
            <Photo src='src/assets/images/KanasonSucculentsLogoPng.png'/>
            <Photo src='src/assets/images/KanasonSucculentsLogoPng.png'/>
            <Photo src='src/assets/images/KanasonSucculentsLogoPng.png'/>
            <Photo src='src/assets/images/KanasonSucculentsLogoPng.png'/>
			{/* {pictures.map(({ id, src, alt, caption }) => (
				<PictureCard key={id} src={src} alt={alt} caption={caption} />
			))} */}
		</Wrapper>
	)
}

const Wrapper = styled.div`
    --min-column-width: min(320px, 100%);
    margin-top: 280px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--min-column-width), 1fr));
    place-content: center;
    gap: 36px;
`

const Photo = styled.img`

`;
