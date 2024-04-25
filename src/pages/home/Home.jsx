import { Spinner } from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UseWishlistHook from "../../hooks/UseWishlistHook";

function Home() {
  const { data, isLoading, refetch } = UseWishlistHook();

  const handleCreateWish = (event) => {
    event.preventDefault();
    const creator = event.target.creator.value;
    const wish = event.target.wish.value;
    const newWishlist = { creator, wish };
    fetch(`https://simple-wishlist-server.vercel.app/wishlists`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(newWishlist),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          event.target.reset();
          Swal.fire({
            title: "Wish Created!",
            icon: "success",
          });
          refetch();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteWish = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://simple-wishlist-server.vercel.app/wishlists/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "This Wish has been Deleted.",
                icon: "success",
              });
              refetch();
            }
          });
      }
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner className="h-16 w-16 text-gray-900/50" />
      </div>
    );
  }

  return (
    <div className="template-container py-6">
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div>
        <p>Total {data ? data.length : 0} Wishes</p>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.length > 0
            ? data.map((wish) => (
                <div
                  key={wish._id}
                  className="p-2 rounded border border-dotted border-gray-500 text-center"
                >
                  <p className="text-lg italic capitalize">`{wish.wish}`</p>
                  <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                    <Link
                      to={`/another/${wish._id}`}
                      className="px-2 py-1 bg-gray-800 text-white rounded"
                    >
                      Who Made This?
                    </Link>
                    <Link
                      to={`/edit/${wish._id}`}
                      className="px-2 py-1 bg-green-800 text-white rounded"
                    >
                      Edit This Wish
                    </Link>
                    <button
                      onClick={() => handleDeleteWish(wish._id)}
                      className="px-2 py-1 bg-red-800 text-white rounded"
                    >
                      Delete This Wish
                    </button>
                  </div>
                </div>
              ))
            : "Create A Wish!"}
        </div>
      </div>

      <div className="mt-5">
        <h2 className="mb-2">Create Your Wish</h2>
        <form onSubmit={handleCreateWish}>
          <div className="mb-4">
            <input
              required
              type="text"
              name="creator"
              placeholder="Write Your Name"
              className="p-2 rounded border border-gray-300 w-full"
            />
          </div>
          <div className="mb-4">
            <textarea
              required
              name="wish"
              placeholder="Write Your Wish"
              className="p-2 rounded border border-gray-300 w-full resize-none"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white px-5 py-2 rounded-md text-xl"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
