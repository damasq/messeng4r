import styled from 'styled-components'
import { ReactComponent as ArrowIcon } from './img/dialog/header-2.svg'
import { ReactComponent as VideoCallIcon } from './img/dialog/header-1.svg'
import { ReactComponent as EmojiIcon } from './img/dialog/footer-0.svg'
import { ReactComponent as AttachFileIcon } from './img/dialog/footer-1.svg'
import voiceMessageIcon from './img/dialog/footer-2.svg'
import logo from '../../common/img/trash/trash01.jpg'
import { SentMessage } from './SentMessage'
import { ReceivedMessage } from './ReceivedMessage'

export const Dialog = () => {
  return (
    <Container>

      <Header>
        <BackArrow>
          <ArrowIcon />
        </BackArrow>
        <DialogData>
          <DialogAvatarWrapper>
            <DialogAvatar src={logo} />
          </DialogAvatarWrapper>
          <Title>Lorem, ipsum.</Title>
          <Info>Lorem ipsum dolor sit.</Info>
        </DialogData>
        <VideoCall>
          <VideoCallIcon />
        </VideoCall>
        <Settings>
          <SettingsIcon />
        </Settings>
      </Header>

      <DialogBody>

        <SentMessage />
        <ReceivedMessage />

      </DialogBody>

      <Footer>
        <EmojiWrapper>
          <EmojiIcon />
        </EmojiWrapper>

        <Label>
          <Input placeholder='Write a message...' />
        </Label>

        <AttachFileWrapper>
          <AttachFileIcon />
        </AttachFileWrapper>

        <VoiceMessageWrapper>
          <VoiceMessageIcon src={voiceMessageIcon} />
        </VoiceMessageWrapper>
      </Footer>

    </Container>
  )
}

// -------- HEADER --------

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  padding: 12px 0;
  border-bottom: 1px solid #EDEDED;
`

const BackArrow = styled.div`
  flex: 0 0 40px;
  line-height: 0;
  padding: 8px;
`

const DialogData = styled.div`
  flex: 1 0 auto;
  display: grid;
  grid-template-columns: 48px 1fr;
  grid-template-rows: 25px 21px;
  grid-template-areas:
    'avatar title'
    'avatar info';
  grid-gap: 2px 10px;
`

const DialogAvatarWrapper = styled.div`
  grid-area: avatar;
`

const DialogAvatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`

const Title = styled.div`
  grid-area: title;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: #1B1A57;
`

const Info = styled.div`
  grid-area: info;
  font-size: 12px;
  line-height: 18px;
  color: #4F5E7B;
`

const VideoCall = styled.div`
  flex: 0 0 40px;
  line-height: 0;
  padding: 8px;
`

const Settings = styled.div`
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  position: relative;
`

const SettingsIcon = styled.span`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #4F5E7B;

  &:after, :before {
    content: '';
    position: absolute;
    top: 8px;
    left: 0;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #4F5E7B;
  }
  &:after {
    top: 8px;
  }
  &:before {
    top: -8px;
  }
`

// -------- BODY --------

const DialogBody = styled.div`
  height: 100%;
  padding: 0 16px;
  flex: 1 1 auto;
  overflow-y: auto;
  background: linear-gradient(180deg, #FFFFFF 0%, #F4F4F4 100%);
`

// -------- FOOTER --------

const Footer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px 8px 8px;
  flex: 0 0 auto;

  & > *:not(:first-child) {
    margin-left: 8px;
  }
`

const EmojiWrapper = styled.div`
  flex: 0 0 40px;
  padding: 8px;
  line-height: 0;
`

const Label = styled.label`
  flex: 1 0 auto;
`

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  font-size: 12px;
  line-height: 18px;
  color: #1B1A57;
  opacity: 0.5;
  margin: 0;
  padding: 0 4px;
  border: 0;
  height: 40px;
`

const AttachFileWrapper = styled.div`
  flex: 0 0 40px;
  padding: 8px;
  line-height: 0;
`

const VoiceMessageWrapper = styled.div`
  position: relative;
  flex: 0 0 40px;
  height: 40px;
  border-radius: 50%;
  line-height: 0;
  background: #2F80ED;
`

const VoiceMessageIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
