    import { useState } from 'react'
    import { AddCategory, GifGrid } from './components'

    export const GiftExpertApp = () => {
        
    const [categories, setCategories] = useState([ 'One Punch' ])

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return
        setCategories([newCategory, ... categories])
        //setCategories( cat => [...cat, 'Caballeros'])
    }
    
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                //setCategories = {setCategories}
                onNewCategory={(value) => onAddCategory(value)}
            />
            {
                categories.map( (category) => (
                    <GifGrid key={category} category={category}/>
                ))
                
            }
        </>
    )
    }
    