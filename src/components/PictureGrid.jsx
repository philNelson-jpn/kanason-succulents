import styled from 'styled-components'

const pictures = [
	{
		id: crypto.randomUUID(),
		src: 'src/assets/images/bucket_succ.jpg',
		alt: 'succulents in a metal bucket',
		caption: 'Bustling Bucket',
		price: '1000',
	},
	{
		id: crypto.randomUUID(),
		src: 'src/assets/images/close_up_succ.jpg',
		alt: 'close up of succulents in a pot',
		caption: 'Fairy Forest',
		price: '800',
	},
	{
		id: crypto.randomUUID(),
		src: 'src/assets/images/bucket-tall-succ.jpg',
		alt: 'close up of succulents in a pot on some steps',
		caption: 'Feast for the Eyes',
		price: '900',
	},
	{
		id: crypto.randomUUID(),
		src: 'src/assets/images/steps_succ_jpg.jpg',
		alt: 'succulents in a bucket on some steps',
		caption: 'By the Stairs',
		price: '1000',
	},
	{
		id: crypto.randomUUID(),
		src: 'src/assets/images/chest_succ.JPG',
		alt: 'succulents in a treasure chest',
		caption: 'Garden Treasure',
		price: '1200',
	},
	{
		id: crypto.randomUUID(),
		src: 'src/assets/images/pair_kappa_succ.jpg',
		alt: 'two kappa pots with succulents',
		caption: 'Kappa Kouple',
		price: '800',
	},
	{
		id: crypto.randomUUID(),
		src: 'src/assets/images/spout_succ.jpg',
		alt: 'succulents in a water spout',
		caption: 'Spring has Sprung',
		price: '1200',
	},
	{
		id: crypto.randomUUID(),
		src: 'src/assets/images/group-succ.jpg',
		alt: 'succulents in a water spout',
		caption: 'Better Together',
		price: '3200',
	},
]

export default function PictureGrid() {
	return (
		<Wrapper>
			{pictures.map(({ id, src, alt, caption, price, height }) => (
				<PhotoWrapper key={id}>
					<Photo alt={alt} src={src} height={height} />
					<CaptionWrapper>
						<figcaption>{caption}</figcaption>
						<p>¥{price}&nbsp;円</p>
					</CaptionWrapper>
				</PhotoWrapper>
			))}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	isolation: isolate;
	--spacing: 36px;
	--min-column-width: min(400px, 100%);
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(var(--min-column-width), 1fr)
	);
	place-content: center;
	gap: var(--spacing);
	margin: var(--spacing);
	margin-top: calc(var(--spacing) * 2);
`

const PhotoWrapper = styled.figure`
	isolation: isolate;
	overflow: hidden;
	display: grid;
	place-content: center;
	height: fit-content;
	background-color: white;
	box-shadow: inset 0px 2px 12px hsl(0, 0%, 80%);
	padding: 20px;
	border-radius: 8px;
`

const CaptionWrapper = styled.div`
	z-index: 1;
	display: flex;
	font-size: calc(18 / 16 * 1rem);
	justify-content: space-between;
	align-items: center;
	padding: 16px;
	background-color: white;
	box-shadow: 2px 2px 12px hsl(0, 0%, 80%);
	border-radius: 0 0 4px 4px;
`

const Photo = styled.img`
	display: block;
	object-fit: cover;
	border-radius: 4px 4px 0 0;
	transition: transform 200ms ease-in-out;
	transform: scale(1);
	transform-origin: center;

	${PhotoWrapper}:hover & {
		transform: scale(1.5);
	}
`
