import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import axios from 'axios';

export interface PatientData {
  age: number;
  gender: string;
  bloodPressureSystolic: number;
  bloodPressureDiastolic: number;
  cholesterol: number;
  ecgResult: string;
  heartRate: number;
}

function PatientInputPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<PatientData>({
    age: 0,
    gender: '',
    bloodPressureSystolic: 0,
    bloodPressureDiastolic: 0,
    cholesterol: 0,
    ecgResult: '',
    heartRate: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'gender' || name === 'ecgResult' ? value : Number(value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/predict', formData);

      navigate('/result', { state: { result: response.data, patientData: formData } });
    } catch (error) {
      console.error('Error analyzing patient data:', error);
      alert('Error connecting to the prediction service. Please ensure the backend is running.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-6 font-semibold"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Patient Data Input
          </h1>
          <p className="text-gray-600 mb-8">
            Enter historical medical data for risk assessment
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Age (years)
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age || ''}
                  onChange={handleChange}
                  required
                  min="1"
                  max="120"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 45"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Blood Pressure - Systolic (mmHg)
                </label>
                <input
                  type="number"
                  name="bloodPressureSystolic"
                  value={formData.bloodPressureSystolic || ''}
                  onChange={handleChange}
                  required
                  min="70"
                  max="200"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 120"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Blood Pressure - Diastolic (mmHg)
                </label>
                <input
                  type="number"
                  name="bloodPressureDiastolic"
                  value={formData.bloodPressureDiastolic || ''}
                  onChange={handleChange}
                  required
                  min="40"
                  max="130"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 80"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Cholesterol (mg/dL)
                </label>
                <input
                  type="number"
                  name="cholesterol"
                  value={formData.cholesterol || ''}
                  onChange={handleChange}
                  required
                  min="100"
                  max="400"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 200"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ECG Result
                </label>
                <select
                  name="ecgResult"
                  value={formData.ecgResult}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select ECG Result</option>
                  <option value="normal">Normal</option>
                  <option value="abnormal">Abnormal</option>
                  <option value="st-t-abnormality">ST-T Abnormality</option>
                  <option value="left-ventricular-hypertrophy">Left Ventricular Hypertrophy</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Heart Rate (bpm)
                </label>
                <input
                  type="number"
                  name="heartRate"
                  value={formData.heartRate || ''}
                  onChange={handleChange}
                  required
                  min="40"
                  max="200"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 72"
                />
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-6">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> This system analyzes historical medical data using deep learning
                models to predict health risks. No real-time sensors or IoT devices are required.
              </p>
            </div>

            <div className="flex justify-end mt-8">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading ? 'Analyzing...' : 'Analyze Risk'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PatientInputPage;
