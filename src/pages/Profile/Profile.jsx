import React from "react";
import BrandProfile from "../../components/Profiles/BrandProfile";

const Profile = () => {
  const brand = false;

  return (
    <>
      {brand && <BrandProfile />}
    </>
  );
};

export default Profile;
