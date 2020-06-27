import React, { Component } from 'react';
const ProductContext = React.createContext();
//provider
//consumer

 class ProductProvider extends Component {
    render(){
        return (
            <ProductContext.Provider value="hello from phone app">
                {this.props.children}
            </ProductContext.Provider>
            
        );
}
}
const ProductConsumer = ProductContext.Consumer;

export{ ProductProvider, ProductConsumer };