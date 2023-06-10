import React from "react";
import SofaImg from "../Assets/Images/sofa-gb7b3992cb_1280.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { useEffect  , useState} from "react";



const Home = () => {

const {categories , products , setProducts , handleCategoryFilter} = useContext(DataContext)

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [])


  return (
    <div className="Home">
      <div className="Home_image">
        <img src={SofaImg} />
      </div>
      <div className="Home_text">
        <h1>Our Craft , Your Comfort!</h1>
        <Link to = "/product"><button>Shop Now</button> </Link>
      </div>
      
      <div className="explore_collection">
       <div>
        <h1>Explore Our Collections</h1>
       </div>
       <div className="our_collection">
        <div className="collection_card">
         <Link to = "/product"> <img src = "https://img.freepik.com/free-photo/white-sideboard-living-room-interior-with-copy-space_43614-800.jpg?size=626&ext=jpg&ga=GA1.2.701769884.1684604185&semt=ais"/></Link> 
        </div>
        <div className="collection_card">
          <Link to = "/product"> <img src = "https://img.freepik.com/free-photo/chic-modern-luxury-aesthetics-style-living-room-blue-tone_53876-125839.jpg?size=626&ext=jpg&ga=GA1.2.701769884.1684604185&semt=ais"/></Link> 
        </div>
        <div className="collection_card">
         <Link  to = "/product"> <img src = "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg?size=626&ext=jpg&ga=GA1.2.701769884.1684604185&semt=ais"/></Link> 
        </div>
        <div className="collection_card">
        <Link  to = "/product"> <img src = "https://img.freepik.com/premium-photo/living-room-interior-wall-have-sofa-decoration_41470-3543.jpg?size=626&ext=jpg&ga=GA1.2.701769884.1684604185&semt=ais"/> </Link> 
        </div>
       </div>
      </div>
      <div className="category_container">
        <h1>Shop By Category</h1>
        <hr/>
    
        <ul className="category">
          {categories.map(category => (
          <li className="category_list legend" key = {category.id}>
              <Link to = "/product"><img onClick={() => handleCategoryFilter(category.categoryName)} src = {category.imgUrl}/></Link> 
              <h4>{category.categoryName}</h4>
            </li>
          ))}
        </ul>
   
       
      </div>
    </div>
  );
};

export default Home;
