import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

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
  const [checkboxFilter , setCheckBoxFilter] = useState([])
  const [originalProductData , setOriginalProductData] = useState([])
  
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
   const filterResult = originalProductData.filter(item => item.categoryName === name)
   setOriginalProductData(filterResult)
  }


  const calculateTotalPrice  = () => {
   const totalprice = cartItems.reduce((acc , value ) => acc + Number(value.price) * value.quantity , 0)
   setItemPrice(totalprice)
  }


  const handleAddToCart = async(product) => {
    const token = localStorage.getItem("token")
    try{
     const response = await axios.post("/api/user/cart" , {product} , {
       headers : {
        authorization : token
       }
     })
     if(response?.status === 201){
      toast.success("Item Added to the cart page")
      const isAddedToCart = products.map(item => item.id === product.id ? {...item , isAddedToCart: !item.isAddedToCart} : item) 
      setProducts(isAddedToCart)
      getCartItems()
     }
    }catch(err){
      console.log(err)
    }
  };


  const handleWishList = async(product) => {
    try{
       const response = await axios.post("/api/user/wishlist" , { product } , {
        headers : {
          authorization : localStorage.getItem("token")
        }
      })
      setWishItems(response?.data?.wishlist)
      const isAddedInWish = products.map(item => item._id === product._id ? {...item , isAddedToWish : !item.isAddedToWish} : item)
      setProducts(isAddedInWish)
      if(wishItems.find(item => item._id === product._id)){
        toast.success("Item Already added to wish list ")
      }
      
      
     
    }catch(err){
      console.log(err)
    }
  };


  const getWishListItem = async() => {
    try{
      const response = await axios.get("/api/user/wishlist" , {
        headers : {
          authorization : localStorage.getItem("token")
        }
      })
      setWishItems(response?.data?.wishlist)
    }catch(err){
      console.log(err)
    }
  }

  const getCartItems = async() => {
    try{
      const response = await axios.get("/api/user/cart" , {
         headers : {
          authorization : localStorage.getItem("token")
         }
      })
     setCartItems(response?.data?.cart)
    }catch(err){
      console.log(err)
    }
  }

  const handleRemoveWishlist = async(id) => {
    try{
     const response =  await axios.delete(`/api/user/wishlist/${id}` , {
      headers : {
        authorization : localStorage.getItem("token")
      }
     })
     setWishItems(response?.data?.wishlist)
    }catch(err){
      console.log(err)
    }
  };

  const handleRemoveCart = async(id) => {
   try{
    const response = await axios.delete(`/api/user/cart/${id}` , {
      headers : {
        authorization : localStorage.getItem("token")
      }
    })
    setCartItems(response?.data?.cart)
   }catch(err){
    console.log(err)
   }
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
        setOriginalProductData,
        handleAddToCart,
        getProductData,
        checkboxFilter , setCheckBoxFilter,
        categories,
        handleCategoryFilter,
        getWishListItem,
        handleWishList,
        handleWishList,
        setProducts,
        setCategories,
        wishItems,
        handleRemoveCart,
        getCartItems,
        cartItems,
        handleRemoveWishlist,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
