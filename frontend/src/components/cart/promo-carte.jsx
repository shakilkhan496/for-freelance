

const Promo = () => {

    const handleClick = () => {
        localStorage.setItem("promo", "10");
        window.location.replace("/");
      };
      
    return(
        <div>
            <h3>10% de réduction sur tout le site Jokai</h3>
            <input type="button" onClick={handleClick} value='Bénéficier ou réclamer' />
        </div>
    )
}

export default Promo