import kfc1 from "../../images/f01666ac73626461d7455d9c24005cd4.avif"
import dominos from "../../images/geidjcnafxg03ksilfno.avif"
import biriyani from "../../images/j5ppnjc32bvsal2biicg.avif"
import MCDonald from "../../images/f62564e14944753903849c4ef673af4d.avif"
import ss from "../../images/ss.avif"
import ME from "../../images/M&E.avif"
import chai from "../../images/chai.avif"
import cafe from "../../images/cafe.avif"
import red from "../../images/red.avif"
import boom from "../../images/boom.avif"
import StarIcon from '@mui/icons-material/Star';

import './catehome.scss'
import { Link } from "react-router-dom";
function Category() {

const cartdata =[
    {
        name:"KFC",
        image:kfc1,
        offer:"₹20% OFF UPTO ₹50",
        star:"4.2 . 15-20 mins",
        data:"Biryani, America"

        

    },
    {
        name:"Domino's",
        image:dominos,
        offer:"₹125 OFF ABOVE ₹199",
        star:"4.3 . 30min",
        data:"Pizzas,italian,pastas"

        

    },
    {   
        name:"Hyderabad Biriyani",
        image:biriyani,
        offer:"₹125 OFF ABOVE ₹199",
        star:"4.3 . 25-30min",
        data:"Hyderabad Biriyani"
  

    },
    {
        name:"MC Donald's",
        image:MCDonald,
        offer:"₹125 OFF ABOVE ₹199",
        star:"4.3 . 25-30min",
        data:"Burgers, Beverages"
    },
    {
        name:"SS Hyderabad Briyani",
        image:ss,
        offer:"₹125 OFF ABOVE ₹199",
        star:"4.6 . 25-30min",
        data:"Biryani, South Indian"
    },
    {
        name:"Meat And Eat",
        image:ME,
        offer:"₹125 OFF ABOVE ₹199",
        star:"4.2 . 25-30min",
        data:"Beverages"
    },
    {
        name:"Chai Kings",
        image:chai,
        offer:"₹125 OFF ABOVE ₹199",
        star:"4.2 . 25-30min",
        data:"Beverages, Snacks"
    },
    {
        name:"Cafe Coffee Day",
        image:cafe,
        offer:"₹125 OFF ABOVE ₹199",
        star:"4.2 . 25-30min",
        data:"Beverages, Cafe"
    },
    {
        name:"The Red Box",
        image:red,
        offer:"₹125 OFF ABOVE ₹199",
        star:"4.2 . 25-30min",
        data:"Chinese"
    },
    {
        name:"Boomerang",
        image:boom,
        offer:"₹125 OFF ABOVE ₹199",
        star:"4.2 . 25-30min",
        data:"Ice Cream, Desserts"
    }
]
    return (
       
        <div className="product-card">
            { cartdata.map((data, index)=>(
                <Link to="/kfc">
                  <div className="data"  key={index}>
                  <div className="header">
                      <img src={data.image} alt="" />
                      <h2>{data.offer}</h2>
                  </div>
                  <div className="content">
                      <h3>{data.name}</h3>
                      <div className="rating">
  
                          <div className="star">
                          <span class="fa fa-star checked"></span> <span >{data.star}</span>
                          </div>
                         
                      </div>
                  </div>
                  <p>{data.data}</p>
              </div>
              </Link>
            ))   }
          <div className="all">
            <button>Show more</button>
          </div>
        </div>
        
    )
}

export default Category;