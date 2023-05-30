import styled from 'styled-components'

export default function Nav() {
	return (
		<Wrapper>
			<NavWrapper>
				<Spacer>
					<Logo
						src='src/assets/images/KanasonSucculentsLogoPng.png'
						alt='kanason succulent logo'
					/>
				</Spacer>
				<nav>
					<LinkWrapper>
						<LinkItem>
							<Link href='#'>Home</Link>
						</LinkItem>
						<LinkItem>
							<Link href='#'>Succulents</Link>
						</LinkItem>
						<LinkItem>
							<Link href='#'>Dry&nbsp;Flowers</Link>
						</LinkItem>
					</LinkWrapper>
				</nav>
				<Spacer />
			</NavWrapper>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	position: sticky;
	top: -24px;
	width: 100%;
	z-index: 1;
`

const NavWrapper = styled.header`
	position: relative;
	top: 24px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 100px;
	width: 100%;
	background-color: hsl(147, 60%, 99%);
	filter: drop-shadow(0px 2px 12px hsl(0, 0%, 50%));
`

const Spacer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	margin-inline: 24px;

	@media (max-width: 800px) {
		display: none;
	}
`

const Logo = styled.img`
	z-index: 2;
	flex-shrink: 0;
	max-width: 124px;
	transition: scale 200ms ease-in-out;

	${Spacer}:hover & {
		scale: 1.1;
	}
`

const LinkWrapper = styled.ul`
	display: flex;
	gap: 42px;
	padding: 0;
`

const LinkItem = styled.li`
	list-style-type: none;
`

const Link = styled.a`
	text-decoration: none;
	font-size: calc(24 / 16 * 1rem);
	color: black;
`
