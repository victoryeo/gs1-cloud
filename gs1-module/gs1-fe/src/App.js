import React, { Component } from 'react';
import logo from './logo_gs1my.png';
import './App.css';
import * as wrapper from './wrapper.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }
  queryProductInfo() {
    console.log('click product query')
    wrapper.queryProductInfo(123, 123)
  }
  getProductTimestamp() {
    console.log('click product timestamp')
    wrapper.getProductTimestamp(123, 123)
  }
  addProduct() {
    console.log('add product ')
    let product = {
      gtin: 123,
      targetMarket: 'asia',
      brand: 'aeon',
      labelDescription: 'aeon',
      companyName: 'aeon',
      gpc: 123,
      imageUrlMedium: 'http://123.123.123.123',
      informationProviderGln: 123,
      languageCode: "en"
    }
    wrapper.addProduct(product)
  }
  modifyProduct() {
    console.log('modify product ')
    let product = {
      gtin: 123,
      targetMarket: 'asia',
      brand: 'aeon',
      labelDescription: 'aeon',
      companyName: 'aeon',
      gpc: 123,
      imageUrlMedium: 'http://123.123.123.123',
      informationProviderGln: 123,
      languageCode: "en"
    }
    wrapper.modifyProduct(product)
  }
  editProduct() {
    console.log('edit product')
    wrapper.editProduct(123, 123)
  }
  deleteProduct() {
    console.log('delete product')
    wrapper.deleteProduct(123, 123)
  }
  refreshProduct() {
    console.log('refresh product ')
    let product = {
      gtin: 123,
      targetMarket: 'asia',
      brand: 'aeon',
      labelDescription: 'aeon',
      companyName: 'aeon',
      gpc: 123,
      imageUrlMedium: 'http://123.123.123.123',
      informationProviderGln: 123,
      languageCode: "en"
    }
    wrapper.refreshProduct(product)
  }
  bulkUploadProducts() {
    console.log('bulk upload product ')
    let products = [
      { gtin: 123,
      targetMarket: 'asia',
      brand: 'aeon',
      labelDescription: 'aeon',
      companyName: 'aeon',
      gpc: 123,
      imageUrlMedium: 'http://123.123.123.123',
      informationProviderGln: 123,
      languageCode: "en" },
      { gtin: 456,
      targetMarket: 'asia',
      brand: 'aeon',
      labelDescription: 'aeon',
      companyName: 'aeon',
      gpc: 456,
      imageUrlMedium: 'http://123.123.123.123',
      informationProviderGln: 456,
      languageCode: "en" }
    ]
    wrapper.bulkUploadProducts(products)
  }
  handleFileUpload(ev) {
    ev.preventDefault();
    console.log(this.uploadInput.files[0])
    wrapper.fileUploadProducts(this.uploadInput.files[0]);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Front end for <code>gs1 cloud</code> wrapper testing
          </p>
<button onClick={() => this.queryProductInfo()}>product Query</button>
<button onClick={() => this.getProductTimestamp()}>product timestamp</button>
<br/>
<button onClick={() => this.addProduct()}>add product</button>
<button onClick={() => this.modifyProduct()}>modify product</button>
<br/>
<button onClick={() => this.editProduct()}>edit product</button>
<button onClick={() => this.deleteProduct()}>delete product</button>
<br/>
<button onClick={() => this.refreshProduct()}>refresh product</button>
<button onClick={() => this.bulkUploadProducts()}>bulk upload products</button>
<br/>
<div>
  <form onSubmit={this.handleFileUpload}>
     <div>
     <input
       ref={ref => {  this.uploadInput = ref; }}
       type="file"
     />
     </div>
    <div>
       <button>File Upload</button>
     </div>
   </form>
</div>

        </header>
      </div>
    );
  }
}

export default App;
