import React from 'react';
import Profile from '@/component/profile/profile';

const App: React.FC = () => {
  return (
    <div>
      <Profile
        name="John Doe"
        age={30}
        bio="A passionate developer and tech enthusiast."
        profilePictureUrl="https://via.placeholder.com/100"
      />
    </div>
  );
};

export default App;
