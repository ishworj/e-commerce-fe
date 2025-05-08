export const filterFunction = ({ category, searchQuery, others }, products) => {
  let filtered = [...products];

  // Filter by category
  if (category !== "all") {
    filtered = filtered.filter((item) => item.category === category);
  }

  // Filter by search query
  if (searchQuery.trim()) {
    filtered = filtered.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Sorting
  switch (others) {
    case "newest":
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      break;
    case "toHigh":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "toLow":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "toZ":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "toA":
      filtered.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }

  return filtered;
};
