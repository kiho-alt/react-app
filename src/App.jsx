import './App.css'
import Button from './components/Button/Button.jsx'

function App() {

  const handleClick = () => {
    alert("Thanksss...");
  }

  return (
    <>
      {/* ↑の「空のフラグメント」について、returnの中に複数行書きたい場合は何かしらのタグで囲む必要があり。今回は「空のフラグメント」だが、divとかでもOK */}
      <h1>Hello World</h1>
      {/* <Button type="submit" disabled={true} /> */}
      <Button type="submit" disabled={false} onClick={handleClick}>
        Click here!{/* ←children */}
      </Button>
    </>
  )
}

export default App
