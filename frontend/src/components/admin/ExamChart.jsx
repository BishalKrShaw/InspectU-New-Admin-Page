// import React from 'react';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from 'recharts';

// const examData = [
//   { examId: 'Exam 1', usersGivenExam: 150, alertsGenerated: 25 },
//   { examId: 'Exam 2', usersGivenExam: 120, alertsGenerated: 15 },
//   { examId: 'Exam 3', usersGivenExam: 180, alertsGenerated: 30 },
//   { examId: 'Exam 4', usersGivenExam: 200, alertsGenerated: 50 },
//   { examId: 'Exam 5', usersGivenExam: 140, alertsGenerated: 20 },
//   { examId: 'Exam 6', usersGivenExam: 160, alertsGenerated: 35 },
//   { examId: 'Exam 7', usersGivenExam: 175, alertsGenerated: 40 },
//   { examId: 'Exam 8', usersGivenExam: 190, alertsGenerated: 28 },
//   { examId: 'Exam 9', usersGivenExam: 210, alertsGenerated: 60 },
//   { examId: 'Exam 10', usersGivenExam: 220, alertsGenerated: 45 },
// ];

// const CustomTooltip = ({ payload, label }) => {
//   if (!payload || !payload.length) return null;
//   const data = payload[0].payload;
//   return (
//     <div style={{ backgroundColor: '#111117', color: '#626786', padding: '10px', borderRadius: '5px' }}>
//       <p>{label}</p>
//       <p>Users Given Exam: {data.usersGivenExam}</p>
//       <p>Alerts Generated: {data.alertsGenerated}</p>
//     </div>
//   );
// };

// const ExamChart = () => {
//   return (
//     <ResponsiveContainer width="100%" height="100%">
//       <BarChart data={examData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//         <XAxis dataKey="examId" />
//         <YAxis />
//         <Tooltip content={<CustomTooltip />} />
//         <Legend />

//         {/* Bars for Users Given Exam with Low Opacity */}
//         <Bar dataKey="usersGivenExam" fill="#9131B6" name="Users Given Exam" barSize={30} />

//         {/* Bars for Alerts Generated */}
//         <Bar dataKey="alertsGenerated" fill="#F23142" name="Alerts Generated" barSize={30} />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default ExamChart;


import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const examData = [
    { examId: 'Exam 1', usersGivenExam: 150, alertsGenerated: 25 },
    { examId: 'Exam 2', usersGivenExam: 120, alertsGenerated: 15 },
    { examId: 'Exam 3', usersGivenExam: 180, alertsGenerated: 30 },
    { examId: 'Exam 4', usersGivenExam: 200, alertsGenerated: 50 },
    { examId: 'Exam 5', usersGivenExam: 140, alertsGenerated: 20 },
    { examId: 'Exam 6', usersGivenExam: 160, alertsGenerated: 35 },
    { examId: 'Exam 7', usersGivenExam: 175, alertsGenerated: 40 },
    { examId: 'Exam 8', usersGivenExam: 190, alertsGenerated: 28 },
    { examId: 'Exam 9', usersGivenExam: 210, alertsGenerated: 60 },
    { examId: 'Exam 10', usersGivenExam: 220, alertsGenerated: 45 },
  ];

  const CustomTooltip = ({ payload, label }) => {
      if (!payload || !payload.length) return null;
      const data = payload[0].payload;
      return (
        <div style={{ backgroundColor: '#111117', color: '#626786', padding: '10px', borderRadius: '5px' }}>
          <p>{label}</p>
          <p>Users Given Exam: {data.usersGivenExam}</p>
          <p>Alerts Generated: {data.alertsGenerated}</p>
        </div>
      );
    };

const ExamChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={examData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="examId" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />

        {/* Line for Users Given Exam */}
        <Line type="monotone" dataKey="usersGivenExam" stroke="rgba(14, 119, 216, 0.3)" activeDot={{ r: 8 }} name="Users Given Exam" />

        {/* Line for Alerts Generated */}
        <Line type="monotone" dataKey="alertsGenerated" stroke="#ffcc00" activeDot={{ r: 8 }} name="Alerts Generated" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ExamChart;


// import React from 'react';
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from 'recharts';

// const examData = [
//   { examId: 'Exam 1', usersGivenExam: 150, alertsGenerated: 25 },
//   { examId: 'Exam 2', usersGivenExam: 120, alertsGenerated: 15 },
//   { examId: 'Exam 3', usersGivenExam: 180, alertsGenerated: 30 },
//   { examId: 'Exam 4', usersGivenExam: 200, alertsGenerated: 50 },
//   { examId: 'Exam 5', usersGivenExam: 140, alertsGenerated: 20 },
//   { examId: 'Exam 6', usersGivenExam: 160, alertsGenerated: 35 },
//   { examId: 'Exam 7', usersGivenExam: 175, alertsGenerated: 40 },
//   { examId: 'Exam 8', usersGivenExam: 190, alertsGenerated: 28 },
//   { examId: 'Exam 9', usersGivenExam: 210, alertsGenerated: 60 },
//   { examId: 'Exam 10', usersGivenExam: 220, alertsGenerated: 45 },
// ];

// // Custom Tooltip for Area Chart
// const CustomTooltip = ({ payload, label }) => {
//   if (!payload || !payload.length) return null;
//   const data = payload[0].payload;
//   return (
//     <div style={{ backgroundColor: '#111117', color: '#626786', padding: '10px', borderRadius: '5px' }}>
//       <p>{label}</p>
//       <p>Users Given Exam: {data.usersGivenExam}</p>
//       <p>Alerts Generated: {data.alertsGenerated}</p>
//     </div>
//   );
// };

// const ExamAreaChart = () => {
//   return (
//     <ResponsiveContainer width="100%" height="100%">
//       <AreaChart data={examData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//         <XAxis dataKey="examId" />
//         <YAxis />
//         <Tooltip content={<CustomTooltip />} />
//         <Legend />

//         {/* Area for Users Given Exam */}
//         <Area
//           type="monotone"
//           dataKey="usersGivenExam"
//           stroke="rgba(14, 119, 216, 0.3)"
//           fill="rgba(14, 119, 216, 0.3)"
//           name="Users Given Exam"
//         />

//         {/* Area for Alerts Generated */}
//         <Area
//           type="monotone"
//           dataKey="alertsGenerated"
//           stroke="#ffcc00"
//           fill="#ffcc00"
//           name="Alerts Generated"
//         />
//       </AreaChart>
//     </ResponsiveContainer>
//   );
// };

// export default ExamAreaChart;
