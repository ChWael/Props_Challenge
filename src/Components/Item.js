import PropTypes from 'prop-types'

function Item(props) {
  const alertProduct = (name) => alert(` Enjoy the view ${name}`);

  return (
    <div className="item" onClick={() => alertProduct(props.product.name)}>
      <img style={{ width: "300px" }} src={props.product.Image} alt="" />
      <h3 style={{ width: "300px" }}>{props.product.name}</h3>
      <h3 style={{ width: "300px" }}>{props.product.price}</h3>
    </div>
  );
}

Item.defaultProps = {
    image:'', name:'image stolen', price: 'Pricless'
}
Item.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    alertProduct : PropTypes.func
}

export default Item;