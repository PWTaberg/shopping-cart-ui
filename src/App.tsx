import Header from "./components/Header";
import ProductList from './components/ProductList'


const App = () => {
  return (
    <>
    <p className='text-blue-400 text-lg'>Hello World</p>
      <Header />
      <div className="min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 pl-6">🛒 Product Catalog</h1>
        <ProductList />
      </div>
    </>
  );
};

export default App;
