var monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function globalDateTransform(dateVal, expectedFormat) {
  // Convert to date instance
  let responseDate = '';

  if (!!dateVal) {
    let dateInstance = new Date(dateVal);

    let day = dateInstance.getDate();
    let monthIndex = dateInstance.getMonth();
    let year = dateInstance.getFullYear();
    day = (day <= 9) ? "0" + day : day;

    // Expected format operation
    switch (expectedFormat) {

      case 'DD-MMM-YYYY':
        monthIndex = (monthIndex + 1);
        responseDate = day + '-' + monthList[monthIndex] + '-' + year;
        break;
      case 'DD/MM/YYYY':
        monthIndex = (monthIndex + 1);
        monthIndex = (monthIndex <= 9) ? "0" + monthIndex : monthIndex;
        responseDate = day + '/' + monthIndex + '/' + year;
        break;
      default:
    }
  }
  return responseDate;
}