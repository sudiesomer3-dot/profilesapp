import { useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

function App() {
  const { user, signOut } = useAuthenticator();

  return (
    <main>
      <h1>Hello, Sudies Hussein</h1>
      <p>Email: {user?.signInDetails?.loginId}</p>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;
