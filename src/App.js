import './App.css';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
Amplify.configure(config);


function App({ signOut, user }) {
  return (
    <div className="App">
      <header className="App-header">
        Welcome
      </header>
      <>
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
      </>
    </div>
  );
}

export default withAuthenticator(App);
