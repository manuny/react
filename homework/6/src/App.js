import React from "react";
import { AddProductForm } from "./components/AddProductForm";
import { ProductsList } from "./components/ProductsList";
import { EditProductForm } from "./components/EditProductForm";

function App() {
  return (
    <div>
      <h1>Product Catalog Management</h1>
      <AddProductForm />
      <ProductsList />
      <EditProductForm />
    </div>
  );
}

export default App;
