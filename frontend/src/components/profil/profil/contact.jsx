
import React from "react";

const Contact = () => {
    return(
        <div>
            <h3>contact</h3>
            <div className="mail">
                <p>Mail : <input type="email" name="email" id="" /></p>
            </div>
            <div className="num">
                <p>Numéro de téléphone : <input type="tel" name="num" id="" placeholder="+33"/></p>
            </div>
        </div>
    )
}

export default Contact