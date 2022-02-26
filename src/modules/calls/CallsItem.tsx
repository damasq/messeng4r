import styled from 'styled-components';
import logo from '../../common/img/trash/trash01.jpg'
import inc from './img/inc.svg'
import { ReactComponent as PhoneCallIcon } from "./img/phone-call-icon.svg"

export const CallsItem = () => {
  return (
    <Container>
      <AvatarWrapper>
        <Avatar src={logo} />
      </AvatarWrapper>
      <Username>Lorem, ipsum.</Username>
      <LastCallInfo>
        July 08, 06.30 PM
      </LastCallInfo>
      <LastCallType>
        <PhoneCallIcon />
      </LastCallType>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr 40px;
  grid-template-rows: 18px 30px;
  grid-template-areas:
    'avatar username calltype'
    'avatar callinfo calltype';
  padding: 8px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`

const AvatarWrapper = styled.div`
  grid-area: avatar;
  position: relative;

  &:before {
    content: "";
    background-color: #F2C94C;
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 2px solid #FFFFFF;
  }
`

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`

const Username = styled.div`
  grid-area: username;
  font-size: 14px;
  line-height: 18px;
  font-weight: 800;
  align-self: center;
  margin-left: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #1B1A57;
`

const LastCallInfo = styled.p`
  grid-area: callinfo;
  width: 85%;
  font-size: 12px;
  line-height: 18px;
  align-self: center;
  margin-left: 16px;
  padding-left: 24px;
  color: #4F5E7B;
  position: relative;

  &:before {
    content: "";
    display: block;
    background: red top;
    background: url(${inc}) no-repeat;
    position: absolute;
    width: 16px;
    height: 16px;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
`

const LastCallType = styled.div`
  grid-area: calltype;
  text-align: center;
  line-height: 0;
  padding: 12px 0;
`