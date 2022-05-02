import styled from "@emotion/styled";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SpanError } from "../components/Error";

interface IChangePassword {
  currPassword: string;
  password: string;
  rePassword: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40vh;
  width: 100%;
  background-color: rgb(233, 233, 233);
`;

const SmallWrapper = styled.div`
  display: flex;
  align-items: baseline;
  height: 65px;
  /* background-color: red; */
  /* margin: 2px; */
`;

const Span = styled.span`
  width: 160px;
  text-align: right;
`;

const Input = styled.input`
  height: 23px;
  font-size: 15px;
  margin-left: 8px;
  padding-left: 5px;
  border: 0;
  &:focus {
    outline: none; // !important;
    border: 1px solid;
    box-shadow: 0 0 10px #719ece;
  }
  /* background-color: gray; */
`;

const Label = styled.label`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding-left: 3px;
  font-size: 20px;
  /* height: 25px; */
  /* background-color: blueviolet; */
`;

const Button = styled.button`
  margin-left: 3px;
`;

function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<IChangePassword>();
  const [currPassword, setCurrPassword] = useState("");
  const [togglePassword, setTogglePassword] = useState({
    type: "password",
    text: "보이기",
  });
  return (
    <form onSubmit={handleSubmit(() => {})}>
      <Wrapper>
        <SmallWrapper>
          <Span>
            <Label htmlFor="currPassword">현재 비밀번호</Label>
          </Span>
          <Input
            type="password"
            {...register("currPassword", {
              required: "현재 비밀번호를 입력해주세요",
            })}
          ></Input>
          <SpanError>{errors?.currPassword?.message}</SpanError>
        </SmallWrapper>
        <SmallWrapper>
          <Span>
            <Label htmlFor="password">새 비밀번호</Label>
          </Span>
          <Input
            type={togglePassword.type}
            placeholder="8자 이상, 숫자, 특수문자 포함"
            {...register("password", {
              required: "새 비밀번호를 입력해주세요",
              validate: {
                hasNumber: (value) =>
                  /[0-9]/.test(value) || "숫자가 포함되어야 합니다",
                hasSpecialChar: (value) =>
                  /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/.test(
                    value
                  ) || "특수문자가 포함되어야 합니다",
                isSameWithCurrPassword: (value) =>
                  value !== getValues("currPassword") ||
                  "현재 비밀번호와 다른 비밀번호를 입력해주세요",
              },
              minLength: {
                value: 8,
                message: "최소 8자 이상이어야 합니다",
              },
            })}
          ></Input>
          <SpanError>{errors?.password?.message}</SpanError>
          <Button
            onClick={() => {
              setTogglePassword((prev) => {
                let newText = "";
                let newType = "";
                switch (togglePassword.type) {
                  case "password": {
                    newText = "숨기기";
                    newType = "text";
                    break;
                  }
                  case "text": {
                    newText = "보이기";
                    newType = "password";
                    break;
                  }
                }
                return { ...prev, type: newType, text: newText };
              });
            }}
          >
            {togglePassword.text}
          </Button>
        </SmallWrapper>
        <SmallWrapper>
          <Span>
            <Label htmlFor="rePassword">새 비밀번호 확인</Label>
          </Span>
          <Input
            type="password"
            {...register("rePassword", {
              validate: {
                isSame: (value) =>
                  value === getValues("password") ||
                  "비밀번호가 일치하지 않습니다",
              },
            })}
          ></Input>
          <SpanError>{errors?.rePassword?.message}</SpanError>
          <Button type="submit">변경</Button>
        </SmallWrapper>
      </Wrapper>
    </form>
  );
}
export default ChangePassword;
