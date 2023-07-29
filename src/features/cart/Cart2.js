<div className="item">
<img className="item-thumbnail" src={item.thumbnail} alt="Product 1"/>
<div className="item-info">
  <span className="item-name">{item.brand}</span>
  <span className="item-price">${item.price}</span>
  <div className="quantity">
              Quantity
              <select value={item.quantity} onChange={(e)=>handleChange(e,item.id)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
  <button className="remove-btn">Remove</button>
</div>
</div>