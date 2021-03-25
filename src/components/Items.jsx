import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { InListItem, InBasketItem } from ".";
import bananas from "../assets/bananas.png";
import deleteIcon from "../assets/delete.png";

export default function ShoppingList() {
  const items = useSelector(state => state.items);
    return (
      <div className="items-section">
        <div className="items-tittle"><h2>Items</h2></div>


        <ListGroup className="m-5" variant="flush">
      {items.map((item, index) => {
        return item.inBasket ? (
          <InBasketItem item={item} index={index} />
        ) : (
          <InListItem item={item} index={index} />
        );
      })}
    </ListGroup>
        <div className="item-container"> </div> 
        </div>
    );
  }

