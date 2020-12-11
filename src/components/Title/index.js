import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Flex } from 'rebass'
import Link from '../Link'
import { RowFixed } from '../Row'
import Logo from '../../assets/kwik_inline.png'
import Wordmark from '../../assets/kiwikLogo.png'

const TitleWrapper = styled.div`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  z-index: 10;
`

const KwikIcon = styled(Link)`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
`

export default function Title() {
  const history = useHistory()

  return (
    <TitleWrapper onClick={() => history.push('/')}>
      <Flex alignItems="center">
        <RowFixed>
          <KwikIcon id="link" onClick={() => history.push('/')}>
            <img style={{filter: "invert(1)"}} width={'44px'} src={Logo} alt="logo"  />
          </KwikIcon>
          <img width={'84px'} style={{ marginLeft: '8px', marginTop: '0px',ilter: "invert(1)"  }} src={Wordmark} alt="logo" />
        </RowFixed>
      </Flex>
    </TitleWrapper>
  )
}
