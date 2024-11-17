import React from 'react';

type ProfileProps = {
  name: string;
  age: number;
  bio: string;
  profilePictureUrl: string;
};

const Profile: React.FC<ProfileProps> = ({ name, age, bio, profilePictureUrl }) => {
  return (
    <div style={styles.profileContainer}>
      <img src={profilePictureUrl} alt={`${name}'s profile`} style={styles.profileImage} />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{bio}</p>
    </div>
  );
};

const styles = {
  profileContainer: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    textAlign: 'center' as const,
  },
  profileImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover' as const,
  },
};

export default Profile;
