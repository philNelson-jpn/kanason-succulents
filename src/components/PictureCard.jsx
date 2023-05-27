import React from 'react'
import styled from 'styled-components'

export default function PictureCard(src, alt, caption) {
	return (
		<Wrapper>
			<Figure>
				<Picture src={src} alt={alt} />
				<Caption>{caption}</Caption>
			</Figure>
		</Wrapper>
	)
}

const Wrapper = styled.div`
    
`

const Figure = styled.figure``

const Caption = styled.figcaption``

const Picture = styled.img``
