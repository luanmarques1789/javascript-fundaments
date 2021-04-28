const div1 = document.getElementById("users");
const div2 = document.getElementById("file");
const url = "https://jsonplaceholder.typicode.com/users";
const file = "../practice/daytime";

fetch(url)
  .then((response) => response.json())
  .then((data) =>
    data.map((obj) => {
      const para = document.createElement("p");
      para.innerHTML = `${obj.name}`;
      div1.appendChild(para);
    })
  )
  .catch(() => console.error("Error: Oops, algo deu errado..."));

fetch(file)
  .then((myFile) => {
    const txtFile = myFile.text();
    return txtFile;
  })
  .then((myText) => {
    const para = document.createElement("p");
    para.innerHTML = ` <strong> ${myText}  </strong>`;
    div2.appendChild(para);
  });
