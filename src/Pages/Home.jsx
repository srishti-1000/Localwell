
import Sidebar from "../components/Sidebar";
import AccountManager from "../components/AccountManager";

const Home = () => {
  return (
    <div className="flex justify-center min-h-screen bg-[#00000014] px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex flex-col md:flex-row rounded-xl shadow-lg bg-white overflow-hidden w-full">
      
        <div className="w-full md:w-64 border-b md:border-b-0 md:border-r bg-[#F5F5F5]">
          <Sidebar />
        </div>

        <div className="flex-1 p-4">
          <AccountManager />
        </div>
      </div>
    </div>
  );
};

export default Home;
