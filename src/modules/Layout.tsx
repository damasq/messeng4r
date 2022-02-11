import { Container, Tab, Tabs } from "../styles/Layout.styled"
import { ReactComponent as ChatsIcon } from "../img/layout/chats-icon.svg"
import { ReactComponent as RecentIcon } from "../img/layout/recent-icon.svg"
import { ReactComponent as CallsIcon } from "../img/layout/calls-icon.svg"
import { ReactComponent as SettingsIcon } from "../img/layout/settings-icon.svg"

export const MainLayout = () => {
  return (
    <Container>

      Lorem ipsum dolor sit amet, consectetur adipisicing.

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
