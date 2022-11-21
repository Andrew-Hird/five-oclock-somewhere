import React, { useEffect, useMemo, useState } from 'react'
import { Gif } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

const CheersGif = () => {
    // TODO: use IGif type
    const [result, setResult] = useState<any>()

    useEffect(() => {
        const gf = new GiphyFetch(process.env.NEXT_PUBLIC_GIPHY_KEY)

        gf.random({ tag: "cheers" })
            .then((gif) => setResult(gif.data))
    }, [])

    console.log(result)

    return (result && <Gif 
        className="mt-8" 
        width={400} 
        gif={result} 
        noLink
        backgroundColor="black"
        hideAttribution
    />)
}

export default CheersGif
