const App = {
  backgroundColor: "#c6e5d9",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};


//寝る時間
export const InputForm = (props) => {
  console.log("SleepForm がレンダリングされた！");
  const { sleepText, onChange, onClick, disabled } = props;
return (
  <div>
    <input
    value={sleepText}
    disabled={disabled}
    placeholder="寝る時間を入力"
    onChange={onChange}
    />

    <button disabled={disabled} onClick={onClick}>追加</button>
    </div>
);
};
