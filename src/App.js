
import './App.css';

function App() {
  const title = 'Welcome to BLog';
  const likes = 50;
  return (
    <div className="App">
      
       <h1>{title}</h1>
       <h5> Liked {likes} times</h5>
  
    </div>
  );
}

export default App;
