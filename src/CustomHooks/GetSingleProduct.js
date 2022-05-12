import { useEffect, useState } from "react";

const GetProductDetail = (id) => {
    const [update, setUpdate] = useState(true);
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://warm-island-53330.herokuapp.com/inventory/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id, update]);
    return [product, update, setUpdate]
}

export default GetProductDetail;