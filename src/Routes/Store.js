import React, { useState, useEffect } from "react";
import StoreItem from "../components/StoreItem";



export default function Store() {
  const [items, setItems] = useState([]);

  const fetchStoreItems = async () => {
    try {
      const response = await fetch(
        "https://e-commercewebdevsimplified-default-rtdb.firebaseio.com/Items.json"
      );
      if (!response.ok) {
        throw new Error("Error occured");
      }
      const data = await response.json();
      
      const fetchedData = [];

      for (let i in data) {
        fetchedData.push({
          id: i,
          name: data[i].name,
          price: data[i].price
        })
      }
      setItems(fetchedData);
    } catch (err) {
      console.log(err)
    }
    
  };

  useEffect(() => {
    fetchStoreItems();
  }, []);


  const itemsFetched = items.map((item) => {
    return (
      <StoreItem
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
      ></StoreItem>
    );
  });

  return (
    <>
      <section className="d-flex justify-content-center mt-5">
        {itemsFetched}
      </section>
    </>
  );
}
