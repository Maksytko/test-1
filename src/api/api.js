const data = [
  {
    title: "a hard interview question",
    tags: ["sql", "probability", "modelling"],
    companies: ["facebook", "linkedin", "netflix"],
    positions: ["software engineer", "business Analyst", "data scientist"],
  },
  {
    title: "easy question to solve",
    tags: ["sql", "probability", "statistics"],
    companies: ["facebook", "linkedin", "amazon", "google"],
    positions: [
      "software engineer",
      "marketing analyst",
      "data scientist",
      "ml engineer",
    ],
  },
];

function fetchData() {
  return JSON.stringify(data);
}

export default fetchData;
