import { Card } from "./Card";

export const ProfileCard = ({
  userName,
  name,
  repos,
  followers,
  following,
  avatarUrl,
}) => {
  if (!name) {
    return <></>;
  }

  return (
    <div className="p-2 mt-5 bg-dark text-center mx-auto rounded profile-card">
      <div className="container d-flex flex-column justify-content-around align-items-center h-100">
        <a
          href={`https://github.com/${userName}`}
          className="text-decoration-none"
        >
          <h3 className="text-white fw-bold">{name}</h3>
        </a>
        <img
          className="img-fluid img-thumbnail rounded-circle mb-2"
          width={150}
          height={150}
          src={avatarUrl}
          alt={`${name}'s avatar.`}
        />
        <div className="w-100 row d-flex justify-content-center">
          <Card title="Repos" quantity={repos} />
          <Card title="Followers" quantity={followers} />
          <Card title="Following" quantity={following} />
        </div>
      </div>
    </div>
  );
};
