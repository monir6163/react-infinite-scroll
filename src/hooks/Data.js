import axios from "axios";
import { useEffect, useState } from "react";

const Data = () => {
    const [images, setImages] = useState([]);

    const fetchImages = (count = 12) => {
        const apiRoot = "https://jsonplaceholder.typicode.com";
        axios.get(`${apiRoot}/photos?_start=0&_limit=${count}`).then((res) => {
            console.log(res.data);
            setImages([...images, ...res?.data]);
        });
    };
    useEffect(() => {
        fetchImages();
    }, []);
    return [images, fetchImages];
};

export default Data;
