function ResetButton() {
  function handleButtonClick() {
    window.location.href = window.location.href.split("?")[0];
  }

  return <button onClick={handleButtonClick}>Reset</button>;
}

export default ResetButton;
