// import { Container, Tab, Tabs } from "./Layout.styled"
import styled from "styled-components";
import { ReactChild } from "react"
import { ReactComponent as ChatsIcon } from "./img/chats-icon.svg"
import { ReactComponent as RecentIcon } from "./img/recent-icon.svg"
import { ReactComponent as CallsIcon } from "./img/calls-icon.svg"
import { ReactComponent as SettingsIcon } from "./img/settings-icon.svg"

type Props = {
  children: ReactChild
}

export const MainLayout = ({ children }: Props) => {
  return (
    <Container>
      <Page>
        {children}
      </Page>
      <Tabs>
        <Tab>
          <ChatsIcon />
        </Tab>
        <Tab>
          <RecentIcon />
        </Tab>
        <Tab>
          <CallsIcon />
        </Tab>
        <Tab>
          <SettingsIcon />
        </Tab>
      </Tabs>
    </Container>
  )
}


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Page = styled.div`
  flex: 1 1 auto;
  height: 100%;
  overflow-y: auto;
`

const Tabs = styled.div`
  flex: 0 0 auto;
  background: #FFFFFF;
  display: flex;
  text-align: center;
  justify-content: space-between;
  line-height: 0;
  box-shadow: 0px -8px 32px rgba(70, 96, 135, 0.1);
`

const Tab = styled.div`
  width: 25%;
  padding: 12px 0;
`