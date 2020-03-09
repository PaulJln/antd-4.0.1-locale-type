import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import locale from "antd/lib/date-picker/locale/fr_FR";
import DatePicker from "antd/lib/date-picker";

ReactDOM.render(
  <div className="App">
    <DatePicker locale={locale} />
  </div>,
  document.getElementById("root")
);
