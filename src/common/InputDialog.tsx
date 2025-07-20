import {
  Button,
  Dialog,
  Box,
  DialogContent,
  TextField,
  Typography,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function InputDialog({
  open,
  onClose,
  onSave,
  formValues,
  setFormValues,
}) {
  // const [formValues, setFormValues] = useState({
  //   target: '',
  //   present: '',
  // });

  const handleChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log('Saved Data:', formValues);
    onSave?.(formValues);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '488px',
          height: '392px',
          borderRadius: 1,
          position: 'relative',
        },
      }}
    >
      {/* Close Button */}
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 12,
          right: 12,
          zIndex: 1,
        }}
      >
        <CloseIcon sx={{ width: 32, height: 32 }} />
      </IconButton>

      <DialogContent
        sx={{
          px: 8,
          pt: 8,
          pb: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Box
          width="100%"
          height="200px"
          gap="20px"
          display="flex"
          flexDirection="column"
        >
          {/* Target Amount */}
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography fontWeight={600} fontSize={16} gutterBottom>
              Target Amounts
            </Typography>
            <TextField
              name="target"
              placeholder="$500000"
              variant="outlined"
              value={formValues.target}
              onChange={handleChange}
              fullWidth
            />
          </Box>

          {/* Present Amount */}
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography fontWeight={600} fontSize={16} gutterBottom>
              Present Amounts
            </Typography>
            <TextField
              name="present"
              placeholder="Write present amount here"
              variant="outlined"
              value={formValues.present}
              onChange={handleChange}
              fullWidth
            />
          </Box>
        </Box>
      </DialogContent>

      <Box display="flex" justifyContent="center" sx={{ px: 8, pb: 4 }}>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ width: 192, height: 48, borderRadius: '4px' }}
        >
          Save
        </Button>
      </Box>
    </Dialog>
  );
}
