// Simple React Snippets rafce
import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";

const Region: String[] = ["서울", "부산", "강원"];
const Category: String[] = ["IT", "요리", "여행"];

const FormLayout = styled.form`
  display: flex;
  flex-direction: column;
`;
const TextArea = styled.textarea`
  resize: none;
  outline: none;
`;

const Form = () => {
  const { register, handleSubmit, watch } = useForm();
  const [inputValue, setInputValue] = useState("");
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }, []);
  const watchAllFields = watch();
  const onSubmit = (data: any) => console.log(watchAllFields);
  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("title", {
          required: true,
          value: inputValue,
          onChange: handleChange,
        })}
      />
      <select {...register("region")}>
        {Region.map((item, idx) => (
          <option key={idx}>{item}</option>
        ))}
      </select>
      <select {...register("category")}>
        {Category.map((item, idx) => (
          <option key={idx}>{item}</option>
        ))}
      </select>
      {[5, 10, 15].map((item, idx) => (
        <label key={idx} htmlFor="capacity">
          <input
            id="capacity"
            value={item}
            type="radio"
            {...register("capacity", { required: true })}
          />
          {item} 명
        </label>
      ))}
      {[7, 14, 21].map((item, idx) => (
        <label key={idx} htmlFor="endDate">
          <input
            value={item}
            type="radio"
            id="endDate"
            {...register("endDate", { required: true })}
          />
          {item}일
        </label>
      ))}

      <TextArea {...register("detail", { required: true })} />
    </FormLayout>
  );
};

export default Form;
