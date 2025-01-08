import React from 'react'
import GalleryTabs from './GalleryTabs'
import Text from './Text'
import CustomerReview from './CustomerReview'
import RelatedTours from './RelatedTours'

const Product = () => {
  return (
    <div>
        <GalleryTabs/>
        <Text/>
        <RelatedTours/>
        <CustomerReview/>
        
    </div>
  )
}

export default Product