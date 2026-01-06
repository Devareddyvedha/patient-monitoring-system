import { useNavigate } from 'react-router-dom';
import { Activity } from 'lucide-react';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="flex items-center justify-center mb-8">
            <Activity className="w-16 h-16 text-blue-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-800">
              Software-Based Patient Monitoring System
            </h1>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Using Deep Learning
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              A modern approach to healthcare monitoring that leverages historical medical data
              and deep learning algorithms to predict patient health risks and provide early warnings.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Key Features
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>No sensors / No wearables:</strong> Software-only solution</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>No IoT hardware required:</strong> Cost-effective and scalable</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Historical data analysis:</strong> Utilizing past patient records</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Deep learning models:</strong> Advanced risk prediction algorithms</span>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Why Software-Based Monitoring?
            </h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              Traditional healthcare monitoring systems rely heavily on physical sensors and IoT hardware,
              which are expensive, require maintenance, and limit scalability. Our system addresses these
              challenges by:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li>• Eliminating hardware costs and dependencies</li>
              <li>• Leveraging existing historical medical records</li>
              <li>• Providing scalable risk assessment for large populations</li>
              <li>• Offering decision support for healthcare professionals</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Target Users
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">👨‍⚕️</span>
                </div>
                <p className="font-semibold text-gray-700">Doctors</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">📊</span>
                </div>
                <p className="font-semibold text-gray-700">Medical Analysts</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🎓</span>
                </div>
                <p className="font-semibold text-gray-700">Researchers</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('/input')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-md"
            >
              Start Patient Risk Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
