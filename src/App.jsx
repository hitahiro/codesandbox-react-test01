import React, { useState, useEffect } from "react";
import ColorfulMessage from "./components/ColorfulMessage.jsx";

const App = () => {
  console.log("最初");

  const [num, setNum] = useState(0); // 1つめがStateの変数名、2つめがStateを変更する関数名
  const [showFlg, setShowFlg] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
    // setShowFlg((num + 1) % 3 === 0);
  };

  const onClickSwitchShowFlg = () => {
    setShowFlg(!showFlg);
  };

  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      showFlg || setShowFlg(true);
    } else {
      showFlg && setShowFlg(false);
    }
    // }, []); // useEffectの第二引数に空の配列を渡すと最初の１回目だけ処理させることが可能
  }, [num]); // useEffectの第二引数に変数を渡すとその値が変更された時だけ通るようになる
  console.log("aaaa");

  return (
    <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickSwitchShowFlg}>on / off</button>
      {showFlg && <p>٩( ᐛ )و</p>}
    </>
  );
};

export default App;
