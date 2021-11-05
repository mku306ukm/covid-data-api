function getData() {
  url = "https://api.covidtracking.com/v1/states/current.json";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      show(data);
      console.log(data);
    });
}

getData();

// buildTable(getData);
// function buildTable(data) {
//   var table = document.getElementById("myTable");
//   for (var i = 0; i < data.length; i++) {
//     var row = ` <tr>
//                <td>${data[i].state} </td>
//                <td>${data[i].positive} </td>
//                <td>${data[i].totalTestResults} </td>
//                <td>${data[i].lastUpdateEt} </td>
//                <td>${data[i].death} </td>
//                </tr> `;
//     table.innerHTML += row;
//   }
// }

// $(document).ready(function () {
//   $.getJSON("current.json", function (data) {
//     var employee_data = "";
//     $.each(data, function (key, value) {
//       employee_data += "<td>" + value.state + "</td>";
//       employee_data += "<td>" + value.positive + "</td>";
//       employee_data += "<td>" + value.totalTestResults + "</td>";
//       employee_data += "<td>" + value.lastUpdateEt + "</td>";
//       employee_data += "<td>" + value.death + "</td>";
//       employee_data += "</tr>";
//     });
//     $("#employee_table").append(employee_data);
//   });
// });

// function load() {
//   console.log("Window Loaded.....");
//   fetch("https://api.covidtracking.com/v1/states/current.json")
//     .then((result) => result.json())
//     .then((json) => show(json.data));
// }

function show(data) {
  let table = document.getElementById("table");
  for (let i = 0; i < data.length; i++) {
    let obj = data[i];
    console.log(obj);
    let row = document.createElement("tr");
    let state = document.createElement("td");
    let positive = document.createElement("td");
    let totalTestResults = document.createElement("td");
    let lastUpdateEt = document.createElement("td");
    let death = document.createElement("td");

    state.innerHTML = obj.state;
    positive.innerHTML = obj.positive;
    totalTestResults.innerHTML = obj.totalTestResults;
    lastUpdateEt.innerHTML = obj.lastUpdateEt;
    death.innerHTML = obj.death;

    row.appendChild(state);
    row.appendChild(positive);
    row.appendChild(totalTestResults);
    row.appendChild(lastUpdateEt);
    row.appendChild(death);

    table.appendChild(row);
  }
}
