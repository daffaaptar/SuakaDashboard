import Sidebar from "./components/Dashboard/Sidebar"; 
import Navbar from "./components/Dashboard/Navbar"; 

const Home = () => {
  const totalProperties = 120; 
  const totalRenters = 85;     

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar />
        <div className="p-6 bg-background min-h-screen">
          {/* Header */}
          <h1 className="text-2xl text-black font-semibold mb-4">Good Evening User !</h1>
          
          {/* Card Section */}
          <div className="grid grid-cols-2 gap-6">
            {/* Total Properties Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700">Total Properties</h2>
              <p className="text-4xl font-bold text-blue-500 mt-4">{totalProperties}</p>
              <p className="text-gray-500 mt-2">Currently managed properties</p>
            </div>

            {/* Total Renters Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700">Total Renters</h2>
              <p className="text-4xl font-bold text-green-500 mt-4">{totalRenters}</p>
              <p className="text-gray-500 mt-2">Currently active tenants</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
