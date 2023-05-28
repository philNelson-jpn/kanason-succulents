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
`

const NavWrapper = styled.header`
	position: absolute;
	top: 24px;
	display: flex;
	align-items: center;
	height: 100px;
	width: 100%;
	background-color: hsl(147, 60%, 99%);
	padding: 24px 12px;
	filter: drop-shadow(0px 2px 12px hsl(0, 0%, 50%));
`

const Spacer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	margin-inline: 24px;
`

const Logo = styled.img`
	flex-shrink: 0;
	max-width: 124px;
`

const LinkWrapper = styled.ul`
	display: flex;
	gap: 42px;
`

const LinkItem = styled.li`
	list-style-type: none;
`

const Link = styled.a`
	text-decoration: none;
	font-size: calc(24 / 16 * 1rem);
	color: black;
`
