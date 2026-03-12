import './App.css'
import Button from './components/Button/Button.jsx'

function App() {

  return (
    <>
      {/* ↑の「空のフラグメント」について、returnの中に複数行書きたい場合は何かしらのタグで囲む必要があり。今回は「空のフラグメント」だが、divとかでもOK */}
      <h1>Hello World</h1>
      <Button />
    </>
  )
}

export default App
