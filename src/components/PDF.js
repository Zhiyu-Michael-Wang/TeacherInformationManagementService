import React from 'react'
import { MobilePDFReader } from 'react-read-pdf'
import { useParams } from 'react-router-dom'

function PDF() {

    let { name } = useParams()


    return(
        <div>
            <MobilePDFReader url={require('../data/pdfs/' + { name }.name + '.pdf').default}/>
            
        </div>
    )
    
}


export default PDF