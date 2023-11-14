import axios from "axios";
import { Navbar } from "./components/Navbar";
import { ProfileCard } from "./components/ProfileCard";
import { ProfileFinder } from "./components/ProfileFinder";
import { useState } from "react";

function App() {
  const [httpError, setHttpError] = useState(null);
  const [userName, setUserName] = useState("");

  const [name, setName] = useState("");
  const [repos, setRepos] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [avatarUrl, setAvatarUrl] = useState("");

  const handleChange = (input) => {
    setUserName(input);
  };

  const fetchUser = async (event, input) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      setName(response.data.name);
      setRepos(response.data.public_repos);
      setFollowers(response.data.followers);
      setFollowing(response.data.following);
      setAvatarUrl(response.data.avatar_url);
      setHttpError(null);
    } catch (error) {
      setName(null);
      setHttpError(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <ProfileFinder handleChange={handleChange} fetchUser={fetchUser} />
      {httpError && (
        <h1 className="text-center text-white mt-4">No Results...</h1>
      )}
      <ProfileCard
        name={name}
        repos={repos}
        followers={followers}
        following={following}
        avatarUrl={avatarUrl}
        userName={userName}
      />
    </>
  );
}

export default App;
