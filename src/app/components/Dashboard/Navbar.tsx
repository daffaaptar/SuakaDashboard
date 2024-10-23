const Sidebar = () => {
    return ( 
        <header className="flex-1 bg-white p-6 border-b">
          <div className="flex justify-between items-center ">
            <h1 className="text-xl text-black font-semibold">Dashboard</h1>
            <div className="relative">
              <button className="flex items-center text-gray-400">
                Management
              </button>
            </div>
          </div>
        </header>
        );
    }
export default Sidebar;
