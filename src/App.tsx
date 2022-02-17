// import { Calls } from "./modules/calls/Calls";
// import { Chats } from "./modules/chats/Chats";
import { MainLayout } from "./modules/layout/Layout";
import { Settings } from "./modules/settings/Settings";

function App() {
  return (
    <MainLayout>
      {/* <Chats /> */}
      {/* <Calls /> */}
      <Settings />
    </MainLayout>
  );
}

export default App;
