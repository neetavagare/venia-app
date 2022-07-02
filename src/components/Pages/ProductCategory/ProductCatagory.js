import React, { useState } from "react";
import ProductListing from './ProductListing';
import { ProductService } from "../../../services/ProductService";
import { connect } from "react-redux";
import { getCategoryProducts, hideLoader, showLoader, sortProduct } from "../../../redux/actions";
import Loader from "../../atoms/Loader/Loader";

function ProductCatagory(props) {

//  Sorting By Catagory Component

  useState(async () => {
    props.showLoader()
    var products = await ProductService.getCategory();
    props.getCategoryProducts(products);
    props.hideLoader()
  }, [])

  const sortByCategory = (item) => {
    let filterData = props.products.filter(d => d.category == item.currentTarget.value);
    props.sortProduct(filterData);
  }

  let data = props.sortedProducts.length > 0 ? props.sortedProducts : props.products

  return <React.Fragment>
    <Loader isLoading={props.isLoading}></Loader>
    <ProductListing data={data} sortByCategory={sortByCategory}></ProductListing>;
  </React.Fragment>
}

const mapStateToProps = (state) => {
  return {
    products: state.feature.products,
    isLoading: state.feature.isLoading,
    sortedProducts: state.feature.sortedProducts

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoryProducts: (payload) => dispatch(getCategoryProducts(payload)),
    showLoader: (payload) => dispatch(showLoader(payload)),
    hideLoader: (payload) => dispatch(hideLoader(payload)),
    sortProduct: (payload) => dispatch(sortProduct(payload))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCatagory);