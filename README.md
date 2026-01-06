# Software-Based Patient Monitoring System Using Deep Learning

A modern, academic frontend for healthcare risk prediction using historical patient data and deep learning models.

## Project Overview

This system provides a **software-only** approach to patient monitoring that:
- ✅ Uses historical medical data instead of real-time sensors
- ✅ Eliminates IoT hardware dependencies
- ✅ Provides cost-effective and scalable risk assessment
- ✅ Serves as a decision-support tool for healthcare professionals

**No sensors, no wearables, no cloud dependency required.**

## Features

### 1. Home Page
- Project introduction and overview
- Clear explanation of software-based monitoring approach
- Key features highlighting no hardware requirements
- Target user information (doctors, analysts, researchers)

### 2. Patient Data Input Page
- Clean form interface for entering historical medical data
- Input fields include:
  - Age
  - Gender
  - Blood Pressure (Systolic/Diastolic)
  - Cholesterol levels
  - ECG results
  - Heart rate
- Form validation and user-friendly interface

### 3. Risk Analysis Result Page
- Risk classification display (Low/Medium/High Risk)
- Confidence percentage
- Early warning messages
- Patient data summary
- Clear visual indicators using color coding

## Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Routing:** React Router DOM
- **HTTP Client:** Axios
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Build Tool:** Vite

## Folder Structure

```
project/
├── src/
│   ├── pages/
│   │   ├── HomePage.tsx           # Landing page with project overview
│   │   ├── PatientInputPage.tsx   # Patient data input form
│   │   └── ResultPage.tsx         # Risk analysis results display
│   ├── App.tsx                    # Main app with routing
│   ├── main.tsx                   # Application entry point
│   └── index.css                  # Global styles
├── public/                        # Static assets
├── package.json                   # Dependencies
└── vite.config.ts                # Vite configuration with API proxy
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Run the Frontend

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Backend Integration

### API Endpoint

The frontend is configured to call a backend API at `/api/predict`. You need to set up a backend server that implements this endpoint.

### Expected API Request Format

**POST** `/predict`

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

### Expected API Response Format

```json
{
  "riskLevel": "high",
  "confidence": 0.87,
  "warning": "High risk detected. Elevated blood pressure and cholesterol levels combined with abnormal ECG results indicate significant cardiovascular risk. Immediate medical consultation recommended."
}
```

**Response Fields:**
- `riskLevel`: String - "low", "medium", or "high"
- `confidence`: Number - Confidence score between 0 and 1
- `warning`: String - Personalized warning message based on the risk level

### Sample Backend Implementation (Python/Flask)

Create a simple backend server to handle predictions:

```python
# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json

    # Your deep learning model prediction logic here
    # This is a placeholder - replace with actual model inference

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
    # Placeholder risk calculation
    # Replace this with your actual deep learning model
    score = 0.0

    # Age factor
    if data['age'] > 60:
        score += 0.2
    elif data['age'] > 45:
        score += 0.1

    # Blood pressure factor
    if data['bloodPressureSystolic'] > 140 or data['bloodPressureDiastolic'] > 90:
        score += 0.3

    # Cholesterol factor
    if data['cholesterol'] > 240:
        score += 0.2

    # ECG factor
    if data['ecgResult'] != 'normal':
        score += 0.2

    # Heart rate factor
    if data['heartRate'] > 100 or data['heartRate'] < 60:
        score += 0.1

    return min(score, 0.99)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```

**Install Flask dependencies:**
```bash
pip install flask flask-cors
```

**Run the backend:**
```bash
python backend/app.py
```

The backend will run on `http://localhost:5000`

### Proxy Configuration

The Vite config includes a proxy that forwards `/api/*` requests to `http://localhost:5000`. This means:
- Frontend makes requests to `/api/predict`
- Vite proxies them to `http://localhost:5000/predict`

## Usage Instructions

1. **Start Backend Server** (on port 5000)
2. **Start Frontend** (run `npm run dev`)
3. **Open Browser** to `http://localhost:5173`
4. **Navigate through the application:**
   - View project overview on home page
   - Click "Start Patient Risk Analysis"
   - Fill in patient medical data
   - Click "Analyze Risk"
   - View risk classification and recommendations

## Building for Production

```bash
npm run build
```

Built files will be in the `dist/` directory.

## Key Design Principles

- **Clean & Academic:** Simple, professional interface suitable for educational and research contexts
- **No Authentication:** Focused on demonstration and decision support
- **Software-Only:** No hardware, sensors, or IoT dependencies
- **Historical Data Focus:** Emphasizes analysis of past medical records
- **Decision Support:** Tool for healthcare professionals, not a replacement

## Target Users

- **Doctors:** Clinical decision support
- **Medical Analysts:** Health risk assessment
- **Healthcare Students:** Educational tool
- **Researchers:** Academic research and testing

## Notes

- This is a **decision-support tool**, not a medical diagnostic system
- Always consult qualified healthcare professionals for medical decisions
- The system demonstrates the concept of software-based patient monitoring
- Deep learning models should be properly trained and validated before deployment

## License

Academic/Educational Use
