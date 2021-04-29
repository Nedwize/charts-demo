import React, { useState } from "react";
import Button from "./components/Button";
import Wrapper from "./components/Wrapper";
import BodyContainer from "./components/BodyContainer";
import ToggleButton from "./components/ToggleButton";
import ChartContainer from "./components/ChartContainer";
import ConfigInput from "./components/ConfigInput";

import Chart2 from "./components/Chart2";
import Bar from "./components/Bar";
import BarWithNegativeValues from "./components/BarWithNegativeValues";

import config from "./data/config";

const App = () => {
  const initialData = config.reverse();
  const [active, setActive] = useState("chart1");
  const [theme, setTheme] = useState("light");
  const [data, setData] = useState(initialData);
  const [inputValue, setInputValue] = useState(
    JSON.stringify(initialData, null, 4)
  );

  console.log(initialData);

  const saveData = () => {
    setData(JSON.parse(inputValue));
  };

  const renderChart = () => {
    if (active === "chart2") {
      return <Chart2 theme={theme} />;
    } else {
      return (
        <ChartContainer>
          <Bar theme={theme} data={data} />
          <BarWithNegativeValues theme={theme} data={data} />
        </ChartContainer>
      );
    }
  };

  const changeTheme = () => {
    if (theme === "light") {
      document.body.style.backgroundColor = "#100c2a";
      setTheme("dark");
    } else {
      document.body.style.backgroundColor = "white";
      setTheme("light");
    }
  };

  return (
    <BodyContainer dark={theme}>
      <Wrapper>
        <Button
          primary={active === "chart1"}
          onClick={() => setActive("chart1")}
        >
          Chart 1
        </Button>
        <Button
          primary={active === "chart2"}
          onClick={() => setActive("chart2")}
        >
          Chart 2
        </Button>
        <ToggleButton changeTheme={changeTheme} />
        {renderChart()}
        <ConfigInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          spellCheck="false"
        />
        <Button primary onClick={() => saveData()}>
          Save
        </Button>
      </Wrapper>
    </BodyContainer>
  );
};
export default App;