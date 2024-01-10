import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

interface DateSelectProps {
  label?: string;
  name: string;
  value: string;
  onChange: (fieldName: string, fieldValue: any) => void;
  disabled?: boolean;
  error?: string;
  isDisableFuture?: boolean;
  isDisablePast?: boolean;
  minDate?: dayjs.Dayjs;
  maxDate?: dayjs.Dayjs;
}

const DateSelect: React.FC<DateSelectProps> = ({
  label,
  name,
  value,
  onChange,
  disabled,
  error,
  isDisableFuture = false,
  isDisablePast = false,
  minDate,
  maxDate,
}) => {
  return (
    <div className="">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={label}
          disabled={disabled}
          value={value === '' ? null : dayjs(value)}
          disableFuture={isDisableFuture}
          disablePast={isDisablePast}
          minDate={minDate}
          maxDate={maxDate}
          onChange={(newValue) => {
            onChange(name, newValue);
          }}
          format="DD-MM-YYYY"
          slotProps={{ textField: { size: 'small' } }}
          // renderInput={(params) => (
          //   <TextField
          //     {...params}
          //     InputLabelProps={{
          //       sx: {
          //         color: 'gray',
          //         backgroundColor: 'white',
          //       },
          //     }}
          //   />
          // )}
          sx={{
            width: '100%',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black',
              },
            },
          }}
        />
        <div className="text-xs text-error">{error}</div>
      </LocalizationProvider>
    </div>
  );
};

export default DateSelect;
