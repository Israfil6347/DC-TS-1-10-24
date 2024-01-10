interface LeaveDetailsViewProps {
  leaveApplicationDetails: any;
}

const LeaveDetailsView: React.FC<LeaveDetailsViewProps> = ({
  leaveApplicationDetails,
}) => {
  return (
    <div>
      <div className="mt-5 rounded-md bg-surface px-4 shadow ">
        <h2 className="text-lg font-bold uppercase">INFORMATION</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="">
            <ul className="mt-6 divide-y overflow-hidden text-justify">
              <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
                <div className="w-full text-left md:w-1/2">Leave Type</div>
                <div className="w-full text-right md:w-1/2">
                  {leaveApplicationDetails?.LeaveType}
                </div>
              </li>
              <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
                <div className="w-full text-left md:w-1/2">
                  Fallback Employee
                </div>
                <div className="w-full text-right md:w-1/2">
                  {leaveApplicationDetails?.FallbackPersonName}
                </div>
              </li>
              <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
                <div className="w-full text-left md:w-1/2">Current Stage</div>
                <div className="w-full text-right md:w-1/2">
                  {leaveApplicationDetails?.CurrentStage}
                </div>
              </li>

              <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
                <div className="w-full text-left md:w-1/2">Leave From</div>
                <div className="w-full text-right md:w-1/2">
                  {leaveApplicationDetails?.FromDate}
                </div>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="mt-6 divide-y overflow-hidden text-justify">
              <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
                <div className="w-full text-left md:w-1/2">Leave To</div>
                <div className="w-full text-right md:w-1/2">
                  {leaveApplicationDetails?.ToDate}
                </div>
              </li>
              <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
                <div className="w-full text-left md:w-1/2">Total Days</div>
                <div className="w-full text-right md:w-1/2">
                  {leaveApplicationDetails?.TotalLeaveDays}
                </div>
              </li>
              <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
                <div className="w-full text-left md:w-1/2">Rejoin From</div>
                <div className="w-full text-right md:w-1/2">
                  {leaveApplicationDetails?.RejoiningDate}
                </div>
              </li>

              <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
                <div className="w-full text-left md:w-1/2">
                  Reason For Leave
                </div>
                <div className="w-full text-right md:w-1/2">
                  {leaveApplicationDetails?.Remarks}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveDetailsView;
