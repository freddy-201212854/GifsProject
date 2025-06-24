import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false)
    }
 
    useEffect( () => {
      getImages()
      //return se utiliza en caso de que se tenga por ejemplo un observable o funcion pendiente de cambios para poder limpiar
    }, []) 
     // si se deja [] solo se va a disparar una vez

    return  {
        images,
        isLoading
    }
}
