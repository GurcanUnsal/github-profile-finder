export const ProfileFinder = () => {
  return (
    <div>
      <h2 className="mt-4 text-white fw-bold text-center">
        Github Profile Finder
      </h2>
      <div className="pt-4 container-fluid">
        <form className="d-flex justify-content-center align-items-center">
          <div className="form-group">
            <input
              type="text"
              className="dark-input p-2 rounded text-light border-0"
              placeholder="Github Username"
            />
          </div>
          <button type="submit" className="btn custom-btn ms-2">
            <i className="bi bi-search text-white"></i>
          </button>
        </form>
      </div>
    </div>
  );
};
