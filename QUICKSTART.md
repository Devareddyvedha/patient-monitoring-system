# Quick Start Guide

## Software-Based Patient Monitoring System Using Deep Learning

### What You Have

A complete, production-ready frontend for a healthcare risk prediction system with:
- Clean, academic interface
- 3 pages: Home, Patient Input, Risk Analysis Results
- React + TypeScript + Tailwind CSS
- Sample backend implementation included

---

## Running the Application

### Option 1: Frontend Only (Mock Data)

If you just want to see the interface without predictions:

```bash
npm run dev
```

Visit: `http://localhost:5173`

**Note:** Without the backend, clicking "Analyze Risk" will show an error. You can explore the UI and input form.

---

### Option 2: Full System (Frontend + Backend)

#### Step 1: Start the Backend

```bash
cd backend
pip install -r requirements.txt
python app.py
```

Backend runs on: `http://localhost:5000`

#### Step 2: Start the Frontend (in a new terminal)

```bash
npm run dev
```

Frontend runs on: `http://localhost:5173`

---

## Using the System

1. **Home Page**: Read about the project
2. Click **"Start Patient Risk Analysis"**
3. **Input Page**: Fill in patient data
   - Age: 45
   - Gender: Male
   - BP Systolic: 140
   - BP Diastolic: 90
   - Cholesterol: 240
   - ECG: Abnormal
   - Heart Rate: 85
4. Click **"Analyze Risk"**
5. **Result Page**: View risk classification and recommendations

---

## Project Structure

```
project/
├── src/
│   ├── pages/
│   │   ├── HomePage.tsx           # Project overview
│   │   ├── PatientInputPage.tsx   # Data input form
│   │   └── ResultPage.tsx         # Risk results
│   └── App.tsx                    # Main routing
├── backend/
│   ├── app.py                     # Flask API server
│   ├── requirements.txt           # Python dependencies
│   └── README.md                  # Backend docs
└── README.md                      # Full documentation
```

---

## Key Features

### No Hardware Required
- No sensors, no wearables, no IoT devices
- Software-only solution using historical data
- Cost-effective and scalable

### Clean Academic Design
- Professional, minimal interface
- Suitable for presentations and demos
- Easy to understand and navigate

### API Integration
- Ready for deep learning model integration
- Sample backend included
- Easy to replace with your trained model

---

## Next Steps

### For Development:
1. Replace sample backend with your trained deep learning model
2. Customize risk calculation logic
3. Add data validation and error handling
4. Implement proper logging

### For Production:
1. Use a proper WSGI server (Gunicorn)
2. Add authentication if needed
3. Set up database for storing patient records
4. Implement proper security measures
5. Deploy backend and frontend separately

---

## Integrating Your Deep Learning Model

Edit `backend/app.py` and replace the `calculate_risk_score()` function:

```python
import tensorflow as tf  # or PyTorch, etc.

model = tf.keras.models.load_model('your_model.h5')

def calculate_risk_score(data):
    # Preprocess input
    features = preprocess(data)

    # Get prediction
    prediction = model.predict(features)

    return float(prediction[0])
```

---

## Troubleshooting

### "Error connecting to prediction service"
- Make sure backend is running on port 5000
- Check backend terminal for errors

### Port already in use
- Change port in `vite.config.ts` (frontend)
- Change port in `backend/app.py` (backend)

### CORS errors
- Backend has CORS enabled
- Check browser console for details

---

## Resources

- **Full README**: `README.md` - Complete documentation
- **Backend Docs**: `backend/README.md` - API details
- **Frontend**: Built with React 18, TypeScript, Vite
- **Backend**: Flask with sample prediction logic

---

## Support

This is an academic project demonstrating software-based patient monitoring.

**Target Users:**
- Doctors (decision support)
- Medical analysts (risk assessment)
- Healthcare students (educational tool)
- Researchers (academic research)

**Important:** This is a decision-support tool, not a medical diagnostic system. Always consult qualified healthcare professionals for medical decisions.

---

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Run frontend development server
npm run dev

# Build for production
npm run build

# Type check
npm run typecheck

# Install backend dependencies
cd backend && pip install -r requirements.txt

# Run backend server
python backend/app.py
```

---

Enjoy your software-based patient monitoring system!
