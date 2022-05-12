import style from "./ResetButton.module.css";

function ResetButton() {
  function handleButtonClick() {
    window.location.href = window.location.href.split("?")[0];
  }

  return (
    <button onClick={handleButtonClick} className={style.button}>
      Reset
    </button>
  );
}

export default ResetButton;
