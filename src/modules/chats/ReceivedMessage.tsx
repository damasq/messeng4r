import styled from 'styled-components';
import logo from '../../common/img/trash/trash01.jpg'

export const ReceivedMessage = () => {
  return (
    <MessageContainer>

      <AvatarWrapper>
        <Avatar src={logo} />
      </AvatarWrapper>

      <MessageTextWrapper>
        <SenderInfo>
          <Username>Mike Mazowski </Username><IsAdmin>admin</IsAdmin>
        </SenderInfo>
        <MessageText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, rem.
        </MessageText>
        <MessageDate>16.04</MessageDate>
      </MessageTextWrapper>

    </MessageContainer>
  )
}

const MessageContainer = styled.div`
  display: flex;
  width: 76%;
  align-items: end;
  margin-right: auto;
  margin-bottom: 8px;
`

const MessageTextWrapper = styled.div`
  flex: 1 1 auto;
  border-radius: 8px 8px 0 8px;
  background: #F7F7F7;
  padding: 8px 10px;
`

const SenderInfo = styled.div`
  display: flex;
  justify-content: space-between;
`

const Username = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: #F2994A;
  margin-bottom: 10px;
`

const IsAdmin = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: #A1A1BC;
`

const MessageText = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: #1B1A57;
`

const MessageDate = styled.p`
  text-align: right;
  font-size: 12px;
  line-height: 16px;
  color: #A1A1BC;
`

const AvatarWrapper = styled.div`
  flex: 0 0 40px;
  margin-left: 8px;
  position: relative;
  width: 40px;
  height: 40px;

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