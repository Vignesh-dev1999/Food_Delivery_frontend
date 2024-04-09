
import { useEffect, useState } from "react";
import "./sellerview.scss"
import axios from "axios";

function View() {

    const [viewall, setViewAll] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/p");
            console.log(response.data);
            setViewAll([...response.data]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Log viewall directly after the render
    console.log('View All:', viewall);


    return (




        <div className="ta">
            <div className="head">
                <h4>KFC</h4>
            </div>
            
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            {/* <th>Product id</th> */}
                            <th>Product Details</th>
                            <th>Product Price</th>
                            <th>Product Stack</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        viewall.map((data,index)=>(
                            <tr className="lastRow" key={index}>
                                <td>{data.Product_Name}</td>
                                <td>{data.Product_Details}</td>
                                <td>{data.Product_Price}</td>
                                <td>{data.Product_Stack}</td>
                            </tr>
                        ))
                    }

                        {/* <tr className="lastRow">
                            <td> Chicken Popcorn large</td>
                            <td>983765</td>
                            <td>signature bite-sized boneless chicken, </td>
                            <td>248</td>
                            <td>5</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default View;