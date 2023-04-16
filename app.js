const data = [
  {
    book_id: 54985743,
    name: "People We Meet on Vacation",
    author: "Emily Henr",
    votes: 88755,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618913179l/54985743.jpg",
    url: "https://www.goodreads.com/book/show/54985743-people-we-meet-on-vacation?from_choice=true",
  },
  {
    book_id: 56732449,
    name: "The Love Hypothesis",
    author: "Ali Hazelwoo",
    votes: 88192,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1611937942l/56732449.jpg",
    url: "https://www.goodreads.com/book/show/56732449-the-love-hypothesis?from_choice=true",
  },
  {
    book_id: 54860443,
    name: "One Last Stop",
    author: "Casey McQuisto",
    votes: 54845,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598019346l/54860443.jpg",
    url: "https://www.goodreads.com/book/show/54860443-one-last-stop?from_choice=true",
  },
  {
    book_id: 57190892,
    name: "The Spanish Love Deception",
    author: "Elena  Arma",
    votes: 40504,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1614122544l/57190892._SY475_.jpg",
    url: "https://www.goodreads.com/book/show/57190892-the-spanish-love-deception?from_choice=true",
  },
  {
    book_id: 53914936,
    name: "Act Your Age, Eve Brown",
    author: "Talia Hibber",
    votes: 22992,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598543092l/53914936.jpg",
    url: "https://www.goodreads.com/book/show/53914936-act-your-age-eve-brown?from_choice=true",
  },
  {
    book_id: 56554626,
    name: "The Ex Hex",
    author: "Erin Sterlin",
    votes: 22140,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619305366l/56554626.jpg",
    url: "https://www.goodreads.com/book/show/56554626-the-ex-hex?from_choice=true",
  },
  {
    book_id: 54659771,
    name: "Neon Gods",
    author: "Katee Rober",
    votes: 22046,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610505010l/54659771.jpg",
    url: "https://www.goodreads.com/book/show/54659771-neon-gods?from_choice=true",
  },
  {
    book_id: 58235157,
    name: "Seven Days in June",
    author: "Tia William",
    votes: 20052,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1622563621l/58235157._SY475_.jpg",
    url: "https://www.goodreads.com/book/show/58235157-seven-days-in-june?from_choice=true",
  },
  {
    book_id: 55659629,
    name: "It Happened One Summer",
    author: "Tessa Baile",
    votes: 19674,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1604991895l/55659629.jpg",
    url: "https://www.goodreads.com/book/show/55659629-it-happened-one-summer?from_choice=true",
  },
  {
    book_id: 55692620,
    name: "The Soulmate Equation",
    author: "Christina Laure",
    votes: 19337,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1607349080l/55692620.jpg",
    url: "https://www.goodreads.com/book/show/55692620-the-soulmate-equation?from_choice=true",
  },
  {
    book_id: 50052386,
    name: "The Heart Principle",
    author: "Helen Hoan",
    votes: 6919,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1628154285l/50052386._SY475_.jpg",
    url: "https://www.goodreads.com/book/show/50052386-the-heart-principle?from_choice=true",
  },
  {
    book_id: 56293873,
    name: "The Road Trip",
    author: "Beth O'Lear",
    votes: 6303,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1612889142l/56293873.jpg",
    url: "https://www.goodreads.com/book/show/56293873-the-road-trip?from_choice=true",
  },
  {
    book_id: 56898248,
    name: "The Charm Offensive",
    author: "Alison Cochru",
    votes: 4689,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1628703464l/56898248.jpg",
    url: "https://www.goodreads.com/book/show/56898248-the-charm-offensive?from_choice=true",
  },
  {
    book_id: 54896882,
    name: "Life's Too Short",
    author: "Abby Jimene",
    votes: 4231,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1617718207l/54896882.jpg",
    url: "https://www.goodreads.com/book/show/54896882-life-s-too-short?from_choice=true",
  },
  {
    book_id: 45553600,
    name: "Second First Impressions",
    author: "Sally  Thorn",
    votes: 3166,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1617153142l/45553600._SY475_.jpg",
    url: "https://www.goodreads.com/book/show/45553600-second-first-impressions?from_choice=true",
  },
  {
    book_id: 53382168,
    name: "The Ex Talk",
    author: "Rachel Lynn Solomo",
    votes: 2954,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1590351351l/53382168.jpg",
    url: "https://www.goodreads.com/book/show/53382168-the-ex-talk?from_choice=true",
  },
  {
    book_id: 55904454,
    name: "While We Were Dating",
    author: "Jasmine Guillor",
    votes: 2682,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1612384542l/55904454._SY475_.jpg",
    url: "https://www.goodreads.com/book/show/55904454-while-we-were-dating?from_choice=true",
  },
  {
    book_id: 54326395,
    name: "The Dating Plan",
    author: "Sara Desa",
    votes: 2202,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1595387142l/54326395.jpg",
    url: "https://www.goodreads.com/book/show/54326395-the-dating-plan?from_choice=true",
  },
  {
    book_id: 54304013,
    name: "Shipped",
    author: "Angie Hockma",
    votes: 2095,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1609080728l/54304013.jpg",
    url: "https://www.goodreads.com/book/show/54304013-shipped?from_choice=true",
  },
  {
    book_id: 52057698,
    name: "How to Fail at Flirting",
    author: "Denise  William",
    votes: 2080,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1637199152l/52057698._SY475_.jpg",
    url: "https://www.goodreads.com/book/show/52057698-how-to-fail-at-flirting?from_choice=true",
  },
];

const container = document.getElementById("root");

data.map((book) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const cover = document.createElement("img");
  cover.setAttribute("src", book.cover);
  cover.classList.add("cover");
  card.appendChild(cover);

  const name = document.createElement("div");
  name.classList.add("title");
  name.innerText = book.name;
  card.appendChild(name);
  // all.push(name);

  const author = document.createElement("div");
  author.classList.add("author");
  author.innerText = `by ${book.author}`;
  card.appendChild(author);

  const urls = document.createElement("a");
  urls.setAttribute("href", book.url);
  urls.classList.add("link");
  urls.innerText = "View More";
  card.appendChild(urls);

  container.appendChild(card);
});

const search = document.getElementById("search");
search.addEventListener("input", handlechange);
let inputs = document.getElementById("query");

function handlechange() {
  const input = search.value.toLowerCase();
  const items = document.querySelectorAll(".title");

  items.forEach((item) => {
    let text = item.textContent;
    if (text.toLowerCase().includes(input.toLowerCase())) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
    console.log(item);
    inputs.appendChild(item);
    item.classList.add("links");
    inputs.classList.add("query");
  });
}
