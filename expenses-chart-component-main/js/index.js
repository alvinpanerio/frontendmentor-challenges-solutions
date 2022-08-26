$(() => {
  graphFunc();
});

function graphFunc() {
  let barGraph = $(".bar-graph");
  let popUp = $(".pop-up");
  fetch("./data.json")
    .then((data) => data.json())
    .then((data) => {
      // pop up show
      for (let i = 0; i < data.length; i++) {
        $(barGraph[i]).hover(() => {
          $(popUp[i]).text(`$${data[i].amount}`);
          $(popUp[i]).toggleClass("show");
        });
      }
      // max value
      let max = data[0].amount;
      for (let i = 0; i < data.length; i++) {
        if (data[i].amount > max) {
          max = data[i].amount;
        }
      }
      // bar graph height
      for (let i = 0; i < barGraph.length; i++) {
        $(barGraph[i]).css("height", `${(data[i].amount / max) * 155}px`);
      }
      // current day color
      let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
      let day = new Date();
      let currentDay = day.getDay();
      $(`.${days[currentDay]}`).css("backgroundColor", "hsl(186, 34%, 60%)");
    });
}
