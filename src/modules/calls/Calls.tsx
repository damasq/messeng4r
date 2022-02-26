import styled from 'styled-components'
import { CallsItem } from "./CallsItem"
import { ReactComponent as LoupeIcon } from "../../common/img/loupe-icon.svg"
import addCallIcon from "./img/add-new-call-icon.svg"

export const Calls = () => {
  return (
    <Container>

      <Header>
        <Title>Calls</Title>
        <LoupeIcon />
      </Header>

      <CallsList>
        <CallsItem />
      </CallsList>

      <AddCall>
        <AddCallButton src={addCallIcon} />
      </AddCall>

    </Container>
  )
}

const Container = styled.div`
  padding: 0 8px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
  padding: 0 8px;
`

const Title = styled.h2`
  font-size: 18px;
  align-self: center;
`

const CallsList = styled.div`
  
`

const AddCall = styled.div`
  position: fixed;
  right: 6%;
  bottom: 10%;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #2F80ED;
  /* padding: 28px; */
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.15);
`

const AddCallButton = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`