import React from "react";
import { Header, AddItem, ShoppingList } from ".";
import Items from "./Items";

export default function Home() {
  return (
    <div>
      <Header />
      <AddItem />
      <ShoppingList />
    </div>
  );
}
