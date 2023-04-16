// const urls = "https://hapi-books.p.rapidapi.com/nominees/romance/2021";

// var info = [];

// info = fetch(urls, {
//   headers: {
//     "X-RapidAPI-Key": "ac2daa38f7msh8abae35415decbbp1f0854jsn0d18f60882b3",
//     "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     return data;
//   })
//   .catch((error) => console.error(error));

// const container = document.getElementById("root");
// info.forEach((book) => {
//   const card = document.createElement("div");
//   card.classList.add("card");

//   const cover = document.createElement("img");
//   cover.setAttribute("src", book.cover);
//   cover.classList.add("cover");
//   card.appendChild(cover);

//   const name = document.createElement("div");
//   name.classList.add("title");
//   name.innerText = book.name;
//   card.appendChild(name);

//   const author = document.createElement("div");
//   author.classList.add("author");
//   author.innerText = `by ${book.author}`;
//   card.appendChild(author);

//   const url = document.createElement("a");
//   url.setAttribute("href", book.url);
//   url.classList.add("link");
//   url.innerText = "View More";
//   card.appendChild(url);

//   container.appendChild(card);

//   const search = document.getElementById("search").value.toLowercase();
//   const inputs = document.getElementById("query");

//   info.forEach((book) => {
//     let x = book.name;
//     console.log(x);
//     for (let i = 0; i < x.length; i++) {
//       if (x[i].toLowercase().includes(search)) {
//         const show = (x[i].style.display = "block");
//       } else {
//         x[i].style.display = "none";
//       }
//     }
//     inputs.appendChild(show);
//   });
// });
