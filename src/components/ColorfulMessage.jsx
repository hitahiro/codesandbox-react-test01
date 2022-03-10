import React from "react";

const ColorfulMessage = (props) => {
  console.log("Colorful");
  const { color, children } = props; // 分割代入
  const contentStyle2 = {
    color, // JavaScirptは プロパティ名と当てはめる変数が同じならば変数のみで省略可能
    fontSize: "18px"
  };
  return <p style={contentStyle2}>{children}</p>;
};

export default ColorfulMessage;
