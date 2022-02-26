import styled from 'styled-components';
import logo from '../../common/img/trash/trash01.jpg'

export const SentMessage = () => {
  return (
    <MessageContainer>

      <MessageTextWrapper>
        <MessageText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, rem.
        </MessageText>
        <MessageDate>16.04</MessageDate>
      </MessageTextWrapper>

      <AvatarWrapper>
        <Avatar src={logo} />
      </AvatarWrapper>

    </MessageContainer>
  )
}

const MessageContainer = styled.div`
  display: flex;
  width: 76%;
  align-items: end;
  margin-left: auto;
  margin-bottom: 8px;
`

const MessageTextWrapper = styled.div`
  flex: 1 1 auto;
  border-radius: 8px 8px 0 8px;
  background: #2F80ED;
  color: #FFFFFF;
  padding: 8px 10px;
`

const MessageText = styled.p`
  font-size: 12px;
  line-height: 18px;
`

const MessageDate = styled.p`
  text-align: right;
  font-size: 12px;
  line-height: 16px;
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