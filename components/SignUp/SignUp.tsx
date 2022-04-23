import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { iconLogo } from "../../public/images/url_image";
import { SpanError } from "../Error/Error";

interface ISignUp {
  id: string;
  password: string;
  rePassword: string;
  name: string;
  birthDate: {
    year: number;
    month: number;
    day: number;
  };
  region: string;
  phoneNumber: string;
  email: string;
}

interface IInput {
  customWidth: number | string;
  customAlignment: string;
}

const Wrapper = styled.div`
  height: 110vh;
  width: 100%;
  background-color: black;
`;

const LogoWrapper = styled.div`
  display: flex;
  height: 18vh;
  position: relative;
  top: 4px;
  align-items: center;
  justify-content: center;
  background-color: orange;
  /* overflow: hidden; */
`;

const MainWrapper = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* width: 80vw; */
  /* overflow: hidden; */
  background-color: pink;
`;

const SmallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 12.5%;
  background-color: skyblue;
  margin: 5px;
`;

const InputWrapper = styled.div`
  display: flex;
  background-color: red;
`;

const Label = styled.label`
  font-size: 25px;
  padding-left: 3px;
  display: flex;
  align-items: center;
  /* height: 25px; */
  background-color: blueviolet;
`;

const Input = styled.input<IInput>`
  width: ${(props) => props.customWidth};
  height: 23px;
  font-size: 18px;
  margin-top: 4px;
  margin-left: 8px;
  margin-right: 8px;
  padding-left: 5px;
  border: 0;
  text-align: ${(props) => props.customAlignment || "left"};
  &:focus {
    outline: none; // !important;
    border: 1px solid;
    box-shadow: 0 0 10px #719ece;
  }
`;

