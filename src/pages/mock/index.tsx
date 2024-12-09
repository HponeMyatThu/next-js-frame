import React, { useState } from "react";
import InputBox from "@/components/UI/input/InputBox";
import Auxiliary from "@/hoc/Auxilitary/Auxilitary";
import { industrySchema } from "@/utils/validation";

const MockPage = () => {
  const [formData, setFormData] = useState({
    industryCode: "",
    industryName: "",
    status: "Active",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    const result = industrySchema.safeParse(formData);

    if (!result.success) {
      const errorMessages: { [key: string]: string } = {};
      result.error.errors.forEach((err) => {
        errorMessages[err.path[0]] = err.message;
      });
      setErrors(errorMessages);
    } else {
      setErrors({});
      console.log("Validated Data:", result.data);
    }
  };

  return (
    <Auxiliary>
      <div className="px-5">
        <InputBox
          label={"Industry Code"}
          value={formData.industryCode}
          onChange={handleChange}
          placeholder={"Enter Industry Code"}
          name={"industryCode"}
          type={"text"}
        />
        {errors.industryCode && (
          <p className="text-red-500 text-sm mt-1">{errors.industryCode}</p>
        )}

        <InputBox
          label={"Industry Name"}
          value={formData.industryName}
          onChange={handleChange}
          placeholder={"Enter Industry Name"}
          name={"industryName"}
          type={"text"}
        />
        {errors.industryName && (
          <p className="text-red-500 text-sm mt-1">{errors.industryName}</p>
        )}

        <div className="mt-4">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </Auxiliary>
  );
};

export default MockPage;
