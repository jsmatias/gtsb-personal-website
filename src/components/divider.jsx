import React from 'react'
import styled from 'styled-components'
import { colors } from '../layout/layout-config'

const Div = styled.div`
    border-bottom: 0.1rem solid ${colors.black};
`

const Divider = () => (
    <React.Fragment>
        <Div/>
    </React.Fragment>
)

export default Divider