const fiver_order = document.getElementById("order_form");
const counter = document.querySelector(".counter");
//console.log(fiver_order);
if (fiver_order) {
  fiver_order.addEventListener("submit", function (e) {
    e.preventDefault();
    //console.log(this);
    let date = this.querySelector('input[type="date"]').value;
    let time = this.querySelector('input[type="time"]').value;
    //console.log(time);

    setInterval(() => {
      let start_time = new Date().getTime();
      let end_time = new Date(Date.parse(date + " " + time)).getTime();
      let time_diff = end_time - start_time;

      //geting the time_diff value in miliseconds
      let total_secs = Math.floor(time_diff / 1000);
      let total_mins = Math.floor(total_secs / 60);
      let total_hrs = Math.floor(total_mins / 60);
      let total_days = Math.floor(total_hrs / 24);

      let hours = total_hrs - total_days * 24; //
      let mins = total_mins - total_days * 24 * 60 - hours * 60; //
      let secs =
        total_secs - total_days * 24 * 60 * 60 - hours * 60 * 60 - mins * 60;

      counter.innerHTML = `${
        total_days > 9 ? total_days : "0" + total_days
      } : ${hours} : ${mins} : ${secs > 9 ? secs : "0" + secs}`;

      //console.log('Days-'+ total_days + " Hours- " + hours + " Minitues- " + mins + " Seconds- " + secs);
    }, 1000);
  });
}
