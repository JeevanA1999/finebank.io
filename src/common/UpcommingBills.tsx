import { Box, Typography, useMediaQuery } from '@mui/material';
const generatePastDate = (daysAfter: number): string => {
  const date = new Date();
  date.setDate(date.getDate() + daysAfter);
  const day = date.getDate();
  return `${day}`; //, ${month} ${year}
};
const bills = [
  {
    month: 'May',
    day: generatePastDate(0),
    name: 'Figma',
    type: 'Figma - Monthly',
    lastCharge: '14 May, 2022',
    amount: '$200',
  },
  {
    month: 'May',
    day: generatePastDate(1),
    name: 'Adobe',
    type: 'Adobe - Yearly',
    lastCharge: '17 Jun, 2023',
    amount: '$150',
  },
  {
    month: 'May',
    day: generatePastDate(2),
    name: 'Spotify',
    type: 'Spotify - Monthly',
    lastCharge: '10 Jun, 2023',
    amount: '$10',
  },
  {
    month: 'May',
    day: generatePastDate(3),
    name: 'Netflix',
    type: 'Netflix - Monthly',
    lastCharge: '01 Jul, 2023',
    amount: '$20',
  },
];

export default function UpcommingBills() {
  const isTablet = useMediaQuery('(min-width:900px) and (max-width:1199.95px)');

  return (
    <Box
      width={isTablet ? '320px' : '100%'}
      height="232px"
      bgcolor="white"
      borderRadius="8px"
      px={isTablet ? 1.5 : 3}
      py={isTablet ? 1.25 : 2.5}
      display="flex"
      flexDirection="column"
      gap={2}
    >
      <Box
        flex={1}
        overflow="auto"
        display="flex"
        flexDirection="column"
        p={'4px'}
        gap={3}
        sx={{
          '&::-webkit-scrollbar': {
            width: 6,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ccc',
            borderRadius: '4px',
          },
        }}
      >
        {bills.map((bill, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="space-between"
            gap="20px"
          >
            <Box display="flex" gap="12px" width="216px">
              {/* Date */}
              <Box
                width="44px"
                height="66px"
                bgcolor="#D2D2D240"
                borderRadius="8px"
                display="flex"
                flexDirection="column"
                p={1}
                alignItems="center"
              >
                <Typography
                  color="#666666"
                  fontSize="12px"
                  lineHeight="16px"
                  textAlign="center"
                >
                  {bill.month}
                </Typography>
                <Typography
                  color="black"
                  fontSize="22px"
                  lineHeight="32px"
                  fontWeight="800"
                >
                  {bill.day}
                </Typography>
              </Box>

              {/* Info */}
              <Box display="flex" flexDirection="column" gap={0.5}>
                <Typography color="#E73D1C" fontWeight={600} fontSize={14}>
                  {bill.name}
                </Typography>
                <Typography
                  color="#525256"
                  fontWeight={700}
                  fontSize={16}
                  lineHeight="24px"
                >
                  {bill.type}
                </Typography>
                <Typography
                  color="#9F9F9F"
                  fontWeight={400}
                  fontSize={12}
                  lineHeight="16px"
                >
                  Last Charge - {bill.lastCharge}
                </Typography>
              </Box>
            </Box>

            {/* Amount */}
            <Box display="flex" alignItems="center">
              <Box
                width="68px"
                height="40px"
                borderRadius="8px"
                border="1px solid #E8E8E8"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography fontSize="16px" fontWeight="700">
                  {bill.amount}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
