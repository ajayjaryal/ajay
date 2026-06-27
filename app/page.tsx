import Header from '../components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Demo content to show the header in context */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to AdWords PPC Expert
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional PPC management services designed to maximize your return on investment 
            through intelligent advertising strategies and data-driven optimization.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Google Ads Management</h3>
              <p className="text-gray-600">Expert management of your Google Ads campaigns for maximum ROI and performance.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">PPC Strategy Consulting</h3>
              <p className="text-gray-600">Strategic consulting to optimize your PPC approach and achieve better results.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Analysis</h3>
              <p className="text-gray-600">Comprehensive analysis and reporting to track and improve campaign performance.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}