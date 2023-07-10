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
    image: "project_1.webp",
    alt: "project image description",
    title: "Minimal Bedroom",
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
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
      "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
    ],
  },
  {
    id: 2,
    image: "project_2.webp",
    alt: "project image description",
    title: "Minimal Bedroom",
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
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
      "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
    ],
  },
  {
    id: 3,
    image: "project_3.webp",
    alt: "project image description",
    title: "Classic Minimal Bedroom",
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
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
      "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
    ],
  },
  {
    id: 4,
    image: "project_4.webp",
    alt: "project image description",
    title: "Modern Bedroom",
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
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
      "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
    ],
  },
  {
    id: 5,
    image: "project_5.webp",
    alt: "project image description",
    title: "Minimal Bedroom table",
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
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
      "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
    ],
  },
  {
    id: 6,
    image: "project_6.webp",
    alt: "project image description",
    title: "System Table",
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
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
      "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
    ],
  },
  {
    id: 7,
    image: "project_7.webp",
    alt: "project image description",
    title: "Modern Medroom",
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
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
      "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
    ],
  },
  {
    id: 8,
    image: "project_8.webp",
    alt: "project image description",
    title: "Modern Bedroom",
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
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
      "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
    ],
  },
  {
    id: 9,
    image: "project_9.webp",
    alt: "project image description",
    title: "Modern Bedroom",
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
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
      "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
    ],
  },
  {
    id: 10,
    image: "project_10.webp",
    alt: "project image description",
    title: "Modern Bedroom",
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
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
      "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
    ],
  },
  {
    id: 11,
    image: "project_11.webp",
    alt: "project image description",
    title: "Modern Bedroom",
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
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
      "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
    ],
  },
  {
    id: 12,
    image: "project_12.webp",
    alt: "project image description",
    title: "Modern Bedroom",
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
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
      "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
    ],
  },
];
