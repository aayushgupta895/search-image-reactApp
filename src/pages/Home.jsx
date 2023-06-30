import React, {useState, useEffect, useContext} from 'react'
import QueryComponent from '../components/QueryComponent'
import ShowResult from '../components/ShowResult'
import { MyContext } from '../hooks/ContextProvider'

function Home(props) {
    const { query, setImgArr, imgArr, setQuery } = useContext(MyContext)
    const apiKey = import.meta.env.VITE_API_KEY
    useEffect(()=>{
        console.log(query + " from the useSate")
        search();
        async function search(){
            const spri = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo`)
            const result = await spri.json();
            
            const arr1 = []
            const arr2 = []
            result['hits'].forEach((item)=>{

            arr1.push(item['webformatURL'])
            arr2.push(item['largeImageURL'])
        })

        setImgArr(arr1);
        props.setLargeImg(arr2);
        console.log('hi')

        }
    },[query]);

    return (
        <div>
            <QueryComponent setQuery={setQuery}/>  
            <ShowResult imgArr={imgArr} setInd={props.setInd} />
        </div>
    )
}

export default Home
