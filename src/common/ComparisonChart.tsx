// import {
//   Box,
//   Typography,
//   Select,
//   MenuItem,
//   FormControl,
//   useTheme,
// } from '@mui/material';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts';
// import { useState } from 'react';

// export default function ComparisonChart({
//   maxWidth,
//   title = 'Weekly Comparison',
//   data,
// }: {
//   maxWidth?: string;
//   title?: string;
//   data: {
//     name: string;
//     thisWeek?: number;
//     lastWeek?: number;
//     thisMonth?: number;
//     lastMonth?: number;
//   }[];
// }) {
//   const theme = useTheme();
//   const [selected, setSelected] = useState('both');

//   const isWeekly = data[0]?.thisWeek !== undefined;

//   return (
//     <Box bgcolor="white" p={2} width="100%" maxWidth={maxWidth} height="298px">
//       {/* Header Row */}
//       <Box display="flex" alignItems="center" mb={2}>
//         <Typography fontWeight={500} fontSize={14}>
//           {title}
//         </Typography>
//         <FormControl
//           variant="standard"
//           size="small"
//           sx={{ marginLeft: 1, marginTop: '6px' }}
//         >
//           <Select
//             value={selected}
//             onChange={(e) => setSelected(e.target.value)}
//             disableUnderline
//             sx={{
//               fontSize: 12,
//               fontWeight: 500,
//               color: theme.palette.text.secondary,
//               '& .MuiSelect-select': {
//                 paddingRight: '24px !important',
//               },
//             }}
//           >
//             <MenuItem value="both">Compare</MenuItem>
//             <MenuItem value="this">This {isWeekly ? 'Week' : 'Month'}</MenuItem>
//             <MenuItem value="last">Last {isWeekly ? 'Week' : 'Month'}</MenuItem>
//           </Select>
//         </FormControl>
//       </Box>

//       {/* Chart */}
//       <ResponsiveContainer width="100%" height="80%">
//         <BarChart data={data}>
//           <CartesianGrid vertical={false} strokeDasharray="3 3" />
//           <XAxis dataKey="name" tick={{ fontSize: 12 }} />
//           <YAxis
//             tick={{ fontSize: 12 }}
//             tickFormatter={(value) => `$${value / 1000}k`}
//           />
//           <Tooltip
//             formatter={(value) => `$${value.toLocaleString()}`}
//             cursor={{ fill: '#f5f5f5' }}
//           />
//           <Legend
//             iconType="circle"
//             wrapperStyle={{ fontSize: 12 }}
//             verticalAlign="top"
//             align="right"
//           />
//           {(selected === 'both' || selected === 'this') && (
//             <Bar
//               dataKey={isWeekly ? 'thisWeek' : 'thisMonth'}
//               fill="#299D91"
//               name={`This ${isWeekly ? 'Week' : 'Month'}`}
//               barSize={16}
//             />
//           )}
//           {(selected === 'both' || selected === 'last') && (
//             <Bar
//               dataKey={isWeekly ? 'lastWeek' : 'lastMonth'}
//               fill="#E0E0E0"
//               name={`Last ${isWeekly ? 'Week' : 'Month'}`}
//               barSize={16}
//             />
//           )}
//         </BarChart>
//       </ResponsiveContainer>
//     </Box>
//   );
// }

import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useState } from 'react';

interface ComparisonData {
  name: string;
  thisWeek?: number;
  lastWeek?: number;
  thisMonth?: number;
  lastMonth?: number;
}

interface Props {
  maxWidth?: string;
  title?: string;
  data: ComparisonData[];
}

export default function ComparisonChart({
  maxWidth,
  title = 'Weekly Comparison',
  data,
}: Props) {
  const theme = useTheme();
  const [selected, setSelected] = useState<'both' | 'this' | 'last'>('both');

  const isWeekly = data?.[0]?.thisWeek !== undefined;

  return (
    <Box bgcolor="white" p={2} width="100%" maxWidth={maxWidth} height="298px">
      {/* Header */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Typography fontWeight={500} fontSize={14}>
          {title}
        </Typography>
        <FormControl variant="standard" size="small">
          <Select
            value={selected}
            onChange={(e) =>
              setSelected(e.target.value as 'both' | 'this' | 'last')
            }
            disableUnderline
            sx={{
              fontSize: 12,
              fontWeight: 500,
              color: theme.palette.text.secondary,
              '& .MuiSelect-select': {
                paddingRight: '24px !important',
              },
            }}
          >
            <MenuItem value="both">Compare</MenuItem>
            <MenuItem value="this">This {isWeekly ? 'Week' : 'Month'}</MenuItem>
            <MenuItem value="last">Last {isWeekly ? 'Week' : 'Month'}</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => `$${value / 1000}k`}
          />
          <Tooltip
            formatter={(value: number) => `$${value.toLocaleString()}`}
            cursor={{ fill: '#f5f5f5' }}
          />
          <Legend
            iconType="circle"
            wrapperStyle={{ fontSize: 12 }}
            verticalAlign="top"
            align="right"
          />
          {(selected === 'both' || selected === 'this') && (
            <Bar
              dataKey={isWeekly ? 'thisWeek' : 'thisMonth'}
              fill="#299D91"
              name={`This ${isWeekly ? 'Week' : 'Month'}`}
              barSize={16}
            />
          )}
          {(selected === 'both' || selected === 'last') && (
            <Bar
              dataKey={isWeekly ? 'lastWeek' : 'lastMonth'}
              fill="#E0E0E0"
              name={`Last ${isWeekly ? 'Week' : 'Month'}`}
              barSize={16}
            />
          )}
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}
