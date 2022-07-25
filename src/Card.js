//import Button from "react-bootstrap/Button";
function Card({cartitem,data,handleAddToCart}) {
  return (
    <div className="col-lg-4" style={{padding: "10px" }}>
      <div class="card" style={{ width: "15rem" }}>
        <img src={data.image} class="card-img-top" alt="" />
        <div class="card-body">
          <h5 class="card-title">{data.title}</h5>
          <h5 class="card-title">{data.price}</h5>

          {/* <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p> */}

          <button
            disabled={cartitem.some((obj) => obj.id === data.id)}
            onClick={() => handleAddToCart(data.id)}
            btn
            btn-primary
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;