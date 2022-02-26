import styled from 'styled-components';
import { ReactComponent as LoupeIcon } from "../../common/img/loupe-icon.svg"
import logo from '../../common/img/trash/trash01.jpg'
import { ReactComponent as SettingsIcon1 } from './img/settings-icon-1.svg'
import { ReactComponent as SettingsIcon2 } from './img/settings-icon-2.svg'
import { ReactComponent as SettingsIcon3 } from './img/settings-icon-3.svg'
import { ReactComponent as SettingsIcon4 } from './img/settings-icon-4.svg'
import { ReactComponent as SettingsIcon5 } from './img/settings-icon-5.svg'
import { ReactComponent as SettingsIcon6 } from './img/settings-icon-6.svg'
import { ReactComponent as SettingsIcon7 } from './img/settings-icon-7.svg'
import { ReactComponent as SettingsArrow } from './img/settings-arrow.svg'

export const Settings = () => {
  return (
    <Container>

      <HeaderWrapper>

        <Header>
          <Title>Settings</Title>
          <LoupeIcon />
        </Header>

        <Profile>
          <AvatarWrapper>
            <Avatar src={logo} />
          </AvatarWrapper>
          <Username>Lorem, ipsum.</Username>
          <Status>Lorem ipsum dolor sit amet consectetur adipisicing.</Status>
        </Profile>

      </HeaderWrapper>

      <SettingsWrapper>

        <SettingsItem>
          <SettingsIcon1 />
          <SettingsName>Dark Mode</SettingsName>
          <Toggle />
        </SettingsItem>

        <SettingsItem>
          <SettingsIcon2 />
          <SettingsName>Account</SettingsName>
          <SettingsArrow />
        </SettingsItem>

        <SettingsItem>
          <SettingsIcon3 />
          <SettingsName>Notification</SettingsName>
          <SettingsArrow />
        </SettingsItem>

        <SettingsItem>
          <SettingsIcon4 />
          <SettingsName>Chat settings</SettingsName>
          <SettingsArrow />
        </SettingsItem>

        <SettingsItem>
          <SettingsIcon5 />
          <SettingsName>Data and storage</SettingsName>
          <SettingsArrow />
        </SettingsItem>

        <SettingsItem>
          <SettingsIcon6 />
          <SettingsName>Privacy and security</SettingsName>
          <SettingsArrow />
        </SettingsItem>

        <SettingsItem>
          <SettingsIcon7 />
          <SettingsName>About</SettingsName>
          <SettingsArrow />
        </SettingsItem>

      </SettingsWrapper>

    </Container>
  )
}

const Container = styled.div`
`

const HeaderWrapper = styled.div`
  padding: 0 8px;
  padding-bottom: 24px;
  margin-bottom: 16px;
  border-bottom: 1px solid #EBEBEB;
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

const Profile = styled.div`
  width: 85%;
  display: grid;
  grid-template-columns: 64px 1fr;
  grid-template-rows: 24px 32px;
  grid-template-areas:
    'avatar username'
    'avatar status';
  grid-gap: 8px 24px;
  padding: 0 16px;
`

const AvatarWrapper = styled.div`
  grid-area: avatar;  
`

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`

const Username = styled.div`
  grid-area: username;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  color: #1B1A57;
`

const Status = styled.div`
  grid-area: status;
  align-self: center;
  font-size: 12px;
  line-height: 18px;
  color: #4F5E7B;
`

const SettingsWrapper = styled.div`
  padding: 0 8px;
`

const SettingsItem = styled.div`
  display: flex;
  line-height: 24px;
  padding: 16px 24px;
  border-radius: 8px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`

const SettingsName = styled.p`
  flex-grow: 1;
  margin-left: 16px;
  font-size: 14px;
  color: #4F5E7B;
`

const Toggle = styled.div`
  width: 40px;
  height: 16px;
  border-radius: 20px;
  align-self: center;
  background: #4f5e7b33;
  /* opacity: 0.2; */
  cursor: pointer;
  position: relative;
  /* transform: matrix(-1, 0, 0, 1, 0, 0); */

  &:before {
    content: "";
    width: 24px;
    height: 24px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: -4px;
    background: #4F5E7B;
    /* box-shadow: 0px 4px 32px rgba(45, 156, 219, 0.15); */
  }
`