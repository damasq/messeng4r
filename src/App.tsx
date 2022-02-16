import { Calls } from "./modules/calls/Calls";
import { Chats } from "./modules/chats/Chats";
import { MainLayout } from "./modules/layout/Layout";

function App() {
  return (
    <MainLayout>
      {/* <Chats /> */}
      <Calls />
    </MainLayout>
  );
}

export default App;
