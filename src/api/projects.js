export function getAllProjects() {
  return projects;
}

export function getProjects(amount, offset = 0) {
  return projects.slice(offset, offset + amount);
}

export function getCountProjects() {
  return projects.length;
}

const projects = [
  {
    id: 1,
    image: "/img/project1_big.webp",
    alt: "project image description",
    title: "Modern Kitchen",
    tags: [
      {
        title: "Decor",
        url: "#",
      },
      {
        title: "Architecture",
        url: "#",
      },
    ],
    url: "#",
  },
  {
    id: 2,
    image: "/img/project2_big.webp",
    alt: "project image description",
    title: "Modern Kitchen",
    tags: [
      {
        title: "Decor",
        url: "#",
      },
      {
        title: "Architecture",
        url: "#",
      },
    ],
    url: "#",
  },
  {
    id: 3,
    image: "/img/project3_big.webp",
    alt: "project image description",
    title: "Modern Kitchen",
    tags: [
      {
        title: "Decor",
        url: "#",
      },
      {
        title: "Architecture",
        url: "#",
      },
    ],
    url: "#",
  },
  {
    id: 4,
    image: "/img/project4_big.webp",
    alt: "project image description",
    title: "Modern Kitchen",
    tags: [
      {
        title: "Decor",
        url: "#",
      },
      {
        title: "Architecture",
        url: "#",
      },
    ],
    url: "#",
  },
];
