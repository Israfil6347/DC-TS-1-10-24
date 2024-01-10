import { TimePicker, TimeValidationError } from "@mui/x-date-pickers";
import { PickerChangeHandlerContext } from "@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types";
import dayjs from "dayjs";

interface TimeSelectProps {
  label: string;
  name: string;
  value: string;
  disabled: boolean;
  onChange:
    | ((
        value: dayjs.Dayjs | null,
        context: PickerChangeHandlerContext<TimeValidationError>
      ) => void)
    | undefined;
  error?: string;
}

const TimeSelect: React.FC<TimeSelectProps> = ({
  label,
  value,
  disabled,
  onChange,
  error,
}) => {
  return (
    <div>
      <TimePicker
        label={label}
        disabled={disabled}
        value={value === "" ? null : dayjs(`2022-04-17T${value}`)}
        onChange={onChange}
        slotProps={{ textField: { size: "small" } }}
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "black",
            },
          },
        }}
      />
      <div className="text-xs text-error">{error}</div>
    </div>
  );
};

export default TimeSelect;
