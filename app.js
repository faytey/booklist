const data = [
  {
    book_id: 1,
    info: "Two best friends. Ten summer trips. One last chance to fall in love.",
    name: "People We Meet on Vacation",
    author: "Emily Henr",
    description: "88755",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618913179l/54985743.jpg",
    url: "https://www.goodreads.com/book/show/54985743-people-we-meet-on-vacation?from_choice=true",
  },
  {
    book_id: 2,
    info: "That man is none other than Adam Carlsen",
    name: "The Love Hypothesis",
    author: "Ali Hazelwoo",
    description: "88192",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1611937942l/56732449.jpg",
    url: "https://www.goodreads.com/book/show/56732449-the-love-hypothesis?from_choice=true",
  },
  {
    book_id: 3,
    info: "Anew romantic comedy that will stop readers in their tracks...",
    name: "One Last Stop",
    author: "Casey McQuisto",
    description: "54845",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598019346l/54860443.jpg",
    url: "https://www.goodreads.com/book/show/54860443-one-last-stop?from_choice=true",
  },
  {
    book_id: 4,
    info: "Spanish Love Deception #1",
    name: "The Spanish Love Deception",
    author: "Elena  Arma",
    description: "40504",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1614122544l/57190892._SY475_.jpg",
    url: "https://www.goodreads.com/book/show/57190892-the-spanish-love-deception?from_choice=true",
  },
  {
    book_id: 5,
    info: "In Act Your Age, Eve Brown the flightiest Brown sister crashes into the life of an uptight B&B owner and has him falling hard—literally.",
    name: "Act Your Age, Eve Brown",
    author: "Talia Hibber",
    description: "22992",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598543092l/53914936.jpg",
    url: "https://www.goodreads.com/book/show/53914936-act-your-age-eve-brown?from_choice=true",
  },
  {
    book_id: 6,
    info: "Page-Is-Gone, son of Aragorn, grandson of Arathorn",
    name: "The Ex Hex",
    author: "Erin Sterlin",
    description: "22140",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619305366l/56554626.jpg",
    url: "https://www.goodreads.com/book/show/56554626-the-ex-hex?from_choice=true",
  },
  {
    book_id: 7,
    info: "He was supposed to be a myth. But from the moment I crossed the River Styx and fell under his dark spell... he was, quite simply, mine.",
    name: "Neon Gods",
    author: "Katee Rober",
    description: "22046",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610505010l/54659771.jpg",
    url: "https://www.goodreads.com/book/show/54659771-neon-gods?from_choice=true",
  },
  {
    book_id: 8,
    info: "Seven days to fall in love, fifteen years to forget and seven days to get it all back again... From the author of The Perfect Find, this is a witty, romantic, and sexy-as-hell new novel of two writers and their second chance at love.",
    name: "Seven Days in June",
    author: "Tia William",
    description: "20052",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1622563621l/58235157._SY475_.jpg",
    url: "https://www.goodreads.com/book/show/58235157-seven-days-in-june?from_choice=true",
  },
  {
    book_id: 9,
    info: "Bellinger Sisters #1",
    name: "It Happened One Summer",
    author: "Tessa Baile",
    description: "19674",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1604991895l/55659629.jpg",
    url: "https://www.goodreads.com/book/show/55659629-it-happened-one-summer?from_choice=true",
  },
  {
    book_id: 10,
    info: "At least she thought she did, until her test shows an unheard-of 98 percent compatibility with another subject in the database: GeneticAlly’s founder, Dr. River Peña.",
    name: "The Soulmate Equation",
    author: "Christina Laure",
    description: "19337",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1607349080l/55692620.jpg",
    url: "https://www.goodreads.com/book/show/55692620-the-soulmate-equation?from_choice=true",
  },
  {
    book_id: 11,
    info: "A woman struggling with burnout learns to embrace the unexpected—and the man she enlists to help her—in this new New York Times bestselling romance by Helen Hoang.",
    name: "The Heart Principle",
    author: "Helen Hoan",
    description: "6919",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1628154285l/50052386._SY475_.jpg",
    url: "https://www.goodreads.com/book/show/50052386-the-heart-principle?from_choice=true",
  },
  {
    book_id: 12,
    info: "Two exes reach a new level of awkward when forced to take a road trip together in this endearing and humorous novel by the author of the international bestseller The Flatshare.",
    name: "The Road Trip",
    author: "Beth O'Lear",
    description: "6303",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1612889142l/56293873.jpg",
    url: "https://www.goodreads.com/book/show/56293873-the-road-trip?from_choice=true",
  },
  {
    book_id: 13,
    info: "The Charm Offensive #1",
    name: "The Charm Offensive",
    author: "Alison Cochru",
    description: "4689",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1628703464l/56898248.jpg",
    url: "https://www.goodreads.com/book/show/56898248-the-charm-offensive?from_choice=true",
  },
  {
    book_id: 14,
    info: "A brilliant and touching romantic comedy from the USA Today bestselling author of The Friend Zone and The Happy Ever After Playlist.",
    name: "Life's Too Short",
    author: "Abby Jimene",
    description: "4231,",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1617718207l/54896882.jpg",
    url: "https://www.goodreads.com/book/show/54896882-life-s-too-short?from_choice=true",
  },
  {
    book_id: 15,
    info: "Distraction (n): an extreme agitation of the mind or emotions.",
    name: "Second First Impressions",
    author: "Sally  Thorn",
    description: "3166,",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1617153142l/45553600._SY475_.jpg",
    url: "https://www.goodreads.com/book/show/45553600-second-first-impressions?from_choice=true",
  },
  {
    book_id: 16,
    info: "When the struggling station needs a new concept, Shay proposes a show that her boss green-lights with excitement. ",
    name: "The Ex Talk",
    author: "Rachel Lynn Solomo",
    description: "2954,",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1590351351l/53382168.jpg",
    url: "https://www.goodreads.com/book/show/53382168-the-ex-talk?from_choice=true",
  },
  {
    book_id: 17,
    info: "Two people realize that it's no longer an act when they veer off-script in this sizzling romantic comedy by New York Times bestselling author Jasmine Guillory.",
    name: "While We Were Dating",
    author: "Jasmine Guillor",
    description: "2682,",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1612384542l/55904454._SY475_.jpg",
    url: "https://www.goodreads.com/book/show/55904454-while-we-were-dating?from_choice=true",
  },
  {
    book_id: 18,
    info: "Marriage Game #2",
    name: "The Dating Plan",
    author: "Sara Desa",
    description: "2202,",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1595387142l/54326395.jpg",
    url: "https://www.goodreads.com/book/show/54326395-the-dating-plan?from_choice=true",
  },
  {
    book_id: 19,
    info: "The Unhoneymooners meets The Hating Game in this witty, clever, and swoonworthy novel following a workaholic marketing manager who is forced to go on a cruise with her arch-nemesis when they’re up for the same promotion.",
    name: "Shipped",
    author: "Angie Hockma",
    description: "2095,",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1609080728l/54304013.jpg",
    url: "https://www.goodreads.com/book/show/54304013-shipped?from_choice=true",
  },
  {
    book_id: 20,
    info: "One daring to-do list and a crash course in flirtation turn a Type A overachiever’s world upside down.",
    name: "How to Fail at Flirting",
    author: "Denise  William",
    description: "2080,",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1637199152l/52057698._SY475_.jpg",
    url: "https://www.goodreads.com/book/show/52057698-how-to-fail-at-flirting?from_choice=true",
  },
];

