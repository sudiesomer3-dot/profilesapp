import { useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/data";
import { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

const client = generateClient();

function App() {
  const { user, signOut } = useAuthenticator();
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    client.models.UserProfile.list().then(({ data }) => {
      if (data.length > 0) setUserProfile(data[0]);
    });
  }, []);

  return (
    <main>
      <h1>Hello, {user?.signInDetails?.loginId}</h1>
      {userProfile && <p>Profile Owner: {userProfile.profileOwner}</p>}
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;