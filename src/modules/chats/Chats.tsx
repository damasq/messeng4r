import styled from 'styled-components'
import { ChatItem } from "./ChatItem"
import { ReactComponent as LoupeIcon } from "../../common/img/loupe-icon.svg"
import addChatIcon from "./img/add-new-chat-icon.svg"
// import { Container, Header, ChatsList } from "./Chats.styled"

export const Chats = () => {
  return (
    <Container>

      <Header>
        <Title>Chats</Title>
        <LoupeIcon />
      </Header>

      <ChatsFilters>
        <Filter>All chats</Filter>
        <Filter>Personal</Filter>
        <Filter>Work</Filter>
        <Filter>Groups</Filter>
      </ChatsFilters>

      <ChatsList>
        <ChatItem></ChatItem>
      </ChatsList>

      <AddChat>
        <AddChatButton src={addChatIcon} />
      </AddChat>

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

const ChatsFilters = styled.div`
  margin-bottom: 24px;
  font-size: 12px;
  font-height: 18px;
  padding: 0 8px;
`

const Filter = styled.p`
  display: inline-block;
  color: rgb(27, 26, 87, 0.4);
  background: #fff;
  line-height: 18px;
  padding: 4px 8px;
  border-radius: 4px;
  box-shadow: 0px 4px 32px rgba(70, 96, 135, 0.1);

  &:not(:first-child) {
    margin-left: 24px;
  }

  &:first-child {
    background: #2F80ED;
    color: #fff;
  }
`

const ChatsList = styled.div`

`

const AddChat = styled.div`
  position: fixed;
  right: 6%;
  bottom: 10%;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #2F80ED;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.15);
`

const AddChatButton = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`