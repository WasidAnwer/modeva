// import { useState } from "react";
import "../../assets/css/product/add.css";

import P1 from "../../assets/img/p-1.png";

function Add() {
  return (
    <>
      <section className="Add_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-3">
              <div className="product">
                <div className="content">
                  <div class="mt-3">
                    <img src={P1} alt="Product" />
                    <h4>Men Black Slim Fit T-shirt <span>(Fashion)</span></h4>
                    <h5 class="mt-3">Price :</h5>
                    <h4><b><span>$100</span></b><b>$80</b><span>(30%Off)</span></h4>
                    <h5 class="mt-3">Size :</h5>
                    <div class="sizes">
                      <input type="checkbox" id="size-s" />
                      <label for="size-s">S</label>
                      <input type="checkbox" id="size-m" />
                      <label for="size-m">M</label>
                      <input type="checkbox" id="size-xl" />
                      <label for="size-xl">Xl</label>
                      <input type="checkbox" id="size-xxl" />
                      <label for="size-xxl">XXL</label>
                    </div>
                    <h5 class="mt-3">Colors :</h5>
                    <div class="colors">
                      <input type="checkbox" id="color-dark" />
                      <label for="color-dark"> <i class="fa-solid fa-circle text-dark"></i></label>
                      <input type="checkbox" id="color-yellow" />
                      <label for="color-yellow"> <i class="fa-solid fa-circle text-warning"></i></label>
                      <input type="checkbox" id="color-white" />
                      <label for="color-white"> <i class="fa-solid fa-circle text-white"></i></label>
                      <input type="checkbox" id="color-red" />
                      <label for="color-red"> <i class="fa-solid fa-circle text-danger"></i></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-9">
              <div class="product-fields">
                <div class="heading">
                  <h4>Add Product Photo</h4>
                </div>
                <div class="content">
                  <div class="inner">
                    <input type="file" /><br />
                    <i class="fa-solid fa-cloud-arrow-up"></i>
                    <h3 class="mt-4">Drop your images here, or <span>click to browse</span></h3>
                    <span>1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed</span>
                  </div>
                </div>
              </div>
              <div class="product-fields mt-4">
                <div class="heading">
                  <h4>Product Information</h4>
                </div>
                <div class="content">
                  <div className="row">
                    <div class="col-lg-6">
                      <div class="field mb-3">
                        <label for="prod-name">Product Name</label>
                        <input type="text" id="prod-name" placeholder="Items Name" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="field mb-3">
                        <label for="prod-cat">Product Categories</label>
                        <select id="prod-cat">
                          <option value="0">Other Accessories</option>
                          <option value="1">Electronics</option>
                          <option value="2">Fashion</option>
                          <option value="3">Footwear</option>
                          <option value="4">Furniture</option>
                          <option value="5">Headphones</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div class="col-lg-4">
                      <div class="field mb-3">
                        <label for="brand-name">Brand</label>
                        <input type="text" id="brand-name" placeholder="Brand Name" />
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="field mb-3">
                        <label for="Weight">Weight</label>
                        <input type="text" id="weight" placeholder="In Gm & Kg" />
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="field mb-3">
                        <label for="gender">Gender</label>
                        <select id="gender">
                          <option value="0">Select Gender</option>
                          <option value="1">Men</option>
                          <option value="2">Women</option>
                          <option value="3">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div class="col-lg-4">
                      <div class="field mb-3">
                        <h5 class="mt-3">Size :</h5>
                        <div class="sizes">
                          <input type="checkbox" id="size-xs" />
                          <label for="size-xs">XS</label>
                          <input type="checkbox" id="size-s1" />
                          <label for="size-s1">S</label>
                          <input type="checkbox" id="size-m1" />
                          <label for="size-m1">M</label>
                          <input type="checkbox" id="size-xl1" />
                          <label for="size-xl1">Xl</label><br />
                        </div>
                        <div className="sizes">
                          <input type="checkbox" id="size-xxl1" />
                          <label for="size-xxl1">XXL</label>
                          <input type="checkbox" id="size-3xl" />
                          <label for="size-3xl">3XL</label>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="field mb-3">
                        <h5 class="mt-3">Colors :</h5>
                        <div class="colors">
                          <input type="checkbox" id="color-dark1" />
                          <label for="color-dark1"> <i class="fa-solid fa-circle text-dark"></i></label>
                          <input type="checkbox" id="color-yellow1" />
                          <label for="color-yellow1"> <i class="fa-solid fa-circle text-warning"></i></label>
                          <input type="checkbox" id="color-white1" />
                          <label for="color-white1"> <i class="fa-solid fa-circle text-white"></i></label>
                          <input type="checkbox" id="color-blue" />
                          <label for="color-blue"> <i class="fa-solid fa-circle text-primary"></i></label>
                          <input type="checkbox" id="color-red1" />
                          <label for="color-red1"> <i class="fa-solid fa-circle text-danger"></i></label>
                          <input type="checkbox" id="color-green" />
                          <label for="color-green"> <i class="fa-solid fa-circle text-success"></i></label>
                        </div>
                        <div class="colors">
                          <input type="checkbox" id="color-grey" />
                          <label for="color-grey"> <i class="fa-solid fa-circle text-secondary"></i></label>
                          <input type="checkbox" id="color-skublue" />
                          <label for="color-skublue"> <i class="fa-solid fa-circle text-info"></i></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div class="col-lg-12">
                      <div class="field mb-3">
                        <label for="description">Description</label>
                        <textarea id="description" rows="8" placeholder="Type The description here"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div class="col-lg-6">
                      <div class="field mb-3">
                        <label for="stock">Stock</label>
                        <input type="number" id="stock" placeholder="Quantity" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="field mb-3">
                        <label for="prod-tag">Tag</label>
                        <select id="prod-tag">
                          <option value="1">Electronics</option>
                          <option value="2">Fashion</option>
                          <option value="3">Headphones</option>
                          <option value="4">Watches</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product-fields mt-4">
                <div class="heading">
                  <h4>Pricing Details</h4>
                </div>
                <div class="content">
                  <div className="row">
                    <div class="col-lg-6">
                      <div class="field mb-3">
                        <label for="price">Price</label>
                        <div className="price-div">
                          <span><i class="fa-solid fa-indian-rupee-sign"></i></span>
                          <input type="number" id="price" placeholder="000" />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="field mb-3">
                        <label for="sale_price">Sale Price</label>
                        <div className="price-div">
                          <span><i class="fa-solid fa-percent"></i></span>
                          <input type="number" id="sale_price" placeholder="000" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product-btns mt-3">
                <button><a href="#!">Reset</a></button>
                <button><a href="#!">Save</a></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Add;
