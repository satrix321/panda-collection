export const API_URL = 'http://localhost:3000';
export const getProductsData = async () => {
    const response = await fetch(`${API_URL}/api/products`);
    return await response.json();
}