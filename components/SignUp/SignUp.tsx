import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { iconLogo } from "../../public/images/url_image";
import { SpanError } from "../Error/Error";

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

const VisibleSpan = styled.span`
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

const regions = [
  "??????",
  "??????",
  "??????",
  "??????",
  "??????",
  "??????",
  "??????",
  "??????",
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
    alert("???????????? ??????!");
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
            <Label htmlFor="id">?????????</Label>
            <Input
              placeholder="4?????? ??????"
              {...register("id", {
                required: "ID??? ??????????????????",
                minLength: {
                  value: 4,
                  message: "?????? 4??? ??????????????? ?????????",
                },
              })}
            ></Input>
            <SpanError>{errors?.id?.message}</SpanError>
          </SmallWrapper>
          <SmallWrapper>
            <Label htmlFor="password">????????????</Label>
            <Input
              type="password"
              placeholder="8??? ??????, ??????, ???????????? ??????"
              {...register("password", {
                required: "??????????????? ??????????????????",
                // pattern: {
                //   value: /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g,
                //   message: "??????????????? ??????????????? ?????????",
                // },
                validate: {
                  hasNumber: (value) =>
                    /[0-9]/.test(value) || "????????? ??????????????? ?????????",
                  hasSpecialChar: (value) =>
                    /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/.test(
                      value
                    ) || "??????????????? ??????????????? ?????????",
                },
                minLength: {
                  value: 8,
                  message: "?????? 8??? ??????????????? ?????????",
                },
              })}
            ></Input>
            <SpanError>{errors?.password?.message}</SpanError>
          </SmallWrapper>
          <SmallWrapper>
            <Label htmlFor="rePassword">???????????? ?????????</Label>
            <InputWrapper>
              <Input
                type={passwordType.type}
                {...register("rePassword", {
                  validate: {
                    isSame: (value) =>
                      value === getValues("password") ||
                      "??????????????? ???????????? ????????????",
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
            <Label htmlFor="name">??????</Label>
            <Input
              {...register("name", {
                required: "????????? ??????????????????",
              })}
            ></Input>
            <SpanError>{errors?.name?.message}</SpanError>
          </SmallWrapper>
          <SmallWrapper>
            <Label htmlFor="birthDate">????????????</Label>
            <Input
              type="date"
              style={{ textAlign: "center" }}
              customWidth={"140px"}
              placeholder="???(4???)"
              {...register("birthDate", {})}
            ></Input>
          </SmallWrapper>
          <SmallWrapper>
            <Label htmlFor="region">??????</Label>
            <Select
              {...register("region", { required: "????????? ??????????????????" })}
            >
              {regions.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </Select>
          </SmallWrapper>
          <SmallWrapper>
            <Label htmlFor="phoneNumber">????????????</Label>
            <Input
              // type="number"
              customWidth={"70%"}
              placeholder="????????? ??????"
              onKeyDown={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(
                  /[^0-9]/g,
                  ""
                );
              }}
              {...register("phoneNumber", {
                required: "????????? ??????????????????",
                validate: {
                  isNumber: (value) => {
                    const result = /^[0-9]+$/.test(value);
                    return result || "????????? ??????????????????";
                  },
                  isValidFormat: (value) => {
                    const result =
                      /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/.test(value);
                    return result || "????????? ???????????????";
                  },
                },
              })}
            ></Input>
            <SpanError>{errors?.phoneNumber?.message}</SpanError>
          </SmallWrapper>
          <SmallWrapper>
            <Label htmlFor="email">?????????</Label>
            <Input
              customWidth={"70%"}
              placeholder="?????????"
              {...register("email", {
                required: "???????????? ??????????????????",
                validate: {
                  isValidFormat: (value) => {
                    const regEmail =
                      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
                    const result = regEmail.test(value);

                    return result || "????????? ???????????????";
                  },
                },
              })}
            ></Input>
            <SpanError>{errors?.email?.message}</SpanError>
          </SmallWrapper>
          <Button type="submit">????????????</Button>
        </MainWrapper>
      </form>
    </Wrapper>
  );
}
export default SignUp;
