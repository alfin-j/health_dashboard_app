import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashBoardMain from './components/DashBoardMain';
import DashboardOverview from './components/pages/DashboardOverview';
import Appointment from './components/pages/Appointment';
import History from './components/pages/History';
import Statistics from './components/pages/Statistics';
import Tests from './components/pages/Tests';
import Chat from './components/pages/Chat';
import Support from './components/pages/Support';
import Setting from './components/pages/Setting';
import Calendar from './components/pages/Calendar';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="main-section">
          <div className="header">
            <Header />
          </div>

          <div className="dashboardmain">
            <Routes>
              <Route path="/" element={<DashBoardMain />} />
              <Route path="/dashboardoverview" element={<DashboardOverview />} />
              <Route path="/history" element={<History />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/tests" element={<Tests />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/support" element={<Support />} />
              <Route path="/setting" element={<Setting />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
