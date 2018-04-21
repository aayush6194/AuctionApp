import React from 'react';

class Detail extends React.Component {
  constructor(props){
    super(props);
  //  this.x = this.props.data.map((detail)=><li className="detail">{detail}</li>);

   this.x = "";

  //  this.a ="artistName:"Ayushi",
  //  itemName:"The Ayush Noob",
  //  categoryName:"painting",
  //  classification:"animal",
  //  description:"its painting by poop",
  //  auctionItemAddedDate:"2018/02/01",
  //  itemProducedDate:"1991/02/01",
  //  estimatedPrice:"$0.1",
  //  itemImage:"image.jpg",
  //  productOwner:"nisha",
  //  status:"live","
  }

      render()  {
 return (
   <div className ="detail-container">
    <ul className="detail">
    {this.x}<br />
<li>Lot Number :  {this.props.details[0].item.lotNumber}</li>
<li>Item Name :  {this.props.details[0].item.itemName}</li>
<li>Category Name :  {this.props.details[0].item.categoryName}</li>
<li>Classification :  {this.props.details[0].item. classification}</li>
<li>Description :  {this.props.details[0].item.description}</li>

    </ul>

    <span className="price">Price: {this.props.details[0].item.estimatedPrice} </span>
    </div>
  );
}
}

export default Detail;
