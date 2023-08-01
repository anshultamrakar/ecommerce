import { createContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export const DataContext = createContext();

const DataProvider = ({ children }) => {

  let navigate = useNavigate()
  const [products, setProducts] = useState([]);
  const [filterResult , setFilterResult] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [wishItems, setWishItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search , setSearch] = useState("")
  const [itemPrice , setItemPrice] = useState(0)
  const [categoryName , setCategoryName] = useState("")
  const [checkboxFilter , setCheckBoxFilter] = useState([])
  const [sortOption , setSortOption] = useState("")
  const [ratingOption , setRatingOption] = useState("")
  const [priceVal , setPriceVal] = useState("")


  useEffect(() => {
    getProductData();
    getAllCategory();
  }, []);


  useEffect(() => {
   const filteredResult = products.filter(item => item.price <= priceVal)
   setFilterResult(filteredResult)
  } , [products , priceVal])

  useEffect(() => {
    if(checkboxFilter.length > 0){
      const filteredResult =  products.filter(item => checkboxFilter.includes(item.categoryName))
      setFilterResult(filteredResult)
    }
  },[checkboxFilter])
   
 const handleCheckInput = (e) => {
  const {checked , value} = e.target
  if(checked){
    setCheckBoxFilter([...checkboxFilter , value])
  }else{
    const filterByCategory = checkboxFilter.filter(item => item !== value)
    setCheckBoxFilter(filterByCategory)
  }
 }

   useEffect(() => {
    const filteredResults = products.filter(item => (item.title).toLowerCase().includes(search.toLowerCase())
    || (item.title).toLowerCase().includes(search.toLowerCase()))
     setFilterResult(filteredResults)
    }, [products , search])


    useEffect(() => {
      const filteredResults =  products.filter(item => item.rating === ratingOption)
      setFilterResult(filteredResults)
    }, [ratingOption])

      useEffect(() => {
        if(sortOption === "option1"){
          const filteredResults =  [...filterResult].sort((a,b) => a.price - b.price)
          setFilterResult(filteredResults)
        }else{
          const filteredResults =  [...filterResult].sort((a,b) => b.price - a.price)
          setFilterResult(filteredResults)
        }
      }, [sortOption])

      useEffect(() => {
         const filteredResult = products.filter(item => item.categoryName === categoryName)
         setFilterResult(filteredResult)
      }, [categoryName])


      const handleCategoryFilter = (name) => {
        setCategoryName(name)
        navigate("/product")
      }

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

  const handleAddToCart = async(product) => {
    try{
     const response = await axios.post("/api/user/cart" , {product} , {
       headers : {
        authorization : localStorage.getItem("token")
       }
     })
     if(response?.status === 201){
      if(!cartItems.some(item => item._id === product._id)){
        setCartItems(response?.data?.cart)
        updatePrice(response?.data?.cart)
        toast.success("Item Added to the cart page")
        setProducts(products.map(item => item._id === product._id ? {...item , isAddedToCart: !item.isAddedToCart} : item) )
      }else{
        toast.success("Item is already in cart")
      }
     }
    }catch(err){
      console.log(err)
      navigate("/login")
    }
  };


  const handleUpdateQty = async(productId , type) => {
    try{
      const response = await axios.post(`/api/user/cart/${productId}` , {action : {
        type
      }} , {
        headers : {
          authorization : localStorage.getItem("token")
        }
      })
      setCartItems(response?.data?.cart)
      updatePrice(response?.data?.cart)
    }catch(err){
      console.log(err)
    }
  }


  const updatePrice = (cartItems) => {
    const updatedPrice = cartItems.reduce((acc , value) => acc + Number(value.price)*value.qty , 0)
    setItemPrice(updatedPrice)
  }


  const handleWishList = async(product) => {
    try{
       const response = await axios.post("/api/user/wishlist" , { product } , {
        headers : {
          authorization : localStorage.getItem("token")
        }
      })
     if(!wishItems.some(item => item._id === product._id)){
      setWishItems(response?.data?.wishlist)
      setProducts(products.map(item => item._id === product._id  ? {...item , isAddedToWish : !item.isAddedToWish} : item))
      toast.success("Item is added in the wishlist")
     }else{
      handleRemoveWishlist(product._id)
      setProducts(products.map(item => item._id === product._id  ? {...item , isAddedToWish : !item.isAddedToWish} : item))
     }
    }catch(err){
      console.log(err)
      navigate("/login") 
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
     toast.success("Item removed from the wishlist")
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
    toast.success("Item removed from the cart")
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
        itemPrice , setItemPrice, 
        setSearch,
        handleAddToCart,
        handleUpdateQty,
        getProductData,
        checkboxFilter , setCheckBoxFilter,
        priceVal , setPriceVal,
        ratingOption , setRatingOption,
        setSortOption,
        sortOption,
        handleCategoryFilter,
        categories,
        handleCheckInput,
        filterResult , setFilterResult,
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
