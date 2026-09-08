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

export { getProducts };
