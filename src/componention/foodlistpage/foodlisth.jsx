
import mind from "../../images/Biryani_2.avif"
import south from "../../images/South_Indian_4.avif"
import cakes from "../../images/Cakes.avif"
import pizza from "../../images/Pizza.avif"
import coffee from "../../images/Coffee.avif"
import san from "../../images/Sandwich.avif"
import { Link } from "react-router-dom"

import "./foodlisth.scss"


const minds = [


    {

        image: mind

    },
    {

        image: south

    },
    {
        image: cakes
    },
    {
        image: pizza
    },
    {
        image:coffee
    },
    {
        image:san
    }
]

function Mind() {
    return (

        <div className="product-cards">
            <div className="food">
                <h3>what's on your mind?</h3>
            </div>
            <div className="min">
                {minds.map((data, index) => (
                    <Link>
                        <div className="data" key={index}>
                            <div className="header">
                                <img src={data.image} alt="" />

                            </div>


                        </div>

                    </Link>
                ))}
            </div>
            {/* <div className="all">
            <button>Show more</button>
          </div> */}

        </div>
    )
}
export default Mind;