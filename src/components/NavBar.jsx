
import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { NavLink } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"




const NavBar = () => {

  const urlCategories = "https://fakestoreapi.com/products/categories"
const {data, isLoading, error} = useFetch(urlCategories)
//let catFind = 'electronics'
//const indexCat = data.indexOf('electronics')
//console.log(indexCat)

  return (
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Street Store</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to='/'className="nav-link" aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/products' className="nav-link" href="#">Products</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">all</a></li>
          {data&&data.map(category=>(
            <li key={data.indexOf(category)}><a className="dropdown-item" href="#" >{category}</a></li>
            
          ))}

          </ul>
        </li>
        <li className="nav-item">
          <NavLink to='/contact' className="nav-link" href="#">Contact</NavLink>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    
  )
}

export default NavBar

