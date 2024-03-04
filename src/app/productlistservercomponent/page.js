import ButtonComponent from "./buttonComponent";

const getProduct = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
};

const ServerComponent = async () => {
  const productlistt = await getProduct();
  console.log("ppppppppppppp", productlistt);
  return (
    <>
      <h1>Server Component Api Calling</h1>
      {productlistt.map((item) => (
       <div> <p>{item.id}-{item.title}</p>
       {/* ServerComponent with client component */}
       <ButtonComponent price={item.price} />
       </div>
      ))}
    </>
  );
};
export default ServerComponent;
