import React, { useEffect, useState } from "react";
import CheckBox from "../../Element/CheckBox";
import { RiEyeOffLine } from "react-icons/ri";
import { HiStatusOnline } from "react-icons/hi";

const EditBusinessField = ({ type, status, setFormValues }) => {
  const [statusColor, setStatusColor] = useState(status);
  useEffect(() => {
    setFormValues((s) => ({ ...s, status: statusColor }));
  }, [statusColor]);
  if (type === `boolean`) {
    return (
      <div
        onClick={(e) => setStatusColor((v) => !v)}
        className={`${
          statusColor ? `btn2` : `btn1`
        }     p-1 mt-1 fs_15 radius1`}
      >
        {statusColor ? (
          <>
            הפוך למצב לא פעיל <HiStatusOnline size={20} />
          </>
        ) : (
          <>
            הפוך למצב פעיל <RiEyeOffLine size={20} />
          </>
        )}
      </div>
    );
  }
  return (
    <div className="w_100 bg-light d-flex justify-content-center radius1">
      <input type="text" className="form-control" />
      <button type="submit" className="dec-off btn4 p-2">
        שלח
      </button>
    </div>
  );
};

export default EditBusinessField;
