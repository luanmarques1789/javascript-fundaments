const ul = document.getElementById("users");
const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(typeof data);
    return data.map((user) => {
      const li = document.createElement("li");
      li.innerHTML = `${user.name} (${user.username})`;
      ul.appendChild(li);
    });
  })
  .catch((error) => {
    console.log("Oops!", error);
  });

console.log("LOG");
