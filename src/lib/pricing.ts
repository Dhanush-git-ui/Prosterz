export const parsePrice = (price: string | number) => {
  const numeric = String(price).replace(/[^\d.]/g, "");
  return Number.parseFloat(numeric || "0");
};

export const formatPrice = (price: string | number) => `INR ${parsePrice(price).toFixed(0)}`;
