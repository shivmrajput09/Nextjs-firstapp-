import axios from "axios";

async function getProducts() {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products ?? [];
  } catch (error) {
    console.error("Unable to load products:", error.message);
    return [];
  }
}

async function getProductById(id) {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Unable to load product:", error.message);
    return null;
  }
}

export { getProducts, getProductById };
