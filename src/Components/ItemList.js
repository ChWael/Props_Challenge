import Item from "./Item";

function ItemList(props){
    const prod = props.Items
    return (
        <div className="Car_List">
          <div className="header">
            <h2>Photo</h2>
            <h2>Name</h2>
            <h2>Price</h2>
          </div>
          {prod.map((el) => (<Item product={el} />))}
        </div>
      );
}
export default ItemList