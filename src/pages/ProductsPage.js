import React from "react";
import { Filters, ProductList, Sort, PageHero } from "../components";

const ProductsPage = () => {
  return (
    <main>
      <PageHero title='products' />
      <div className='page'>
        <div className='section-center grid gap-x-6 gap-y-12 md:grid-cols-[200px_1fr]'>
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