const container = document.getElementById("root");
const authors = [
  "Emily Henr",
  "Ali Hazelwoo",
  "Casey McQuisto",
  "Elena  Arma",
  "Talia Hibber",
  "Erin Sterlin",
  "Katee Rober",
  "Tia William",
  "Tessa Baile",
  "Christina Laure",
  "Helen Hoan",
  "Beth O'Lear",
  "Alison Cochru",
  "Abby Jimene",
  "Sally  Thorn",
  "Rachel Lynn Solomo",
  "Jasmine Guillor",
  "Sara Desa",
  "Angie Hockma",
  "Denise  William",
];
const urlset = [
  "https://www.goodreads.com/book/show/54985743-people-we-meet-on-vacation?from_choice=true",
  "https://www.goodreads.com/book/show/56732449-the-love-hypothesis?from_choice=true",
  "https://www.goodreads.com/book/show/54860443-one-last-stop?from_choice=true",
  "https://www.goodreads.com/book/show/57190892-the-spanish-love-deception?from_choice=true",
  "https://www.goodreads.com/book/show/53914936-act-your-age-eve-brown?from_choice=true",
  "https://www.goodreads.com/book/show/56554626-the-ex-hex?from_choice=true",
  "https://www.goodreads.com/book/show/54659771-neon-gods?from_choice=true",
  "https://www.goodreads.com/book/show/58235157-seven-days-in-june?from_choice=true",
  "https://www.goodreads.com/book/show/55659629-it-happened-one-summer?from_choice=true",
  "https://www.goodreads.com/book/show/55692620-the-soulmate-equation?from_choice=true",
  "https://www.goodreads.com/book/show/50052386-the-heart-principle?from_choice=true",
  "https://www.goodreads.com/book/show/56293873-the-road-trip?from_choice=true",
  "https://www.goodreads.com/book/show/56898248-the-charm-offensive?from_choice=true",
  "https://www.goodreads.com/book/show/54896882-life-s-too-short?from_choice=true",
  "https://www.goodreads.com/book/show/45553600-second-first-impressions?from_choice=true",
  "https://www.goodreads.com/book/show/53382168-the-ex-talk?from_choice=true",
  "https://www.goodreads.com/book/show/55904454-while-we-were-dating?from_choice=true",
  "https://www.goodreads.com/book/show/54326395-the-dating-plan?from_choice=true",
  "https://www.goodreads.com/book/show/54304013-shipped?from_choice=true",
  "https://www.goodreads.com/book/show/52057698-how-to-fail-at-flirting?from_choice=true",
];
const titles = [
  "People We Meet on Vacation",
  "The Love Hypothesis",
  "One Last Stop",
  "The Spanish Love Deception",
  "Act Your Age, Eve Brown",
  "The Ex Hex",
  "Neon Gods",
  "Seven Days in June",
  "It Happened One Summer",
  "The Soulmate Equation",
  "The Heart Principle",
  "The Road Trip",
  "The Charm Offensive",
  "Life's Too Short",
  "Second First Impressions",
  "The Ex Talk",
  "While We Were Dating",
  "The Dating Plan",
  "Shipped",
  "How to Fail at Flirting",
];
const descriptions = [
  "Poppy and Alex. Alex and Poppy. They have nothing in common. She’s a wild child; he wears khakis. She has insatiable wanderlust; he prefers to stay home with a book. And somehow, ever since a fateful car share home from college many years ago, they are the very best of friends. For most of the year they live far apart—she’s in New York City, and he’s in their small hometown—but every summer, for a decade, they have taken one glorious week of vacation together.",
  "As a third-year Ph.D. candidate, Olive Smith doesn't believe in lasting romantic relationships--but her best friend does, and that's what got her into this situation. Convincing Anh that Olive is dating and well on her way to a happily ever after was always going to take more than hand-wavy Jedi mind tricks: Scientists require proof. So, like any self-respecting biologist, Olive panics and kisses the first man she sees.",
  "For cynical twenty-three-year-old August, moving to New York City is supposed to prove her right: that things like magic and cinematic love stories don’t exist, and the only smart way to go through life is alone. She can’t imagine how waiting tables at a 24-hour pancake diner and moving in with too many weird roommates could possibly change that. And there’s certainly no chance of her subway commute being anything more than a daily trudge through boredom and electrical failures.",
  "Catalina Martín desperately needs a date to her sister’s wedding. Especially since her little white lie about her American boyfriend has spiralled out of control. Now everyone she knows—including her ex and his fiancée—will be there and eager to meet him.",
  "Eve Brown is a certified hot mess. No matter how hard she strives to do right, her life always goes horribly wrong—so she’s given up trying. But when her personal brand of chaos ruins an expensive wedding (someone had to liberate those poor doves), her parents draw the line. It's time for Eve to grow up and prove herself—even though she's not entirely sure how…",
  "All that is gold does not glitter,Not all those who wander are lost;The old that is strong does not wither,Deep roots are not reached by the frost.",
  "Society darling Persephone Dimitriou plans to flee the ultra-modern city of Olympus and start over far from the backstabbing politics of the Thirteen Houses. But all that’s ripped away when her mother ambushes her with an engagement to Zeus, the dangerous power behind their glittering city’s dark facade.",
  "When Shane and Eva meet unexpectedly at a literary event, sparks fly, raising not only their past buried traumas, but the eyebrows of New York's Black literati. What no one knows is that twenty years earlier, teenage Eva and Shane spent one crazy, torrid week madly in love. They may be pretending that everything is fine now, but they can't deny their chemistry-or the fact that they've been secretly writing to each other in their books ever since.",
  "Piper Bellinger is fashionable, influential, and her reputation as a wild child means the paparazzi are constantly on her heels. When too much champagne and an out-of-control rooftop party lands Piper in the slammer, her stepfather decides enough is enough. So he cuts her off, and sends Piper and her sister to learn some responsibility running their late father’s dive bar... in Washington.",
  "Single mom Jess Davis is a data and statistics wizard, but no amount of number crunching can convince her to step back into the dating world. After all, her father was never around, her hard-partying mother disappeared when she was six, and her ex decided he wasn’t “father material” before her daughter was even born. Jess holds her loved ones close but working constantly to stay afloat is hard...and lonely.",
  "When violinist Anna Sun accidentally achieves career success with a viral YouTube video, she finds herself incapacitated and burned out from her attempts to replicate that moment. And when her longtime boyfriend announces he wants an open relationship before making a final commitment, a hurt and angry Anna decides that if he wants an open relationship, then she does, too. Translation: She’s going to embark on a string of one-night stands. The more unacceptable the men, the better.",
  "Four years ago, Dylan and Addie fell in love under the Provence sun. Wealthy Oxford student Dylan was staying at his friend Cherry's enormous French villa; wild child Addie was spending her summer as the on-site caretaker. Two years ago, their relationship officially ended. They haven't spoken since.",
  "Dev Deshpande has always believed in fairy tales. So it’s no wonder then that he’s spent his career crafting them on the long-running reality dating show Ever After. As the most successful producer in the franchise’s history, Dev always scripts the perfect love story for his contestants, even as his own love life crashes and burns. But then the show casts disgraced tech wunderkind Charlie Winshaw as its star.",
  "When Vanessa Price quit her job to pursue her dream of traveling the globe, she wasn't expecting to gain millions of YouTube followers who shared her joy of seizing every moment. For her, living each day to its fullest isn't just a motto. Her mother and sister never saw the age of 30, and Vanessa doesn't want to take anything for granted.",
  "Ruthie Midona has worked the front desk at the Providence Luxury Retirement Villa for six years, dedicating her entire adult life to caring for the Villa’s residents, maintaining the property (with an assist from DIY YouTube tutorials), and guarding the endangered tortoises that live in the Villa’s gardens. Somewhere along the way, she’s forgotten that she’s young and beautiful, and that there’s a world outside of work—until she meets the son of the property developer who just acquired the retirement center.",
  "Shay Goldstein has been a producer at her Seattle public radio station for nearly a decade, and she can't imagine working anywhere else. But lately it's been a constant clash between her and her newest colleague, Dominic Yun, who's fresh off a journalism master's program and convinced he knows everything about public radio.",
  "Ben Stephens has never bothered with serious relationships. He has plenty of casual dates to keep him busy, family drama he's trying to ignore and his advertising job to focus on. When Ben lands a huge ad campaign featuring movie star Anna Gardiner, however, it's hard to keep it purely professional. Anna is not just gorgeous and sexy, she's also down to earth and considerate, and he can't help flirting a little...",
  "Daisy Patel is a software engineer who understands lists and logic better than bosses and boyfriends. With her life all planned out, and no interest in love, the one thing she can't give her family is the marriage they expect. Left with few options, she asks her childhood crush to be her decoy fiance.",
  "Between taking night classes for her MBA and her demanding day job at a cruise line, marketing manager Henley Evans barely has time for herself, let alone family, friends, or dating. But when she’s shortlisted for the promotion of her dreams, all her sacrifices finally seem worth it.The only problem? Graeme Crawford-Collins, the remote social media manager and the bane of her existence, is also up for the position. Although they’ve never met in person, their epic email battles are the stuff of office legend.",
  "When her flailing department lands on the university's chopping block, Professor Naya Turner’s friends convince her to shed her frumpy cardigan for an evening on the town. For one night her focus will stray from her demanding job and she’ll tackle a new kind of to-do list. When she meets a charming stranger in town on business, he presents the perfect opportunity to check off the items on her list. Let the guy buy her a drink. Check. Try something new. Check. A no-strings-attached hookup. Check…almost.,",
];
const covers = [
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618913179l/54985743.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1611937942l/56732449.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598019346l/54860443.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1614122544l/57190892._SY475_.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598543092l/53914936.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619305366l/56554626.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610505010l/54659771.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1622563621l/58235157._SY475_.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1604991895l/55659629.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1607349080l/55692620.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1628154285l/50052386._SY475_.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1612889142l/56293873.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1628703464l/56898248.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1617718207l/54896882.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1617153142l/45553600._SY475_.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1590351351l/53382168.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1612384542l/55904454._SY475_.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1595387142l/54326395.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1609080728l/54304013.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1637199152l/52057698._SY475_.jpg",
];

