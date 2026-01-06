from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    """
    Endpoint to predict patient health risk based on historical medical data.
    This is a sample implementation - replace with actual deep learning model.
    """
    data = request.json

    risk_score = calculate_risk_score(data)

    if risk_score < 0.33:
        risk_level = "low"
        warning = "Low risk detected. Patient vital signs are within normal ranges. Continue regular health monitoring and maintain healthy lifestyle habits."
    elif risk_score < 0.66:
        risk_level = "medium"
        warning = "Medium risk detected. Some health indicators show deviation from optimal ranges. Recommend follow-up consultation and lifestyle modifications."
    else:
        risk_level = "high"
        warning = "High risk detected. Multiple health indicators suggest significant health concerns. Immediate medical consultation recommended."

    return jsonify({
        "riskLevel": risk_level,
        "confidence": risk_score,
        "warning": warning
    })


def calculate_risk_score(data):
    """
    Calculate risk score based on patient data.
    This is a simple rule-based system - replace with your trained deep learning model.

    In production, this should call your trained neural network model
    that has been trained on historical patient data.
    """
    score = 0.0

    age = data.get('age', 0)
    if age > 60:
        score += 0.2
    elif age > 45:
        score += 0.1

    bp_systolic = data.get('bloodPressureSystolic', 0)
    bp_diastolic = data.get('bloodPressureDiastolic', 0)
    if bp_systolic > 140 or bp_diastolic > 90:
        score += 0.3
    elif bp_systolic > 130 or bp_diastolic > 85:
        score += 0.15

    cholesterol = data.get('cholesterol', 0)
    if cholesterol > 240:
        score += 0.2
    elif cholesterol > 200:
        score += 0.1

    ecg_result = data.get('ecgResult', '')
    if ecg_result == 'left-ventricular-hypertrophy':
        score += 0.25
    elif ecg_result == 'abnormal' or ecg_result == 'st-t-abnormality':
        score += 0.15

    heart_rate = data.get('heartRate', 0)
    if heart_rate > 100:
        score += 0.15
    elif heart_rate < 50:
        score += 0.1

    return min(score, 0.99)


@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({"status": "healthy", "message": "Backend is running"})


if __name__ == '__main__':
    print("=" * 60)
    print("Patient Monitoring System - Backend Server")
    print("=" * 60)
    print("Server running on: http://localhost:5000")
    print("API endpoint: /predict")
    print("Health check: /health")
    print("=" * 60)
    print("\nNote: This is a sample implementation.")
    print("Replace calculate_risk_score() with your trained deep learning model.")
    print("=" * 60)
    app.run(host='0.0.0.0', port=5000, debug=True)
