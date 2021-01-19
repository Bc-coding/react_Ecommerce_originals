export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
  return newNumber;
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item.fields[type]);
  if (type === "category") {
    unique = unique.map((c) => c.toLowerCase());
  }

  if (type === "company") {
    unique = unique.map((com) => com.toLowerCase());
  }

  if (type === "colorCodes") {
    unique = unique.flat();
  }

  return ["all", ...new Set(unique)];
};
