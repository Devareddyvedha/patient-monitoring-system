import { useLocation, useNavigate } from 'react-router-dom';
import { AlertCircle, CheckCircle, AlertTriangle, ArrowLeft } from 'lucide-react';
import { PatientData } from './PatientInputPage';

interface PredictionResult {
  riskLevel: 'low' | 'medium' | 'high';
  confidence: number;
  warning: string;
}

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { result, patientData } = location.state as {
    result: PredictionResult;
    patientData: PatientData;
  } || {};

  if (!result || !patientData) {
    navigate('/input');
    return null;
  }

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low':
        return 'text-green-600';
      case 'medium':
        return 'text-yellow-600';
      case 'high':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getRiskBgColor = (level: string) => {
    switch (level) {
      case 'low':
        return 'bg-green-50 border-green-200';
      case 'medium':
        return 'bg-yellow-50 border-yellow-200';
      case 'high':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'low':
        return <CheckCircle className="w-16 h-16 text-green-600" />;
      case 'medium':
        return <AlertTriangle className="w-16 h-16 text-yellow-600" />;
      case 'high':
        return <AlertCircle className="w-16 h-16 text-red-600" />;
      default:
        return <AlertCircle className="w-16 h-16 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <button
          onClick={() => navigate('/input')}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-6 font-semibold"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Input
        </button>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Risk Analysis Result
          </h1>
          <p className="text-gray-600 mb-8">
            Prediction based on historical data analysis
          </p>

          <div className={`${getRiskBgColor(result.riskLevel)} border-2 rounded-lg p-8 mb-8`}>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                {getRiskIcon(result.riskLevel)}
              </div>
              <h2 className="text-3xl font-bold mb-2">
                <span className={getRiskColor(result.riskLevel)}>
                  {result.riskLevel.toUpperCase()} RISK
                </span>
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                Confidence: {(result.confidence * 100).toFixed(1)}%
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Early Warning Message
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {result.warning}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Patient Data Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Age</p>
                <p className="text-lg font-semibold text-gray-800">{patientData.age} years</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Gender</p>
                <p className="text-lg font-semibold text-gray-800 capitalize">{patientData.gender}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Blood Pressure</p>
                <p className="text-lg font-semibold text-gray-800">
                  {patientData.bloodPressureSystolic}/{patientData.bloodPressureDiastolic} mmHg
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Cholesterol</p>
                <p className="text-lg font-semibold text-gray-800">{patientData.cholesterol} mg/dL</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">ECG Result</p>
                <p className="text-lg font-semibold text-gray-800 capitalize">
                  {patientData.ecgResult.replace('-', ' ')}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Heart Rate</p>
                <p className="text-lg font-semibold text-gray-800">{patientData.heartRate} bpm</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              About This Analysis
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              This risk assessment is generated using deep learning models trained on historical patient
              data. The system does not rely on real-time sensors, IoT hardware, or cloud-based services.
              It serves as a decision-support tool for healthcare professionals to identify potential
              health risks early and take preventive measures.
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate('/input')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-md"
            >
              Analyze Another Patient
            </button>
            <button
              onClick={() => navigate('/')}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-md"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
