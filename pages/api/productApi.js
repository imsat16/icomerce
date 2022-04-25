export async function getProduct () {
  // Call an external API endpoint to get posts
  const res = await fetch ('https://fakestoreapi.com/products');
  const data = await res.json ();
  return data;
}
