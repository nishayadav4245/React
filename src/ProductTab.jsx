
import Product from "./Product.jsx";
function ProductTab() {
 let styles={
display:"flex",
flexWrap:"wrap",
justifyContent:"center",
alignitems:"center",
  };
 
   
    return (
 <div style={styles}>
   
 <Product title="logitech MX Master" idx={0}/>
 <Product title="Apple Pencil (2nd Gen)" idx={1}/>
<Product title="Zebronics Zebronics Zeb-transformer" idx={2}/> 
<Product title="Peteronics Toad 23" idx={3}/>  


</div>
    );
}

export default ProductTab;