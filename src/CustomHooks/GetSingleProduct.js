import { useEffect, useState } from "react";

const GetProductDetail = (id) => {
    const url = `http://localhost:5000/inventory/${id}`
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);
    return [product]
}

export default GetProductDetail;