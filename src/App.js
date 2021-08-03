import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import "./app.css";
import LoginForm from './components/LoginForm';

function App() {
    if(!localStorage.getItem("username")) return <LoginForm/>

  return (
    <ChatEngine
      height = "100vh"
      projectID = "27a174e1-40bd-4b41-98fa-3f341548e074"
      userName = {localStorage.getItem('username')}
      userSecret = {localStorage.getItem('password')}
      renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;
