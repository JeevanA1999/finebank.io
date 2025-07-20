import {
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  Paper,
  Stack,
} from '@mui/material';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { useState } from 'react';

// Chart Data
const dataByMonth = {
  'Jan 2025': [
    { date: 'Jan 01', thisMonth: 1500, lastMonth: 1100 },
    { date: 'Jan 05', thisMonth: 3200, lastMonth: 1900 },
    { date: 'Jan 10', thisMonth: 2300, lastMonth: 2100 },
    { date: 'Jan 15', thisMonth: 3100, lastMonth: 2200 },
    { date: 'Jan 20', thisMonth: 3400, lastMonth: 2400 },
    { date: 'Jan 25', thisMonth: 3800, lastMonth: 2800 },
    { date: 'Jan 30', thisMonth: 4000, lastMonth: 3000 },
  ],
  'Feb 2025': [
    { date: 'Feb 01', thisMonth: 2000, lastMonth: 1500 },
    { date: 'Feb 05', thisMonth: 3100, lastMonth: 1900 },
    { date: 'Feb 10', thisMonth: 2900, lastMonth: 2500 },
    { date: 'Feb 15', thisMonth: 3300, lastMonth: 2700 },
    { date: 'Feb 20', thisMonth: 3500, lastMonth: 3000 },
    { date: 'Feb 25', thisMonth: 3700, lastMonth: 3200 },
    { date: 'Feb 28', thisMonth: 4000, lastMonth: 3400 },
  ],
  'Mar 2025': [
    { date: 'Mar 01', thisMonth: 2500, lastMonth: 1800 },
    { date: 'Mar 05', thisMonth: 6200, lastMonth: 2100 },
    { date: 'Mar 10', thisMonth: 3000, lastMonth: 2500 },
    { date: 'Mar 15', thisMonth: 2400, lastMonth: 2900 },
    { date: 'Mar 20', thisMonth: 4100, lastMonth: 3100 },
    { date: 'Mar 25', thisMonth: 1400, lastMonth: 3300 },
    { date: 'Mar 30', thisMonth: 6400, lastMonth: 3600 },
  ],
};

const currentYear = new Date().getFullYear();
const availableMonths = Object.keys(dataByMonth).filter((m) =>
  m.includes(currentYear.toString())
);

export default function SavingSummary() {
  const [month, setMonth] = useState('Mar 2025');
  const chartData = dataByMonth[month];

  return (
    <Paper elevation={12} sx={{ p: 2, bgcolor: 'white', height: '100%' }}>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={1.5}
        flexWrap="wrap"
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography fontWeight={600} fontSize={16}>
            Saving Summary
          </Typography>
          <FormControl size="small" variant="standard">
            <Select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              disableUnderline
              sx={{ fontSize: 14, minWidth: 100 }}
            >
              {availableMonths.map((m) => (
                <MenuItem key={m} value={m}>
                  {m}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>

        {/* Legend */}
        <Stack
          direction="row"
          spacing={3}
          alignItems="center"
          mt={{ xs: 1, sm: 0 }}
        >
          <Box display="flex" alignItems="center">
            <Box
              sx={{
                width: 16,
                height: 10,
                bgcolor: '#299D91',
                borderRadius: 2,
                mr: 1,
              }}
            />
            <Typography fontSize={14} color="#555">
              This month
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Box
              sx={{
                width: 16,
                height: 10,
                bgcolor: '#d0d0d0',
                borderRadius: 2,
                mr: 1,
              }}
            />
            <Typography fontSize={14} color="#555">
              Last month
            </Typography>
          </Box>
        </Stack>
      </Box>

      {/* Chart */}

      <Box sx={{ height: { xs: '80%', sm: '90%' } }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="thisMonth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#299D91" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#299D91" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="lastMonth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#d0d0d0" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#d0d0d0" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9F9F9F', fontSize: 13 }}
            />
            <YAxis
              tickFormatter={(val) => `$${val}`}
              domain={[0, 'dataMax + 1000']}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9F9F9F', fontSize: 13 }}
            />
            <Tooltip formatter={(val) => `$${val}`} />
            <Area
              type="monotone"
              dataKey="thisMonth"
              stroke="#299D91"
              fill="url(#thisMonth)"
              strokeWidth={2}
              name="This month"
            />
            <Area
              type="monotone"
              dataKey="lastMonth"
              stroke="#ccc"
              fill="url(#lastMonth)"
              strokeDasharray="4 4"
              strokeWidth={1.5}
              name="Same period last month"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}
