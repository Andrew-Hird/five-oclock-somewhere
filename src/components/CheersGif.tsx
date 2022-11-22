import React from 'react'
import { Gif } from '@giphy/react-components'
import { IGif } from '@giphy/js-types';

const CheersGif = ({ gif }: { gif: IGif }) => {
    return gif ? (<Gif 
        gif={gif} 
        className="mt-8" 
        width={400} 
        noLink
        backgroundColor="black"
        hideAttribution
    />) : null
}

export default CheersGif
