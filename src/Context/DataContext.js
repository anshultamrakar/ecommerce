import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [wishItems, setWishItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search , setSearch] = useState("")
  const [checkboxFilter , setCheckBoxFilter] = useState([])
  const [selectedOption, setSelectedOption] = useState("option1")
  const [auth, setAuth] = useState({});

  const getAllCategory = async () => {
    try {
      const response = await axios.get("/api/categories");
      if (response.status === 200) {
        setCategories(response?.data?.categories);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getProductData = async () => {
    try {
      const response = await axios.get("/api/products");
      if (response.status === 200) {
        setProducts(response?.data?.products);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

 
  useEffect(() => {
    getProductData();
    getAllCategory();
  }, []);


  const handleAddToCart = (id) => {
    const cartProduct = products.map((item) =>
      item.id === id ? { ...item, isAddedToCart: !item.isAddedToCart } : item
    );
    setProducts(cartProduct);
    const filterCart = cartProduct.filter(
      (item) => item.isAddedToCart === true
    );
    setCartItems(filterCart);
  };


  const handleWishList = (id) => {
    const wishProduct = products.map((item) =>
      item.id === id  ? { ...item, isAddedToWish: !item.isAddedToWish } : item
    );
    const filterWish = wishProduct.filter(
      (item) => item.isAddedToWish === true
    );
    setWishItems(filterWish);
    setProducts(wishProduct);
  };


  const handleRemoveWishlist = (id) => {
   const filterWishlist = wishItems.filter(item => item.id !== id)
   setWishItems(filterWishlist)
   const removedWishList = products.map(item => item.id === id ? {...item , isAddedToWish : !item.isAddedToWish} : item)
   setProducts(removedWishList)
  };


  const handleRemoveCart = (id) => {
    const filterCartItem = cartItems.filter(item => item.id !== id)
    setCartItems(filterCartItem)
    const removedCartList = products.map(item => item.id === id ? {...item , isAddedToCart : !item.isAddedToCart} : item)
    setProducts(removedCartList)
   }

  return (
    <DataContext.Provider
      value={{
        products,
        isLoading,
        search,
        setSearch,
        handleAddToCart,
        checkboxFilter , setCheckBoxFilter,
        setSelectedOption,
        categories,
        handleWishList,
        handleWishList,
        setProducts,
        setCategories,
        wishItems,
        setCartItems,
        handleRemoveCart,
        cartItems,
        setAuth,
        handleRemoveWishlist,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
