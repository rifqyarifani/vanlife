import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import Loading from "../../components/Loading";
import { AiOutlineArrowLeft } from "react-icons/ai";

const DetailVans = () => {
  const [vans, setVans] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const typeColor =
    vans.type === "simple"
      ? "bg-[#E17654]"
      : vans.type === "rugged"
      ? "bg-[#115E59]"
      : "bg-[#161616]";

  useEffect(() => {
    const loadVans = async () => {
      setLoading(true);
      const res = await fetch(`/api/vans/${id}`);
      const data = await res.json();
      setVans(data.vans);
      setLoading(false);
    };
    loadVans();
  }, []);

  const typeLocation = `?${location.state?.search}` || "";
  const typeVan = location.state?.type || "all";

  return (
    <>
      <div className="w-4/6 mx-auto flex flex-col gap-8 px-8 py-16 bg-[#FFF7ED]">
        {loading ? (
          <Loading />
        ) : (
          <>
            <Link
              to={`..${typeLocation}`}
              relative="path"
              className="flex items-center gap-2 text-xl"
            >
              <AiOutlineArrowLeft />
              <p className=" underline">{`Back to ${typeVan} vans`}</p>
            </Link>
            <img src={vans.imageUrl} alt={vans.name} className=" rounded-lg" />
            <h3
              className={` w-fit text-center capitalize font-semibold py-2 px-4 text-2xl rounded-lg text-[#FFEAD0] ${typeColor}`}
            >
              {vans.type}
            </h3>
            <h1 className=" text-5xl font-bold">{vans.name}</h1>
            <h3 className=" font-bold text-3xl">
              {`$${vans.price}`}
              <span className=" font-normal">/day</span>
            </h3>
            <p className=" text-2xl">{vans.description}</p>
            <button className=" text-3xl bg-[#FF8C38] text-white rounded-lg p-4">
              Rent this van
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default DetailVans;
