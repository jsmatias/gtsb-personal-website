import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../layout/layout-config'

const Title = styled.h2`
    color: ${colors.gray};
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem 0;
    padding-top: 3px;
    padding-left: 1rem;
    text-transform: uppercase;
    border-left: 1rem solid ${colors.gray};
`
const Subtitle = styled.h3`
    color: ${colors.gray};
    font-size: 1.5rem;
    margin: 1rem 0;
    padding-top: 3px;
    text-transform: uppercase;
`
const P = styled.p`
    font-family: serif;
    text-align: justify;
    font-size: 1.1rem;
    line-height: 1.5em;
`

const TextBlock = ({title, subtitle, textString}) => (
    <React.Fragment>
        {title ? <Title>{title}</Title> : null}
        {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
        <P>{textString}</P> 
    </React.Fragment>
)

TextBlock.defaultProps = {
    title: '',
}
TextBlock.propTypes = {
    title: PropTypes.string,
    textString: PropTypes.string,
}

export default TextBlock