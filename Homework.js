fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  })
  .then(function (data) {
    makeTable(data);
  })
  .catch(function (err) {
    console.warn("Something went wrong.", err);
  });

const makeTable = (results) => {
  console.log(results);
  const body = document.querySelector("tbody");
  results.map((user) => {
    console.log(user.id);
    const htmlTemplate = `
    <tr class="person" id="Select${user.id}">
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.address.street + " " + user.address.city}</td>
      <td>${user.phone}</td>
      <td>${user.website}</td>
      <td>${user.company.name}</td>
      <td><button onclick="removeList(${user.id})">delete</button></td>
    </tr>;
    `;
    body.innerHTML += htmlTemplate;
  });
};

const showData = () => {
  console.log("clicked");
  document.querySelector("table").style.display = "block";
};

function removeList(id) {
  var deleteData = document.getElementById(`Select${id}`);
  deleteData.remove();
}