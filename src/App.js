import React from "react";
import { markets, symbols } from "./data";
import { getData, tickerUI, trend_value } from "./utils";

export const init = async ({ drawKey, getConfig }) => {
  const fetchDataAndDraw = async () => {
    let { symbol, market, type, timeframe } = getConfig();
    let fn = type == "stocks" ? "TIME_SERIES_DAILY" : "DIGITAL_CURRENCY_DAILY";
    const result = await getData({ fn, symbol, market, type });
    let nextResult;
    let len = result.arr.length;
    switch (timeframe) {
      case "3m":
        nextResult = result;
        nextResult.arr = nextResult.arr.slice(len - 90, len);
        break;
      case "m":
        nextResult = result;
        nextResult.arr = nextResult.arr.slice(len - 30, len);
        break;
      case "w":
        nextResult = result;
        nextResult.arr = nextResult.arr.slice(len - 7, len);
        break;
      default:
        nextResult = result;
    }

    const trend = trend_value(nextResult.arr);
    drawKey((arg) => tickerUI(arg, nextResult, trend));
  };

  fetchDataAndDraw();

  const interval = setInterval(async () => {
    fetchDataAndDraw();
  }, 3456000); // every 1 hour

  return () => {
    clearInterval(interval);
  };
};

export const manifest = {
  version: 1,
  bespoke: true,
};

const App = ({ config, setConfig }) => {
  const onChange = (e) =>
    setConfig({ ...config, [e.target.name]: e.target.value });

  return (
    <div className="webdeck-plugin" style={{ background: "purple" }}>
      <h3 className="webdeck-title">Webdeck Stocks Plugin</h3>
      <div className="webdeck-setting">
        <label htmlFor="type">type: </label>
        <select
          required
          name="type"
          onChange={onChange}
          value={config.type || ""}
        >
          <option value="" disabled hidden>
            select...
          </option>
          <option value="crypto">crypto </option>
          <option value="stocks" disabled>
            stocks
          </option>
        </select>
      </div>
      <div className="webdeck-setting">
        <label htmlFor="symbol">symbol: </label>
        <select
          required
          name="symbol"
          onChange={onChange}
          value={config.symbol || ""}
        >
          <option value="" disabled hidden>
            select...
          </option>
          {symbols[config?.type]?.map((s) => (
            <option key={s} value={s.split(",")[0]}>
              {s.split(",")[1]}
            </option>
          ))}
        </select>
      </div>
      <div className="webdeck-setting">
        <label htmlFor="market">market: </label>
        <select
          required
          name="market"
          onChange={onChange}
          value={config.market || ""}
        >
          <option value="" disabled hidden>
            select...
          </option>
          {markets.map((m) => (
            <option key={m} value={m.split(",")[0]}>
              {m.split(",")[1]}
            </option>
          ))}
        </select>
      </div>
      <div className="webdeck-setting">
        <label htmlFor="type">timeframe: </label>
        <select
          required
          name="timeframe"
          onChange={onChange}
          value={config.timeframe || ""}
        >
          <option value="" disabled hidden>
            year
          </option>
          <option value="y">year</option>
          <option value="3m">quarter</option>
          <option value="m">month</option>
          <option value="w">week</option>
        </select>
      </div>
    </div>
  );
};

export default App;
