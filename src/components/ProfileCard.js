import { Card } from "./Card";

export const ProfileCard = () => {
  return (
    <div className="p-1 mt-5 bg-dark text-center mx-auto rounded profile-card">
      <div className="container d-flex flex-column justify-content-around align-items-center h-100">
        <img
          className="img-fluid img-thumbnail rounded-circle"
          width={150}
          height={150}
          src="https://avatars.githubusercontent.com/u/127088874?v=4"
          alt="vettel"
        />
        <div className="w-100 row d-flex justify-content-center">
          <Card title="Repos" quantity={6} />
          <Card title="Followers" quantity={0} />
          <Card title="Following" quantity={0} />
        </div>
      </div>
    </div>
  );
};
