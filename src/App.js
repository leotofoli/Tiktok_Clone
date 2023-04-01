import './App.css'
import Video from './pages/Video'

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video 
        likes={100}
        messages={200}
        shares={300} 
        name="apenas_um_teste"
        description="Meditação"
        music="zen"
        url="https://firebasestorage.googleapis.com/v0/b/jornadadevtr.appspot.com/o/WhatsApp%20Video%202023-03-29%20at%2020.04.52.mp4?alt=media&token=db4be029-27cc-4af9-b75d-3ce5fd1b1fe2"/>
        <Video 
        likes={111}
        messages={222}
        shares={333} 
        name="Teste"
        description="Meditação"
        music="zen"
        url="https://firebasestorage.googleapis.com/v0/b/jornadadevtr.appspot.com/o/WhatsApp%20Video%202023-03-29%20at%2020.04.52.mp4?alt=media&token=db4be029-27cc-4af9-b75d-3ce5fd1b1fe2"/>
      </div>
    </div>
  );
}

export default App;