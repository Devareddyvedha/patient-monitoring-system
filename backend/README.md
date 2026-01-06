# Backend Server for Patient Monitoring System

## Overview

This is a sample Flask backend that implements the `/predict` API endpoint for the patient monitoring system.

**Important:** This is a placeholder implementation using simple rule-based logic. In production, you should replace the `calculate_risk_score()` function with calls to your trained deep learning model.

## Installation

### Prerequisites
- Python 3.8 or higher
- pip

### Steps

1. Navigate to the backend directory:
```bash
cd backend
```

2. (Optional) Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

## Running the Server

```bash
python app.py
```

The server will start on `http://localhost:5000`

## API Endpoints

### POST /predict

Analyzes patient data and returns risk assessment.

**Request Body:**
```json
{
  "age": 45,
  "gender": "male",
  "bloodPressureSystolic": 140,
  "bloodPressureDiastolic": 90,
  "cholesterol": 240,
  "ecgResult": "abnormal",
  "heartRate": 85
}
```

**Response:**
```json
{
  "riskLevel": "high",
  "confidence": 0.87,
  "warning": "High risk detected. Multiple health indicators suggest significant health concerns. Immediate medical consultation recommended."
}
```

### GET /health

Health check endpoint.

**Response:**
```json
{
  "status": "healthy",
  "message": "Backend is running"
}
```

## Integrating Your Deep Learning Model

To integrate your trained deep learning model:

1. Load your model in the Flask app (e.g., TensorFlow, PyTorch, scikit-learn)
2. Replace the `calculate_risk_score()` function with model inference
3. Ensure proper preprocessing of input data
4. Add any additional dependencies to `requirements.txt`

### Example with TensorFlow:

```python
import tensorflow as tf
import numpy as np

# Load your trained model
model = tf.keras.models.load_model('path/to/your/model.h5')

def calculate_risk_score(data):
    # Preprocess data to match model input format
    features = np.array([[
        data['age'],
        1 if data['gender'] == 'male' else 0,
        data['bloodPressureSystolic'],
        data['bloodPressureDiastolic'],
        data['cholesterol'],
        encode_ecg(data['ecgResult']),
        data['heartRate']
    ]])

    # Get prediction
    prediction = model.predict(features)
    return float(prediction[0][0])
```

## Testing

Test the endpoint using curl:

```bash
curl -X POST http://localhost:5000/predict \
  -H "Content-Type: application/json" \
  -d '{
    "age": 55,
    "gender": "male",
    "bloodPressureSystolic": 150,
    "bloodPressureDiastolic": 95,
    "cholesterol": 250,
    "ecgResult": "abnormal",
    "heartRate": 90
  }'
```

## Notes

- This is a development server. For production, use a proper WSGI server like Gunicorn
- CORS is enabled for development. Configure appropriately for production
- Add proper error handling and input validation for production use
- Implement logging for monitoring and debugging
