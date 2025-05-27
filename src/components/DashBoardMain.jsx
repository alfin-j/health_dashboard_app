import React from 'react';
import '../styles/DashBoardMain.css';
import DashboardOverview from './pages/DashboardOverview';
import Calendar from './pages/Calendar';
import ActivityFeed from './dashboards/ActivityFeed';
import UpcomingSchedule from './dashboards/UpcomingSchedule';

function DashBoardMain() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-column">
        <DashboardOverview />
        <ActivityFeed />
      </div>
      <div className="dashboard-column">
        <Calendar />
        <UpcomingSchedule />
      </div>
    </div>
  );
}

export default DashBoardMain;
