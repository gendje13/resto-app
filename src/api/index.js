import { categories, products } from './mockData';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getCategories = async () => {
  await delay(500); // Simulate network delay
  return categories;
};

export const getProducts = async (categoryId = null) => {
  await delay(500); // Simulate network delay
  if (categoryId) {
    return products.filter(p => p.categoryId === categoryId);
  }
  return products;
};

export const submitOrder = async (orderData) => {
  await delay(1000); // Simulate network delay
  console.log('Order submitted:', orderData);
  return { success: true, orderId: `ORD-${Date.now()}` };
};
