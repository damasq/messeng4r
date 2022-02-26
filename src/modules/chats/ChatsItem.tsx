import styled from 'styled-components';
import logo from '../../common/img/trash/trash01.jpg'

export const ChatItem = () => {
  return (
    <Container>
      <AvatarWrapper>
        <Avatar src={logo} />
      </AvatarWrapper>
      <Username>Lorem, ipsum.</Username>
      <LastMessageDate>04:20</LastMessageDate>
      <LastMessage>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, consectetur.</LastMessage>
      <Counter>5</Counter>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr 60px;
  grid-template-rows: 18px 30px;
  grid-template-areas:
    'avatar username date'
    'avatar message counter';
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

const LastMessage = styled.div`
  grid-area: message;
  width: 85%;
  font-size: 12px;
  line-height: 18px;
  align-self: center;
  margin-left: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #4F5E7B;
`

const LastMessageDate = styled.div`
  grid-area: date;
  font-size: 12px;
  line-height: 16px;
  align-self: center;
  margin-left: auto;
  color: #333333;
`

const Counter = styled.div`
  grid-area: counter;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  text-align: center;
  font-size: 12px;
  line-height: 24px;
  justify-content: end;
  align-self: center;
  margin-left: auto;
  color: #FFFFFF;
  background: #2F80ED;
`