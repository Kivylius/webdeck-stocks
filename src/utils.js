const keys = {
  data: "Time Series (Digital Currency Daily)",
  value: "4. close",
  meta: "Meta Data",
  a: "2. Digital Currency Code",
  b: "4. Market Code",
};

const parseData = (data) => {
  const parsedData = {};
  console.log("DDDATRAA", data);
  try {
    const meta = data[keys.meta];
    parsedData.name = `${meta[keys.a]}-${meta[keys.b]}`;
    parsedData.data = data[keys.data];
    parsedData.arr = Object.values(parsedData.data)
      .map((value) => {
        const price = value[keys.value];
        return price;
      })
      .reverse();
    console.log({ F: true, parsedData });
    return parsedData;
  } catch (e) {
    return parsedData;
  }
};

const DB = sessionStorage.getItem("stockdb");

export const getData = ({ type, fn, symbol, market }) => {
  return new Promise(async (resolve, reject) => {
    switch (type) {
      case "stocks":
        resolve({});
        break;
      case "crypto":
        if (DB) return resolve(JSON.parse(DB));
        let url = `https://www.alphavantage.co/query?function=${fn}&symbol=${symbol}&market=${market}&apikey=BSYOR5SXYSHVA229"`;
        const result = await fetch(url);
        const data = await result.json();
        console.log("crypto data", data);
        const parsedData = parseData(data);
        sessionStorage.setItem("stockdb", JSON.stringify(parsedData));
        resolve(parsedData);
        break;
      default:
        reject({});
    }
  });
};

export const tickerUI = ({ canvas, ctx }, data) => {
  console.log({ data });

  // draw grapgh
  drawGraph(ctx, data.arr);

  // draw title
  drawCenterText(
    ctx,
    canvas,
    parseFloat(data.arr[data.arr.length - 1]).toFixed(2)
  );

  // drop top tilte
  drawTopText(ctx, canvas, data.name);
};

const drawGraph = (ctx, dataArrInput) => {
  var GRAPH_TOP = 50;
  var GRAPH_BOTTOM = 52;
  var GRAPH_LEFT = 5;
  var GRAPH_RIGHT = 70;

  var GRAPH_HEIGHT = 22;
  var GRAPH_WIDTH = 72;
  var dataArr = dataArrInput || [6, 8, 10, 12, 11, 7, 5, 8, 11, 5, 2, 3, 4, 6];
  var arrayLen = dataArr.length;

  // calculate largest piece of data
  var largest = 0;
  for (var i = 0; i < arrayLen; i++) {
    if (dataArr[i] > largest) {
      largest = dataArr[i];
    }
  }

  ctx.beginPath();
  // make your graph look less jagged
  ctx.lineJoin = "round";
  ctx.strokeStyle = "green";
  // add first point in the graph
  ctx.moveTo(
    GRAPH_LEFT,
    GRAPH_HEIGHT - (dataArr[0] / largest) * GRAPH_HEIGHT + GRAPH_TOP
  );
  // loop over data and add points starting from the 2nd index in the array as the first has been added already
  for (var i = 1; i < arrayLen; i++) {
    ctx.lineTo(
      (GRAPH_RIGHT / arrayLen) * i + GRAPH_LEFT,
      GRAPH_HEIGHT - (dataArr[i] / largest) * GRAPH_HEIGHT + GRAPH_TOP
    );
  }
  // actually draw the graph
  ctx.stroke();
};

const drawCenterText = (ctx, canvas, price) => {
  ctx.fillStyle = "#FFF";
  ctx.font = "14px sans-serif";

  var textString = price,
    textWidth = ctx.measureText(textString).width;

  ctx.fillText(
    textString,
    canvas.width / 2 - textWidth / 2,
    canvas.height / 2 + 5,
    canvas.width
  );
};

const drawTopText = (ctx, canvas, title) => {
  ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
  ctx.font = "10px sans-serif";

  var textString = title,
    textWidth = ctx.measureText(textString).width;

  ctx.fillText(textString, canvas.width / 2 - textWidth / 2, 15, canvas.width);
};
