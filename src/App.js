import React from "react";
import { markets, symbols } from "./data";
import { getData, tickerUI } from "./utils";

export const init = async ({ drawKey, getConfig }) => {
  const fetchDataAndDraw = async () => {
    let { symbol, market, type } = getConfig();
    let fn = type == "stocks" ? "TIME_SERIES_DAILY" : "DIGITAL_CURRENCY_DAILY";
    const result = await getData({ fn, symbol, market, type });
    console.log({ result });
    drawKey((arg) => tickerUI(arg, result));
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
    </div>
  );
};

export default App;
