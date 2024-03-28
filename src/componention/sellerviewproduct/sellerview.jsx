import "./sellerview.scss"

function View() {
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
                            <th>Product id</th>
                            <th>Product Details</th>
                            <th>Product Price</th>
                            <th>Product Stack</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Hot Chicken Wings 4pc</td>
                            <td>29347659</td>
                            <td>Seasoned,signature KFC Chicken wings</td>
                            <td>&#8377;179</td>
                            <td>5</td>
                        </tr>
                        <tr className="lastRow">
                            <td> Chicken Popcorn large</td>
                            <td>983765</td>
                            <td>signature bite-sized boneless chicken, </td>
                            <td>248</td>
                            <td>5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default View;