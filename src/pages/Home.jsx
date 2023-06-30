import React, {useState, useEffect, useContext} from 'react'
import QueryComponent from '../components/QueryComponent'
import ShowResult from '../components/ShowResult'
import { MyContext } from '../hooks/ContextProvider'

function Home(props) {
    const { query, setImgArr, imgArr, setQuery } = useContext(MyContext)
    // const [query, setQuery] = useState('')
    // const [imgArr, setImgArr] = useState([]) 
    useEffect(()=>{
        console.log(query + " from the useSate")
        search();
        async function search(){
            const spri = await fetch(`https://pixabay.com/api/?key=37814215-36aa59185fd25d88a37ea9d51&q=${query}&image_type=photo`)
            const result = await spri.json();
            
            const arr1 = []
            const arr2 = []
            result['hits'].forEach((item)=>{
            // setImgArr((prev)=>[...prev, item['webformatURL']])
            arr1.push(item['webformatURL'])
            arr2.push(item['largeImageURL'])
        })

        setImgArr(arr1);
        props.setLargeImg(arr2);
        console.log('hi')
        // console.log(imgArr.map((item)=>item))
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
