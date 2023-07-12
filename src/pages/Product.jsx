import Carousel from '../components/carousel'
import slides from '../data/sliderData'
import React, { useEffect, useState, useContext  } from 'react';
import { useParams } from 'react-router-dom'; // Import the useParams hook
import { DataContext } from '../data/DataProvider';


const Product = () => {
    const { productId } = useParams();
    const { data, loading } = useContext(DataContext);
    const [productData, setProductData] = useState(null);
  
    useEffect(() => {
      console.log('data:', data);
      console.log('productId:', productId);
  
      if (data.length > 0) {
        const product = data.find((item) => item.id === parseInt(productId));
        console.log('product:', product);
        setProductData(product);
      }
    }, [data, productId]);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (!productData) {
      return <p>Product not found.</p>;
    }

    return (
        <div className="product">
            <div className="d-flex">
                <p className="categoryText"> <span>Product Title: {productData.title}</span></p>
            </div>

            <div className="productSide">
                <div className="leftProductSide">
                    <Carousel slides={productData.url} url={productData.url}/>
                </div>   
                <div className="rightProductSide">
                    <div className='productTitleBox'>
                        <h1 className='productTitle'>Product Title: {productData.title}</h1>
                        
                    </div>

                    <div className='productDescrBox'>
                        <p className='productDescr'></p>
                    </div>

               


                </div>
            </div>

        </div>
    )
}

export default Product;