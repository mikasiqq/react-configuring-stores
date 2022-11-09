import React, { useState } from 'react';

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: (id) => {}
})

const ProductsProvider = props => {
  const [productsList, setProductsList] = useState([
    {
      id: 'p1',
      title: 'Red Scarf',
      description: 'A pretty red scarf.',
      isFavorite: false
    },
    {
      id: 'p2',
      title: 'Blue T-Shirt',
      description: 'A pretty blue t-shirt.',
      isFavorite: false
    },
    {
      id: 'p3',
      title: 'Green Trousers',
      description: 'A pair of lightly green trousers.',
      isFavorite: false
    },
    {
      id: 'p4',
      title: 'Orange Hat',
      description: 'Street style! An orange hat.',
      isFavorite: false
    }
  ])

  const toggleFavourite = productId => {
    setProductsList(curProductList => {
      const prodIndex = curProductList.findIndex(
        p => p.id === productId
      );
      const newFavStatus = !curProductList[prodIndex].isFavorite;
      const updatedProducts = [...curProductList];
      updatedProducts[prodIndex] = {
        ...curProductList[prodIndex],
        isFavorite: newFavStatus
      };
      return updatedProducts
    })
  }

  return (
    <ProductsContext.Provider value={{products: productsList, toggleFav: toggleFavourite}}>
      {props.children}
    </ProductsContext.Provider>
  )
}
export default ProductsProvider 