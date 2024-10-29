
import reactLogo from '../assets/react.svg'
import CardProduct from '../components/CardProduct'
import { useFetch } from '../hooks/useFetch'


const ProductsScreen = () => {



let product1 = {
  key : 1,
  image : reactLogo,
  title: "React",
  detail : "Los detalles del producto",
  price : 123

}
const url = "https://fakestoreapi.com/products"
const {data, isLoading, error}= useFetch(url)
console.log(data)

  return (
  
  

  <>
  {data&&data.map(product=>(
    <CardProduct 
    key={product.id}
    imageProduct={product.image} 
    titleProduct={product.title}
    detailProduct={product.description} 
    priceProduct={product.price}
    >
     
  </CardProduct>
  ))}
  </>
 
  
  
  )
}

export default ProductsScreen
