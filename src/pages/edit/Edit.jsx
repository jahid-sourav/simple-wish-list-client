import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Edit() {
  const currentWish = useLoaderData();
  const navigate = useNavigate();

  const handleUpdateWish = (event) => {
    event.preventDefault();
    const wish = event.target.wish.value;
    const id = currentWish._id;
    const updatedWish = { wish };
    fetch(`https://simple-wishlist-server.vercel.app/wishlists/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(updatedWish),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Wish Updated!",
            icon: "success",
          }).then(() => {
            navigate("/");
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="py-6">
      <Helmet>
        <title>Edit</title>
      </Helmet>
      <div className="template-container">
        <h2>Edit The Wish</h2>
        <form onSubmit={handleUpdateWish} className="mt-5">
          <div className="mb-4">
            <textarea
              defaultValue={currentWish ? currentWish.wish : "No Data"}
              name="wish"
              placeholder="Edit Wish"
              className="p-2 rounded border border-gray-300 w-full resize-none"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white px-5 py-2 rounded-md text-xl"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Edit;
