import React from "react";

function Packages(props) {
    console.log("ml: repairdata: packages: list:", props);

    return (
        <div className="the-items">
        {props.items.map(item => (
          <div className="item-card" key={item.id}>
          <h3>{item.package}</h3>
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <div className="item-info">
            <p>{item.info01}</p>
            <p>{item.info02}</p>
            <p>{item.info03}</p>
            <p>{item.info04}</p>
          </div>
          <p>**{item.finished}**</p>
          <p>See <a href="#addon">Add-on</a> section below for additional options</p>
          <p>Ask about quick turn around pricing</p>
      </div>
        ))}
      </div>
    );
}

export default Packages;