const search = document.getElementById("search");
let inputs = document.getElementById("query");

const loaded = () => {
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

    const author = document.createElement("div");
    author.classList.add("author");
    author.innerText = ` ~ by ${book.author}`;
    card.appendChild(author);

    const info = document.createElement("p");
    info.innerText = book.info;
    info.classList.add("author");
    card.appendChild(info);

    const urls = document.createElement("a");
    urls.setAttribute("href", `./templates/${book.book_id}.html`);
    urls.classList.add("link");
    urls.innerText = "View More";
    card.appendChild(urls);

    container.appendChild(card);
    search.addEventListener("input", handlechange);
  });
};

function handlechange() {
  const input = search.value.toLowerCase();
  const items = document.querySelectorAll(".title");

  items.forEach((item) => {
    let text = item.textContent;
    if (!text) {
      item.style.display = "none";
    } else if (text.toLowerCase().includes(input.toLowerCase())) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
    inputs.appendChild(item);
    item.classList.add("links");
    inputs.classList.add("query");
    // item.addEventListener("click", function () {
    //   const target = document.createElement("a");
    //   a.href = `./templates/${book.book_id}.html`;
    // });
  });
}

const details = (x) => {
  const title = document.getElementById("title");
  title.innerHTML = titles[x];

  const page = document.getElementById("bookInfo");
  page.classList.add("contain");

  const group = document.createElement("div");
  group.classList.add("group");

  const img = document.createElement("img");
  img.src = covers[x];
  img.classList.add("covers");
  group.appendChild(img);

  const info = document.createElement("span");
  info.innerText = descriptions[x];
  group.appendChild(info);

  page.appendChild(group);

  const span = document.createElement("span");
  span.innerText = `Author: ${authors[x]}`;
  span.classList.add("span");
  page.appendChild(span);

  const link = document.createElement("a");
  link.setAttribute("href", urlset[x]);
  link.classList.add("link");
  link.innerText = `VISIT BOOK LINK`;
  page.appendChild(link);
};

const firstPage = async () => {
  details(0);
};
const secondPage = async () => {
  details(1);
};
const thirdPage = async () => {
  details(2);
};
const fourthPage = async () => {
  details(3);
};
const fifthPage = async () => {
  details(4);
};
const sixthPage = async () => {
  details(5);
};
const seventhPage = async () => {
  details(6);
};
const eightPage = async () => {
  details(7);
};
const ninthPage = async () => {
  details(8);
};
const tenthPage = async () => {
  details(9);
};
const eleventhPage = async () => {
  details(10);
};
const twelfthPage = async () => {
  details(11);
};
const thirteenthPage = async () => {
  details(12);
};
const fourteenthPage = async () => {
  details(13);
};
const fifteenthPage = async () => {
  details(14);
};
const sixteenthPage = async () => {
  details(15);
};
const seventeenthPage = async () => {
  details(16);
};
const eighteenthPage = async () => {
  details(17);
};
const nineteenthPage = async () => {
  details(18);
};
const twentiethPage = async () => {
  details(19);
};
