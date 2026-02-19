export const getWishlist = (req, res) => {
  res.status(200).send("5 wishlist items are there");
};
export const postWishlist = (req, res) => {
  res.status(201).json({ message: "Wishlist created successfully" });
};
export const editWishlist = (req, res) => {
  res.status(200).json({ message: "Wishlist edited successfully" });
};
export const deleteWishlist = (req, res) => {
  res.status(200).json({ message: "Wishlist deleted successfully" });
};
