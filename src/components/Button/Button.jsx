// Buttonという一つのコンポーネントを定義

// function Button() {
//   return <button type="button">click</button>
// }
import styles from "./Button.module.css";

function Button() {

  // 必要なロジックは関数とリターンの間に書く
  const handleClick = () => {
    alert("It's licked");
  }

  return (
    <button className={styles.button} type='button' onClick={handleClick}>
      <i>icon</i>
      <span>click</span>
    </button>
  )
}

export default Button;
