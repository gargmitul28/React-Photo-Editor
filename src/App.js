import {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [image, setImage] = useState()
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturate, setSaturate] = useState(100);
  const [sepia, setSepia] = useState(0);
  const [blur, setBlur] = useState(0);
  const [grayscale, setGrayscale] = useState(0);
  // const [hue, setHue] = useState(0);
  const [invert, setInvert] = useState(0);
  const [disable, setDisable] = useState(true);

  const [compare, setCompare] = useState(false);


  const addImage = e => {
    setImage(URL.createObjectURL(e.target.files[0]))
    setDisable( false ) 
  }

  const removeImage = () => {
    var choice = window.confirm("Are you sure?");
    if (choice === true) {
        setImage(null)
    }
    setDisable( true) 
  }

  const changeBrightness = e => {
    setBrightness(e.target.value);
  }
  const changeContrast = e => {
    setContrast(e.target.value);
  }
  const changeSaturation = e => {
    setSaturate(e.target.value);
  }
  const changeSepia = e => {
    setSepia(e.target.value);
  }
  const changeBlur = e => {
    setBlur(e.target.value);
  }
  const changeGrayscale = e => {
    setGrayscale(e.target.value);
  }
  // const changeHue = e => {
  //   setHue(e.target.value);
  // }
  const changeInvert = e => {
    setInvert(e.target.value);
  }

  const style = {
    filter: `grayscale(${grayscale}%) blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) sepia(${sepia}%) invert(${invert}%)`,
  }

  return (
    <div className="App">
      <header>
        <h1 className="logo">Photo Editor</h1>
      </header>
      <main className="main">
        <div className="controller">
          <h3 className="controller-head">Controller</h3>
          <div className="controller-container">
            <p className="name">Brightness</p>
            <div className="input-container">
              <input type="range" name="" id="" value={brightness} max="200" min="0" className="inp" onChange={changeBrightness} disabled={disable}/>
              <label htmlFor="">{brightness}</label>
            </div>
            <p className="name">Contrast</p>
            <div className="input-container">
              <input type="range" name="" id="" value={contrast} max="200" min="0" className="inp" onChange={changeContrast} disabled={disable}/>
              <label htmlFor="">{contrast}</label>
            </div>
            <p className="name">Saturate</p>
            <div className="input-container">
              <input type="range" name="" id="" value={saturate} max="200" min="0" className="inp" onChange={changeSaturation} disabled={disable}/>
              <label htmlFor="">{saturate}</label>
            </div>
            <p className="name">Sepia</p>
            <div className="input-container">
              <input type="range" name="" id="" value={sepia} className="inp"  onChange={changeSepia} disabled={disable}/>
              <label htmlFor="">{sepia}</label>
            </div>
            <p className="name">Blur</p>
            <div className="input-container">
              <input type="range" name="" id="" value={blur} className="inp" onChange={changeBlur} disabled={disable}/>
              <label htmlFor="">{blur}</label>
            </div>
            <p className="name">Grayscale</p>
            <div className="input-container">
              <input type="range" name="" id="" value={grayscale} className="inp" onChange={changeGrayscale} disabled={disable}/>
              <label htmlFor="">{grayscale}</label>
            </div>
            {/* <p className="name">Hue</p>
            <div className="input-container">
              <input type="range" name="" id="" value={hue} className="inp" onChange={changeHue} disabled={disable}/>
              <label htmlFor="">{hue}</label>
            </div> */}
            <p className="name">Invert</p>
            <div className="input-container">
              <input type="range" name="" id="" value={invert} className="inp" onChange={changeInvert} disabled={disable}/>
              <label htmlFor="">{invert}</label>
            </div>
            <div className="btns">
              {/* <button className="control-btn" disabled={disable} onClick={()=>setGrayscale(true)}>Grayscale</button>
              <button className="control-btn" disabled={disable}>Hue-Invert</button>
              <button className="control-btn" disabled={disable}>Invert</button> */}
              {/* <button className="control-btn" onFocus={()=>setCompare(true)} on>Compare</button> */}
              <button className="export" disabled={disable}>Export</button>
            </div>
          </div>
        </div>
        <div className="canvas">
          {/* <div className="close">+</div> */}
          {image ? (
            <div className="imgs">
            {image ? (<button className="close" onClick={removeImage}>+</button>) : null}
              {/* <p className="filename">{filename}</p> */}
              <img src={image} className="image-prev" alt="" onDoubleClick={()=>setCompare(false)}/>
               {compare ? null : <img src={image} style={style} className="image" alt="" onDoubleClick={() => setCompare(true)}/>}
            </div>
          ):(
            <div className="add">
              <p className="add-label">Add Image File</p>
              <input type="file" id="file" accept="image/*" onChange={addImage} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;