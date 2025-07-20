import React, { useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { Box, Typography, Divider, Button, useMediaQuery } from '@mui/material';
import InputDialog from './InputDialog';
// import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

import Award from '../assets/Award.png';
import octicon_goal from '../assets/octicon_goal-16.png';

const GaugeChart1 = ({ height }) => {
  const isTablet = useMediaQuery('(min-width:900px) and (max-width:1199.95px)');

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
      boxShadow={12}
      width={isTablet ? '320px' : '100%'}
      height={height}
      bgcolor="white"
      borderRadius="8px"
      px={isTablet ? 1.5 : 3}
      py={isTablet ? 1.25 : 2.5}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      {/* Header Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography fontSize={16} fontWeight={600}>
          Savings Goal
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{
            width: '156px',
            fontSize: '12px',
            height: 32,
            textTransform: 'none',
            color: '#525256',
            bgcolor: '#E8E8E8',
            borderRadius: '4px',
            boxShadow: 0,
          }}
        >
          01 May ~ 31 May
        </Button>
      </Box>
      <Divider />

      {/* Body Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        mt={2}
      >
        {/* Left Stats */}
        <Box display="flex" flexDirection="column" gap={2}>
          <Box display="flex" gap={1.2} alignItems="center">
            <Box width="24px" height="24px">
              <img src={Award} alt="Award" width="100%" />
            </Box>
            <Box>
              <Typography fontSize="12px" color="#878787">
                Target Achieved
              </Typography>
              <Typography fontSize="16px" fontWeight={700}>
                ${formValues.present.toLocaleString()}
              </Typography>
            </Box>
          </Box>

          <Box display="flex" gap={1.2} alignItems="center">
            <Box width="24px" height="24px">
              <img src={octicon_goal} alt="Goal" width="100%" />
            </Box>
            <Box>
              <Typography fontSize="12px" color="#878787">
                This month Target
              </Typography>
              <Typography fontSize="16px" fontWeight={700}>
                ${formValues.target.toLocaleString()}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Gauge Chart */}
        <Box position="relative">
          <PieChart width={128} height={128}>
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
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
            }}
          >
            <Typography fontSize="14px" fontWeight={700} color="#299D91">
              {percentage}%
            </Typography>
          </Box>
          <Typography
            fontSize="10px"
            color="#878787"
            mt={-1}
            textAlign="center"
          >
            Target vs Achievement
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" gap={1.5} mt={1}>
        <Button
          onClick={handleOpen}
          variant="outlined"
          size="small"
          sx={{
            fontSize: '12px',
            fontWeight: '500',
            px: 2,
            borderRadius: '6px',
            color: '#299D91',
            textTransform: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            width: '142px',
            height: '32px',
          }}
        >
          Adjust Goal
          {/* <BorderColorOutlinedIcon
            sx={{ color: '#299D91', width: 16, height: 16 }}
          /> */}
        </Button>
      </Box>

      {/* Dialog */}
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

export default GaugeChart1;
