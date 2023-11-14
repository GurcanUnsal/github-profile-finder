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
          <div className="col-3 mx-2 bg-secondary rounded p-1">
            <p className="text-white ">Repos</p>
            <p className="text-white">6</p>
          </div>
          <div className="col-3 mx-2 bg-secondary rounded p-1">
            <p className="text-white ">Followers</p>
            <p className="text-white">0</p>
          </div>
          <div className="col-3 mx-2 bg-secondary rounded p-1">
            <p className="text-white ">Following</p>
            <p className="text-white">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};
