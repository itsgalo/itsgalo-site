import fsPromises from 'fs/promises';
import path from 'path'

export async function getProducts() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), 'json/data.json');
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData);

  return objectData;
}

export async function getProductsByCategory(category) {
  const filePath = path.join(process.cwd(), 'json/data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  const products = objectData.filter((product) => product.category === category);
  return products;
}

export async function getPosts() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), 'json/posts.json');
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData);

  return objectData;
}

export async function getContent(content) {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), `json/${content}.json`);
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData);

  return objectData;
}