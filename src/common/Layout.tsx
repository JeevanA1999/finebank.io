// import React, { useState } from 'react';
// import { Box, useTheme, useMediaQuery } from '@mui/material';
// import Navbar from './Navbar';
// import HeaderBar from './HeaderBar';

// export default function Layout({ children }: { children: React.ReactNode }) {
//   const theme = useTheme();
//   const isBelow1440 = useMediaQuery('(max-width:1439.95px)');
//   const [open, setOpen] = useState(false);

//   return (
//     <Box display="flex" height="100vh" width="100vw" overflow="hidden">
//       {!isBelow1440 && <Navbar />}
//       {isBelow1440 && open && (
//         <>
//           <Box
//             onClick={() => setOpen(false)}
//             sx={{
//               position: 'fixed',
//               inset: 0,
//               bgcolor: 'rgba(0,0,0,0.4)',
//               zIndex: 1200,
//             }}
//           />
//           <Navbar onClose={() => setOpen(false)} />
//         </>
//       )}
//       <Box flex={1} display="flex" flexDirection="column">
//         <HeaderBar onToggleSidebar={() => setOpen(true)} />
//         <Box flex={1} overflow="auto">
//           {children}
//         </Box>
//       </Box>
//     </Box>
//   );
// }

import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Navbar from './Navbar';
import HeaderBar from './HeaderBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const isBelow1024 = useMediaQuery('(max-width:1023.95px)');
  const [open, setOpen] = useState(false);

  return (
    <Box display="flex" height="100vh" width="100vw" overflow="hidden">
      {!isBelow1024 && <Navbar />}
      {isBelow1024 && open && (
        <>
          <Box
            onClick={() => setOpen(false)}
            sx={{
              position: 'fixed',
              inset: 0,
              bgcolor: 'rgba(0,0,0,0.4)',
              zIndex: 1200,
            }}
          />
          <Navbar onClose={() => setOpen(false)} />
        </>
      )}
      <Box flex={1} display="flex" flexDirection="column">
        <HeaderBar onToggleSidebar={() => setOpen(true)} />
        <Box flex={1} overflow="auto">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
