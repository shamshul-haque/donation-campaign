const getStoredData = () => {
  const storedData = localStorage.getItem("donation-category");
  if (storedData) {
    return JSON.parse(storedData);
  } else {
    return [];
  }
};

const saveData = (id) => {
  const storedData = getStoredData();
  const exist = storedData.find((jobId) => jobId === id);
  if (!exist) {
    storedData.push(id);
    localStorage.setItem("donation-category", JSON.stringify(storedData));
  }
};

export { getStoredData, saveData };
