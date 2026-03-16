// Buttonという一つのコンポーネントを定義

// function Button() {
//   return <button type="button">click</button>
// }
import styles from "./Button.module.css";

function Button(props) {

  // Propsの受け取り
  const { type, disabled, children, onClick } = props;

  // 必要なロジックは関数とリターンの間に書く
  // const handleClick = () => {
  //   alert("It's licked");
  // }

  // return (
  //   <button className={styles.button} type='button' onClick={handleClick}>
  //     <i>icon</i>
  //     <span>click</span>
  //   </button>
  // )

  return (
    <button type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;
