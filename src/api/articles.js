export function getAllArticles() {
  return articles;
}

export function getArticle(articleId) {
  return articles.find((article) => article.id === articleId);
}

export function getLastArticle() {
  return articles[articles.length - 1];
}

export function getArticles(amount, offset = 0) {
  return articles.slice(offset, offset + amount);
}

export function getCountArticles() {
  return articles.length;
}

export function getArticlesWithTag(tagName) {
  return articles.filter((article) => article.tags.includes(tagName));
}

const articles = [
  {
    id: 1,
    title: "Let’s Get Solution For Building Construction Work",
    imgSrc: "article1.webp",
    imgAlt: "image description",
    imgDescription: "Kitchan Design",
    url: "#",
    date: "2022-12-26",
    categories: ["Interior", "Home", "Decore"],
    tags: ["Kitchen", "Kitchen Planning", "Architecture"],
    content: [
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
      },
      {
        type: "Paragraph",
        content:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      },
      {
        type: "Quotation",
        content:
          "The details are not the details. \n" + "They make the design.",
      },
      {
        type: "Subtitle",
        content: "Design sprints are great",
      },
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        type: "Image",
        content: { src: "article6.webp", alt: "", imageTitle: "" },
      },
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
    ],
  },
  {
    id: 2,
    title: "Low Cost Latest Invented Interior Designing Ideas.",
    imgSrc: "article2.webp",
    imgAlt: "image description",
    imgDescription: "Living Design",
    url: "#",
    date: "2022-12-22",
    categories: ["Interior", "Home", "Decore"],
    tags: ["Kitchen", "Kitchen Planning", "Architecture"],
    content: [
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
      },
    ],
  },
  {
    id: 3,
    title: "Best For Any Office & Business Interior Solution",
    imgSrc: "article3.webp",
    imgAlt: "image description",
    imgDescription: "Interior Design",
    url: "#",
    date: "2022-12-25",
    categories: ["Interior", "Home", "Decore"],
    tags: ["Kitchen", "Kitchen Planning", "Architecture"],
    content: [
      {
        type: "Paragraph",
        content:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      },
      {
        type: "Quotation",
        content:
          "The details are not the details. \n" + "They make the design.",
      },
      {
        type: "Image",
        content: { src: "article6.webp", alt: "", imageTitle: "" },
      },
    ],
  },
  {
    id: 4,
    title: "Let’s Get Solution For Building Construction Work",
    imgSrc: "article4.webp",
    imgAlt: "image description",
    imgDescription: "Kitchan Design",
    url: "#",
    date: "2022-12-26",
    categories: ["Interior", "Home", "Decore"],
    tags: ["Kitchen", "Kitchen Planning", "Architecture"],
    content: [
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
      },
      {
        type: "Paragraph",
        content:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      },
    ],
  },
  {
    id: 5,
    title: "Let’s Get Solution For Building Construction Work",
    imgSrc: "article5.webp",
    imgAlt: "image description",
    imgDescription: "Kitchan Design",
    url: "#",
    date: "2022-12-26",
    categories: ["Interior", "Home", "Decore"],
    tags: ["Architecture", "Building", "Bedroom"],
    content: [
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
      },
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
    ],
  },
  {
    id: 6,
    title: "Let’s Get Solution For Building Construction Work",
    imgSrc: "article6.webp",
    imgAlt: "image description",
    imgDescription: "Kitchan Design",
    url: "#",
    date: "2022-12-26",
    categories: ["Interior", "Home", "Decore"],
    tags: ["Kitchen", "Kitchen Planning", "Child"],
    content: [
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
      },
      {
        type: "Paragraph",
        content:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      },
      {
        type: "Quotation",
        content:
          "The details are not the details. \n" + "They make the design.",
      },
      {
        type: "Subtitle",
        content: "Design sprints are great",
      },
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        type: "NumberList",
        content: [
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        ],
      },
      {
        type: "Image",
        content: { src: "article6.webp", alt: "", imageTitle: "" },
      },
    ],
  },
  {
    id: 7,
    title: "Let’s Get Solution For Building Construction Work",
    imgSrc: "article7.webp",
    imgAlt: "image description",
    imgDescription: "Kitchan Design",
    url: "#",
    date: "2022-12-26",
    categories: ["Interior", "Home", "Decore"],
    tags: ["Kitchen", "Kitchen Planning", "Bedroom"],
    content: [
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
      },
      {
        type: "Paragraph",
        content:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      },
      {
        type: "Quotation",
        content:
          "The details are not the details. \n" + "They make the design.",
      },
      {
        type: "Subtitle",
        content: "Design sprints are great",
      },
      {
        type: "Image",
        content: { src: "article6.webp", alt: "", imageTitle: "" },
      },
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
    ],
  },
  {
    id: 8,
    title: "Low Cost Latest Invented Interior Designing Ideas.",
    imgSrc: "article1.webp",
    imgAlt: "image description",
    imgDescription: "Living Design",
    url: "#",
    date: "2022-12-22",
    categories: ["Interior", "Home", "Decore"],
    tags: ["Bedroom", "Architecture"],
    content: [
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
      },
      {
        type: "Paragraph",
        content:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      },
      {
        type: "Quotation",
        content:
          "The details are not the details. \n" + "They make the design.",
      },
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        type: "NumberList",
        content: [
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        ],
      },
      {
        type: "Image",
        content: { src: "article6.webp", alt: "", imageTitle: "" },
      },
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
    ],
  },
  {
    id: 9,
    title: "Best For Any Office & Business Interior Solution",
    imgSrc: "article2.webp",
    imgAlt: "image description",
    imgDescription: "Interior Design",
    url: "#",
    date: "2022-12-25",
    categories: ["Interior", "Home", "Decore"],
    tags: ["Bedroom"],
    content: [
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
      },
      {
        type: "Paragraph",
        content:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      },
      {
        type: "Quotation",
        content:
          "The details are not the details. \n" + "They make the design.",
      },
      {
        type: "Subtitle",
        content: "Design sprints are great",
      },
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        type: "Image",
        content: { src: "article6.webp", alt: "", imageTitle: "" },
      },
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
    ],
  },
  {
    id: 10,
    title: "Let’s Get Solution For Building Construction Work",
    imgSrc: "article3.webp",
    imgAlt: "image description",
    imgDescription: "Kitchan Design",
    url: "#",
    date: "2022-12-26",
    categories: ["Interior", "Home", "Decore"],
    tags: ["Child"],
    content: [
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
      },
      {
        type: "Paragraph",
        content:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      },
      {
        type: "Quotation",
        content:
          "The details are not the details. \n" + "They make the design.",
      },
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        type: "NumberList",

        content: [
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        ],
      },
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
    ],
  },
  {
    id: 11,
    title: "Let’s Get Solution For Building Construction Work",
    imgSrc: "article4.webp",
    imgAlt: "image description",
    imgDescription: "Kitchan Design",
    url: "#",
    date: "2022-12-26",
    categories: ["Interior", "Home", "Decore"],
    tags: ["Architecture"],
    content: [
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
      },
      {
        type: "Paragraph",
        content:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      },
      {
        type: "NumberList",

        content: [
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        ],
      },
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
    ],
  },
  {
    id: 12,
    title: "Let’s Get Solution For Building Construction Work",
    imgSrc: "article5.webp",
    imgAlt: "image description",
    imgDescription: "Kitchan Design",
    url: "#",
    date: "2022-12-26",
    categories: ["Interior", "Home", "Decore"],
    tags: ["Bedroom"],
    content: [
      {
        type: "Paragraph",
        content:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      },
      {
        type: "Quotation",
        content:
          "The details are not the details. \n" + "They make the design.",
      },
      {
        type: "Subtitle",
        content: "Design sprints are great",
      },
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        type: "Image",
        content: { src: "article6.webp", alt: "", imageTitle: "" },
      },
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
    ],
  },
  {
    id: 13,
    title: "Let’s Get Solution For Building Construction Work",
    imgSrc: "article6.webp",
    imgAlt: "image description",
    imgDescription: "Kitchan Design",
    url: "#",
    date: "2022-12-26",
    categories: ["Interior", "Home", "Decore"],
    tags: ["Kitchen Planning"],
    content: [
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
      },
      {
        type: "Paragraph",
        content:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      },

      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        type: "Image",
        content: { src: "article6.webp", alt: "", imageTitle: "" },
      },
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
    ],
  },
  {
    id: 14,
    title: "Low Cost Latest Invented Interior Designing Ideas.",
    imgSrc: "article7.webp",
    imgAlt: "image description",
    imgDescription: "Living Design",
    url: "#",
    date: "2022-12-22",
    categories: ["Interior", "Home", "Decore"],
    tags: ["Child", "Architecture", "Building"],
    content: [
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
      },
      {
        type: "Paragraph",
        content:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      },
      {
        type: "Quotation",
        content:
          "The details are not the details. \n" + "They make the design.",
      },
      {
        type: "Subtitle",
        content: "Design sprints are great",
      },
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        type: "Image",
        content: { src: "article6.webp", alt: "", imageTitle: "" },
      },
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
    ],
  },
  {
    id: 15,
    title: "Let’s Get Solution For Building Construction Work",
    imgSrc: "article16_big.webp",
    imgAlt: "image description",
    imgDescription: "Kitchan Design",
    url: "#",
    date: "2022-12-26",
    categories: ["Interior", "Home", "Decore"],
    tags: ["Kitchen"],
    content: [
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
      },
      {
        type: "Quotation",
        content:
          "The details are not the details. \n" + "They make the design.",
      },
      {
        type: "Subtitle",
        content: "Design sprints are great",
      },
      {
        type: "NumberList",
        content: [
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          "Contrary to popular belief.There are many variations .",
          "Contrary to popular belief.There are many variations of passages .",
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          "Contrary to popular be.",
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        ],
      },
      {
        type: "Image",
        content: {
          src: "article17_big.webp",
          alt: "",
          imageTitle: "",
        },
      },
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
    ],
  },
  {
    id: 16,
    title: "Let’s Get Solution For Building Construction Work",
    imgSrc: "article17_big.webp",
    imgAlt: "image description",
    imgDescription: "Kitchan Design",
    url: "#",
    date: "2022-12-26",
    categories: ["Interior", "Home", "Decore"],
    tags: ["Kitchen", "Architecture"],
    content: [
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
      },
      {
        type: "Paragraph",
        content:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      },
      {
        type: "Quotation",
        content:
          "The details are not the details. \n" + "They make the design.",
      },
      {
        type: "Subtitle",
        content: "Design sprints are great",
      },
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        type: "NumberList",

        content: [
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        ],
      },
      {
        type: "Image",
        content: { src: "article16_big.webp", alt: "", imageTitle: "" },
      },
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        id: 17,
        title: "Low Cost Latest Invented Interior Designing Ideas",
        imgSrc: "article7-big.webp",
        imgAlt: "image description",
        imgDescription: "Interior Design",
        url: "#",
        date: "2022-12-26",
        categories: ["Interior", "Home", "Decore"],
        tags: ["Architecture"],
        content: [
          {
            type: "Paragraph",
            content:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.",
          },
          {
            type: "Paragraph",
            content:
              "Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
          },
          {
            type: "Paragraph",
            content:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          },
        ],
      },
    ],
  },
  {
    id: 17,
    title: "Low Cost Latest Invented Interior Designing Ideas",
    imgSrc: "article7_big.webp",
    imgAlt: "image description",
    imgDescription: "Interior Design",
    url: "#",
    date: "2022-12-26",
    categories: ["Interior", "Home", "Decore"],
    tags: ["Architecture"],
    content: [
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.",
      },
      {
        type: "Paragraph",
        content:
          "Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
      },
      {
        type: "Paragraph",
        content:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
    ],
  },
];
