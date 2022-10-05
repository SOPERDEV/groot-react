

function App() {
  return (
    <div className="App" style={{marginLeft:20}} >
      <div style={{ display: 'flex', flexDirection: 'row' }}>
      <img src='./groot.png' style={{ height: 'auto',width:'40%', position: 'absolute', right: '0',zIndex:-1 }} />
        <h1 style={{ color: "#fff", fontSize: 55,color:"#01A420" }}>GRoot</h1>
        <h1 style={{ color: "#fff", fontSize: 55 }}>JS</h1>
        
          
      </div>
      <div>
        <h2 style={{ color: '#FFF' }}>Build on top of React : A JavaScript Library</h2>
      </div>
      <div style={{ backgroundColor: "#666666", opacity: 0.5,width:400}}>
      <h2 style={{ color: '#FFF',opacity:1,fontFamily:"monospace", }}>/*</h2>
        <h2 style={{ color: '#FFF', opacity: 1, fontFamily: "monospace" }}>Edit App.jsx to see changes</h2>
        <h2 style={{ color: '#FFF',opacity:1,fontFamily:"monospace" }}>*/</h2>
      </div>
      <div style={{ backgroundColor: "#666666", opacity: 0.5,width:400}}>
      <h2 style={{ color: '#FFF',opacity:1,fontFamily:"monospace", }}>/*</h2>
        <h2 style={{ color: '#FFF', opacity: 1, fontFamily: "monospace" }}>Visit our site to see docs</h2>
        <h2 style={{ color: '#FFF',opacity:1,fontFamily:"monospace" }}>*/</h2>
      </div>

      <div style={{ backgroundColor: "#000", opacity: 0.5,width:400,position:'absolute',bottom:15}}>
      <h2 style={{ color: '#FFF',opacity:1,fontFamily:"monospace", }}>v.1.0.0</h2>
        <h2 style={{ color: '#FFF', opacity: 1, fontFamily: "monospace" }}>A SOPERDEV Creation</h2>
        <a href='https://www.soperdev.com'><h2 style={{ color: '#FFF',opacity:1,fontFamily:"monospace" }}>visit: www.soperdev.com</h2></a>
      </div>
    </div>
  );
}

export default App;
