import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

export default function Another() {
  const wish = useLoaderData();

  return (
    <div className="template-container py-6">
      <Helmet>
        <title>{wish ? wish.creator : "Details"}</title>
      </Helmet>
      <h2 className="text-center mb-6">
        {wish ? wish.creator : "No Data Found"}
      </h2>
      <div className="text-center">
        <Link to="/" className="px-5 py-2 bg-black text-white rounded">
          Back To Home
        </Link>
      </div>
    </div>
  );
}
