import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/Product/ProductDetail";
import ProductSkeleton from "../components/Product/ProductSkeleton";
import Error from "../components/Error";
import { fetchSingleProduct } from "../api/api";

export default function ProductDetailView() {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { response, error } = await fetchSingleProduct(id);
      if (error) {
        setError(error);
      }
      setProduct(response);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="flex justify-center">
        <Error {...error} />
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      {loading && !error ? <ProductSkeleton /> : <ProductDetail {...product} />}
      ;
    </div>
  );
}
