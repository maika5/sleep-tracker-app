const App = {
  backgroundColor: "#c6e5d9",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};


//「寝る時間」「起きた時間」の入力フォーム
export const InputForm = (props) => {

// このPropsは、親(Sleep.jsx)から渡される値を受け取っている
  const { sleeptime, waketime, onChange, onwakeChange, onClick, disabled } = props;

return (

  <div>
      <div>
        <label>寝る時間：</label>
        <input
          type="time" //スマホでのUIが最適化される
          value={sleeptime}
          disabled={disabled}
          onChange={onChange}
        />
      </div>

      <div>
        <label>起きた時間：</label>
          <input
          type="time"
          value={waketime}
          disabled={disabled}
          onChange={onwakeChange}
        />
      </div>

      <button disabled={disabled} onClick={onClick}>追加</button>
    </div>
);
};
