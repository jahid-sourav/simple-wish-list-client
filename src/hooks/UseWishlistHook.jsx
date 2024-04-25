import { useQuery } from "@tanstack/react-query";

function UseWishlistHook() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["wishlists"],
    queryFn: async () => {
      const response = await fetch(
        `https://simple-wishlist-server.vercel.app/wishlists`
      );
      const data = await response.json();
      return data;
    },
  });
  return { data, isLoading, refetch };
}

export default UseWishlistHook;
