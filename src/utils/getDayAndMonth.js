export const getDayAndMonth = () => {
  let mm = new Date().getMonth() + 1;
  let dd = new Date().getDate();

  return (dd < 10 ? "0" + dd : dd) + "/" + (mm < 10 ? "0" + mm : mm);
};
