import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { iconLogo } from "../public/images/url_image";
import { SpanError } from "../components/Error/Error";

interface ISignUp {
  id: string;
  password: string;
  rePassword: string;
  name: string;
  birthDate: Date;
  region: string;
  phoneNumber: string;
  email: string;
}

interface IInput {
  customWidth?: number | string;
  customAlignment?: string;
}

const Wrapper = styled.div`
  height: 110vh;
  width: 100%;
  background-color: rgb(233, 233, 233);
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
  /* background-color: pink; */
`;

const SmallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 9%;
  /* background-color: skyblue; */
  margin: 5px;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  /* background-color: red; */
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  padding-left: 3px;
  font-size: 25px;
  /* height: 25px; */
  /* background-color: blueviolet; */
`;

const Input = styled.input<IInput>`
  width: ${(props) => props.customWidth || "70%"};
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
  /* background-color: gray; */
`;

export const VisibleSpan = styled.span`
  display: inline-flex;
  width: 45px;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  background-color: white;
  cursor: pointer;
`;

const Select = styled.select`
  width: 30%;
  margin-top: 4px;
  margin-left: 8px;
  font-size: 18px;
`;

export const regions = [
  "서울",
  "인천",
  "대전",
  "대구",
  "울산",
  "부산",
  "광주",
  "세종",
];

const Button = styled.button`
  justify-content: flex-end;
  margin-top: 10px;
  width: 200px;
  border: 0;
  border-radius: 15px;
  height: 35px;
  background-color: white;
  &:hover {
    // darkMode / lightMode
    background-color: black;
    color: white;
  }
`;

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ISignUp>();
  const [passwordType, setPasswordType] = useState<{
    type: string;
    visible: boolean;
  }>({ type: "password", visible: false });
  const router = useRouter();
  const onValid = (data: ISignUp) => {
    console.log(data.birthDate);
    alert("회원가입 완료!");
    router.push("/");
  };
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
              {...register("name", {
                required: "이름을 입력해주세요",
              })}
            ></Input>
            <SpanError>{errors?.name?.message}</SpanError>
          </SmallWrapper>
          <SmallWrapper>
            <Label htmlFor="birthDate">생년월일</Label>
            <Input
              type="date"
              style={{ textAlign: "center" }}
              customWidth={"140px"}
              {...register("birthDate", {})}
            />
          </SmallWrapper>
          <SmallWrapper>
            <Label htmlFor="region">지역</Label>
            <Select
              {...register("region", { required: "지역을 선택해주세요" })}
            >
              {regions.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </Select>
          </SmallWrapper>
          <SmallWrapper>
            <Label htmlFor="phoneNumber">전화번호</Label>
            <Input
              // type="number"
              placeholder="숫자만 입력"
              onKeyDown={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(
                  /[^0-9]/g,
                  ""
                );
              }}
              {...register("phoneNumber", {
                required: "번호를 입력해주세요",
                validate: {
                  isNumber: (value) => {
                    const result = /^[0-9]+$/.test(value);
                    return result || "숫자만 입력해주세요";
                  },
                  isValidFormat: (value) => {
                    const result =
                      /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/.test(value);
                    return result || "잘못된 형식입니다";
                  },
                },
              })}
            ></Input>
            <SpanError>{errors?.phoneNumber?.message}</SpanError>
          </SmallWrapper>
          <SmallWrapper>
            <Label htmlFor="email">이메일</Label>
            <Input
              placeholder="이메일"
              {...register("email", {
                required: "이메일을 입력해주세요",
                validate: {
                  isValidFormat: (value) => {
                    const regEmail =
                      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
                    const result = regEmail.test(value);

                    return result || "잘못된 형식입니다";
                  },
                },
              })}
            />
            <SpanError>{errors?.email?.message}</SpanError>
          </SmallWrapper>
          <Button type="submit">회원등록</Button>
        </MainWrapper>
      </form>
    </Wrapper>
  );
}

export default SignUp;
