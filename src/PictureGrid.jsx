import styled from 'styled-components'

const pictures = [
	{
		id: crypto.randomUUID(),
		src: 'src/assets/images/bucket_succ.jpg',
		alt: 'succulents in a metal bucket',
		caption: '',
	},
	{
		id: crypto.randomUUID(),
		src: 'src/assets/images/chest_succ.JPG',
		alt: 'succulents in a treasure chest',
		caption: '',
	},
	{
		id: crypto.randomUUID(),
		src: 'src/assets/images/close_up_succ.jpg',
		alt: 'close up of succulents in a pot',
		caption: '',
	},
	{
		id: crypto.randomUUID(),
		src: 'src/assets/images/pair_kappa_succ.jpg',
		alt: 'two kappa pots with succulents',
		caption: '',
	},
	{
		id: crypto.randomUUID(),
		src: 'src/assets/images/spout_succ.jpg',
		alt: 'succulents in a water spout',
		caption: '',
	},
    {
		id: crypto.randomUUID(),
		src: 'src/assets/images/steps_succ_jpg.jpg',
		alt: 'succulents in a water spout',
		caption: '',
	},
]

export default function PictureGrid() {
	return (
		<Wrapper>
			{pictures.map(({ id, src, alt }) => (
				<Photo key={id} alt={alt} src={src} />
			))}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	--min-column-width: min(320px, 100%);
	margin-top: 280px;
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(var(--min-column-width), 1fr)
	);
	place-content: center;
	gap: 36px;
`

const Photo = styled.img``