const VisibleSpan = styled.span`
  display: inline-flex;
  width: 45px;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  background-color: orange;
`;

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ISignUp>();
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState<{
    type: string;
    visible: boolean;
  }>({ type: "password", visible: false });
  console.log(passwordType.type);
  const onValid = () => {};
  return (
    <Wrapper>
      <LogoWrapper>
        <Image src={iconLogo} alt="StudyLogo" width={200} height={200} />
      </LogoWrapper>
      <form onSubmit={handleSubmit(onValid)}>
        <MainWrapper>
          <SmallWrapper>
            <Label htmlFor="id">아이디</Label>
            <Input
              customWidth={"70%"}
              customAlignment={""}
              placeholder="4글자 이상"
              {...register("id", {
                required: "ID를 입력해주세요",
                minLength: {
                  value: 4,
                  message: "최소 4자 이상이어야 합니다",
                },
              })}
            ></Input>
            <SpanError>{errors?.id?.message}</SpanError>
          </SmallWrapper>
          <SmallWrapper>
            <Label htmlFor="password">비밀번호</Label>
            <Input
              customWidth={"70%"}
              customAlignment={""}
              type="password"
              placeholder="8자 이상, 숫자, 특수문자 포함"
              {...register("password", {
                required: "비밀번호를 입력해주세요",
                // pattern: {
                //   value: /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g,
                //   message: "특수문자가 포함되어야 합니다",
                // },
                validate: {
                  hasNumber: (value) =>
                    /[0-9]/.test(value) || "숫자가 포함되어야 합니다",
                  hasSpecialChar: (value) =>
                    /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/.test(
                      value
                    ) || "특수문자가 포함되어야 합니다",
                },
                minLength: {
                  value: 8,
                  message: "최소 8자 이상이어야 합니다",
                },
              })}
            ></Input>
            <SpanError>{errors?.password?.message}</SpanError>
          </SmallWrapper>
          <SmallWrapper>
            <Label htmlFor="rePassword">비밀번호 재확인</Label>
            <InputWrapper>
              <Input
                customWidth={"70%"}
                customAlignment={""}
                type={passwordType.type}
                {...register("rePassword", {
                  validate: {
                    isSame: (value) =>
                      value === getValues("password") ||
                      "비밀번호가 일치하지 않습니다",
                  },
                })}
              ></Input>
              <VisibleSpan
                onClick={() => {
                  setPasswordType((prev) => {
                    // return Object.assign({}, prev, {type:"text", visible:true})
                    let whichType = "";
                    if (prev.visible) {
                      whichType = "text";
                    } else {
                      whichType = "password";
                    }
                    return { ...prev, type: whichType, visible: !prev.visible };
                  });
                }}
              >
                {passwordType.visible ? "Hide" : "Show"}
              </VisibleSpan>
            </InputWrapper>

            <SpanError>{errors?.rePassword?.message}</SpanError>
          </SmallWrapper>
          <SmallWrapper>
            <Label htmlFor="name">이름</Label>
            <Input
              customWidth={"70%"}
              customAlignment={""}
              {...register("name", {
                required: "이름을 입력해주세요",
              })}
            ></Input>
            <SpanError>{errors?.name?.message}</SpanError>
          </SmallWrapper>
          <SmallWrapper>
            <Label htmlFor="birthDate">생년월일</Label>
            <InputWrapper>
              <Input
                customWidth={"30%"}
                customAlignment={"right"}
                placeholder="년(4자)"
                {...register("birthDate.year", {
                  required: "년을 입력해주세요,",
                  validate: {
                    yearLength: (value) =>
                      value.toString().length === 4 || "4자만 입력가능(년),",
                  },
                })}
              ></Input>
              <Input
                customWidth={"30%"}
                customAlignment={"right"}
                placeholder="월(1~12)"
                {...register("birthDate.month", {
                  required: "월을 입력해주세요,",
                  validate: (value) =>
                    (value >= 1 && value <= 12) || "1~12 입력가능(월),",
                })}
              ></Input>
              <Input
                customWidth={"30%"}
                customAlignment={"right"}
                placeholder="일(1~31)"
                {...register("birthDate.day", {
                  required: "일을 입력해주세요",
                  validate: (value) =>
                    (value >= 1 && value <= 31) || "1~31 입력가능(일)",
                })}
              ></Input>
            </InputWrapper>
            <InputWrapper>
              <SpanError>{errors?.birthDate?.year?.message}</SpanError>
              <SpanError>{errors?.birthDate?.month?.message}</SpanError>
              <SpanError>{errors?.birthDate?.day?.message}</SpanError>
            </InputWrapper>
          </SmallWrapper>
          <SmallWrapper>
            <Label htmlFor="id">지역</Label>
            <Input
              customWidth={"70%"}
              customAlignment={""}
              placeholder="4글자 이상"
              {...register("id", {
                required: "ID를 입력해주세요",
                minLength: {
                  value: 4,
                  message: "최소 4자 이상이어야 합니다",
                },
              })}
            ></Input>
            <SpanError>{errors?.id?.message}</SpanError>
          </SmallWrapper>
          <SmallWrapper>
            <Label htmlFor="id">전화번호</Label>
            <Input
              customWidth={"70%"}
              customAlignment={""}
              placeholder="4글자 이상"
              {...register("id", {
                required: "ID를 입력해주세요",
                minLength: {
                  value: 4,
                  message: "최소 4자 이상이어야 합니다",
                },
              })}
            ></Input>
            <SpanError>{errors?.id?.message}</SpanError>
          </SmallWrapper>
          <SmallWrapper>
            <Label htmlFor="id">이메일</Label>
            <Input
              customWidth={"70%"}
              customAlignment={""}
              placeholder="4글자 이상"
              {...register("id", {
                required: "ID를 입력해주세요",
                minLength: {
                  value: 4,
                  message: "최소 4자 이상이어야 합니다",
                },
              })}
            ></Input>
            <SpanError>{errors?.id?.message}</SpanError>
          </SmallWrapper>
          <button type="submit">가입</button>
        </MainWrapper>
      </form>
    </Wrapper>
  );
}
export default SignUp;

/*
"서울","인천","대전","대구","울산","부산","광주","세종"
*/
