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
  const [itemPrice , setItemPrice] = useState(0)
  const [searchResult , setSearchResult] = useState([])
  const [filterCategoryName , setFilterCategoryName] = useState("")
  const [checkboxFilter , setCheckBoxFilter] = useState([])
  const [originalProductData , setOriginalProductData] = useState([])
  const [auth, setAuth] = useState({});


  useEffect(() => {
    getProductData();
    getAllCategory();
  }, []);


  useEffect(() => {
    const filteredResults = originalProductData.filter(item => (item.title).toLowerCase().includes(search.toLowerCase()))
    setProducts(filteredResults)
  },[search , originalProductData])


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
        setOriginalProductData(response?.data?.products)
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCategoryFilter = (name) => {
   console.log("dsds")
  }


  const calculateTotalPrice  = () => {
   const totalprice = cartItems.reduce((acc , value ) => acc + Number(value.price) * value.quantity , 0)
   setItemPrice(totalprice)
  }


  const handleAddToCart = (id) => {
    const cartProduct = products.map((item) => item.id === id ? { ...item, isAddedToCart: !item.isAddedToCart } : item);
    setProducts(cartProduct);
    const filterCart = cartProduct.filter((item) => item.isAddedToCart === true);
    setCartItems(filterCart);
  };


  const handleWishList = (id) => {
    const wishProduct = products.map((item) => item.id === id  ? { ...item, isAddedToWish: !item.isAddedToWish } : item);
    const filterWish = wishProduct.filter((item) => item.isAddedToWish === true);
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
        itemPrice , setItemPrice, calculateTotalPrice, 
        setSearch,
        searchResult, 
        setSearchResult,
        originalProductData,
        handleAddToCart,
        getProductData,
        checkboxFilter , setCheckBoxFilter,
        categories,
        handleCategoryFilter,
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
