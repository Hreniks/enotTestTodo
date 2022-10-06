export const getNextDayAndMonth = () => {
  let mm = new Date().getMonth() + 1;
  let dd = new Date().getDate();
  let yy = new Date().getFullYear();
  let days = daysInMonth(mm, yy);

  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  function tick() {
    dd++;
    if (dd > days) {
      dd = 1;
      mm++;
      if (mm > 12) mm = 1;
    }

    return (dd < 10 ? "0" + dd : dd) + "/" + (mm < 10 ? "0" + mm : mm);
  }
  return tick;
};

export const nextDayAndMonth = getNextDayAndMonth();
