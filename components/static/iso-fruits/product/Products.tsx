import Image from "next/image";
import React from "react";
import yellow_banana_powder from "../../../../assets/images/static/iso-fruits/product/yellow_banana_powder.svg";
import green_banana_powder from "../../../../assets/images/static/iso-fruits/product/green_banana_powder.png";

const Products = () => {
  return (
    <div className="iso-fruits-product">
      <div className="top-card">
        <Image src={yellow_banana_powder} alt="yellow banana powder" />
        <div>
            <h2>Yellow Banana Powder</h2>
            <p><span>Color </span>: Yellow</p>
            <p><span>Packaging Size </span>: 1kg, 50 Kg</p>
            <p><span>Cultivation Type </span>: Natural</p>
            <p><span>Shelf Life </span>: 1 year</p>
            <p><span>Feature </span>: Pure, Healthy, Good Taste</p>
        </div>
      </div>
      <div className="bottom-card">
        <Image src={green_banana_powder} alt="green banana powder" />
        <div>
            <h2>Green Banana Powder</h2>
            <p><span>Color</span> : Green</p>
            <p><span>Packaging Size</span> : 1kg, 50 Kg</p>
            <p><span>Cultivation Type</span> : Natural</p>
            <p><span>Shelf Life</span> : 1 year</p>
            <p><span>Feature</span> : Pure, Healthy, Good Taste</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
