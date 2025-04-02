import React from "react";
import BrandProfile from "../../components/Profiles/BrandProfile";
import UgcCreatorProfile from "../../components/Profiles/UgcCreatorProfile";

const Profile = () => {
  const brand = false;
  const ugcCreator = true;

  return (
    <>
      {brand && <BrandProfile />}
      {ugcCreator && <UgcCreatorProfile />}
    </>
  );
};

export default Profile;
