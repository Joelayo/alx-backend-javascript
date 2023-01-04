const cleanSet = (set, startString) => {
  const values = Array.from(set).filter((val) => val.startsWith(startString));
  return values.map((val) => val.slice(startString.length)).join('-');
};

export default cleanSet;
