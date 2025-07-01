import react from "react";





const WishlistPage = () => {
    const wishlistItems=[

    ]


  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-semibold mb-4">Your Wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map((item) => (
          <WishlistCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
