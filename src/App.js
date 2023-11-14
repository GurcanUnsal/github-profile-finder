import { Navbar } from "./components/Navbar";
import { ProfileCard } from "./components/ProfileCard";
import { ProfileFinder } from "./components/ProfileFinder";

function App() {
  return (
    <>
        <Navbar />
        <ProfileFinder />
        <ProfileCard />
    </>
  );
}

export default App;
