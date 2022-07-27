import React, { useState } from "react";
import ProductListing from './ProductListing';
import { ProductService } from "../../../services/ProductService";
import { connect } from "react-redux";
import { getCategoryProducts, hideLoader, showLoader, sortProduct } from "../../../redux/actions";
import Loader from "../../atoms/Loader/Loader";
import Pagination from "./Pegination";
import Helper from "../../../helper/Helper";

import boys from '../../../images/Product_Images/boys.png';
import { Image } from "../../atoms";


function ProductCatagory(props) {

  let pageSize = 5;
  let [showPagination, SetShowPagination] = useState(true);

  useState(async () => {
    props.showLoader()
    var products = await ProductService.getCategory().catch((e) => {
      props.hideLoader();
      Helper.showToastMessage("Something went wrong. Please try again")
    });
    props.getCategoryProducts(products)
    props.sortProduct(products?.slice(0, pageSize) ?? [])
    props.hideLoader()
  }, [])


  const sortByCategory = (item) => {
    let filterData = [...props.products];//props.products.filter(d => d.category == item.currentTarget.value);
    if (item.currentTarget.value === "1") {
      filterData = filterData.sort((a, b) => (a.price > b.price ? 1 : -1))
    } else if (item.currentTarget.value === "0") {
      filterData = filterData.sort((a, b) => (a.price > b.price ? -1 : 1))
    } else {
      filterData = props.products.filter(d => d.category === item.currentTarget.value);
    }
    props.sortProduct(filterData);

    if (item.currentTarget.value === "1") {
      SetShowPagination(true);
    }
    else if (item.currentTarget.value === "0") {
      SetShowPagination(true);
    } else {
      SetShowPagination(false);
    }
  }

  let totalItem = (props.products?.length / pageSize) ?? 0
  totalItem = Math.floor(totalItem)

  const paginate = (e, item) => {
    for (let index = 0; index < e.currentTarget.parentElement.children.length; index++) {
      const element = e.currentTarget.parentElement.children[index];
      element.classList.remove('selectedColor')
    }

    e.currentTarget.classList.add('selectedColor')
    let filterData = props.products.slice((item - 1) * pageSize, item * pageSize);
    props.sortProduct(filterData);
    window.scrollTo({
      top: 400,
      behavior: 'smooth',
    })
  }



  let data = props.sortedProducts.length > 0 ? props.sortedProducts : props.products


  return <React.Fragment>
    <div className="aem-Grid aem-Grid--12">
      <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--4 boximg">
        <div className="deskTopHide">
          <div>
            <Image alt={""} url={boys} classValue="mobileimg"></Image>
          </div>
          <div className="blackbox">
            <div>Mens's Outerwear</div>
            <div className="categoryBorder">
            </div>
          </div>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 mobileHide black-image-div">
          <div className="colorbox">
            <div>Mens's Outerwear</div>
            <div className="categoryBorder"></div>
          </div>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12 mobileHide">
          <Image alt={""} url={boys} classValue="Bannerimg"></Image>
        </div>
      </div>
    </div>
    <div className="page-container">
      <Loader isLoading={props.isLoading}></Loader>
      <ProductListing data={data} sortByCategory={sortByCategory}></ProductListing>
      {
        showPagination &&
        <Pagination totalItem={totalItem} paginate={paginate}></Pagination>

      }
    </div>
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