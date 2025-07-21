import React, { useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { Box, Typography, Divider, Link, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import pen from '../assets/pen.svg';
import Award from '../assets/Award.png';
import octicon_goal from '../assets/octicon_goal-16.png';
import InputDialog from './InputDialog';

const GaugeChart = ({ height }) => {
  const isTablet = useMediaQuery('(min-width:900px) and (max-width:1199.95px)');
  const chartHeight = isTablet ? 108 : 128;
  const chartWidth = isTablet ? 122 : 144;
  const date = new Date();
  const formatted = date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const [formValues, setFormValues] = useState({
    target: 20000,
    present: 12500,
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = (data) => {
    setFormValues(data);
  };

  const percentage = Math.min(
    100,
    Math.round((formValues.present / formValues.target) * 100)
  );

  const data = [
    { name: 'Achieved', value: percentage },
    { name: 'Remaining', value: 100 - percentage },
  ];
  const COLORS = ['#299D91', '#E0E0E0'];

  return (
    <Box
      // width={isTablet ? '320px' : '100%'}
      width="100%"
      height={height}
      bgcolor="white"
      borderRadius="8px"
      px={isTablet ? 1.5 : 3}
      py={isTablet ? 1.25 : 2.5}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box display="flex" flexDirection="column" gap={2}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" gap="10px">
            <Typography fontSize={22} fontWeight={800} lineHeight="32px">
              ${formValues.target.toLocaleString()}
            </Typography>
            <img
              src={pen}
              alt="pen"
              onClick={handleOpen}
              style={{ cursor: 'pointer' }}
            />
          </Box>
          <Link
            component={RouterLink}
            to="/balances"
            underline="none"
            sx={{
              fontSize: 14,
              lineHeight: '20px',
              color: '#525256',
            }}
          >
            {formatted}
          </Link>
        </Box>

        <Divider />

        <Box
          height="128px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Box
            display="flex"
            flexDirection="column"
            width="144px"
            height="100%"
            py="6px"
            gap={3}
          >
            <Box height="44px" display="flex" gap="4px">
              <Box width="24px" height="24px">
                <img src={Award} alt="Award" />
              </Box>
              <Box>
                <Typography fontSize="12px" lineHeight="16px" color="#878787">
                  Target Achieved
                </Typography>
                <Typography fontSize="16px" fontWeight="700" lineHeight="24px">
                  ${formValues.present.toLocaleString()}
                </Typography>
              </Box>
            </Box>

            <Box height="44px" display="flex" gap="4px">
              <Box width="24px" height="24px">
                <img src={octicon_goal} alt="Goal" />
              </Box>
              <Box>
                <Typography fontSize="12px" lineHeight="16px" color="#878787">
                  This Month Target
                </Typography>
                <Typography fontSize="16px" fontWeight="700" lineHeight="24px">
                  ${formValues.target.toLocaleString()}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box height={chartHeight} width={chartWidth}>
            <PieChart width={chartWidth} height={chartHeight}>
              <Pie
                data={data}
                innerRadius={35}
                outerRadius={50}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
            <Box
              sx={{
                position: 'relative',
                top: '-70px',
                textAlign: 'center',
              }}
            >
              <Typography fontSize="14px" fontWeight={700} color="#299D91">
                {percentage}%
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <InputDialog
        open={open}
        onClose={handleClose}
        onSave={handleSave}
        formValues={formValues}
        setFormValues={setFormValues}
      />
    </Box>
  );
};

export default GaugeChart;
