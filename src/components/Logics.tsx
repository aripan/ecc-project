export const formatNumber = (inputVal: string[], setFunc: Function) => {
  let arrToStr = inputVal.join("");
  let strToNum: any = Number(arrToStr).toFixed(2);
  let formattedNum = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  });
  setFunc(formattedNum.format(strToNum));
};
