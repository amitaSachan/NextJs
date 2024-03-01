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
        <p>{item.title}</p>
      ))}
    </>
  );
};
export default ServerComponent;
