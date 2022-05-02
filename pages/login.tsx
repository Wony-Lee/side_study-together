import styled from "@emotion/styled";
import Image from "next/image";
import { iconID, iconLogo, iconPassword } from "../public/images/url_image";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { SpanError } from "../components/Error";
import { useRouter } from "next/router";
import { personInfo } from "../public/personInfo";

interface ILogin {
  id: string;
  password: string;
}

interface IImageWrapper {
  url: string;
  alt: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  //height: 100vh;
  justify-content: center;
  align-items: center;
  /* background-color: orange; */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: pink; */
`;

const InputWrapper = styled.div`
  display: flex;
  width: 400px;
  height: 40px;
  margin-top: 15px;
  align-items: center;

  position: relative;
  /* justify-content: center; */
`;

const Input = styled.input`
  //position: absolute;
  width: 350px; // InputWrapper에 감싸져 있는데 100%하면 왜 침범..? div에 맞게 조절되는거 아닌가
  height: 40px;
  border: 0;
  border-radius: 15px;
  padding-left: 50px;
  font-size: 25px;
  background-color: rgb(233, 233, 233);
`;

const ImageWrap = styled.div`
  position: absolute;
`;

const ImageWrapper = ({ url, alt }: IImageWrapper) => {
  return (
    <ImageWrap>
      <Image
        style={{
          paddingLeft: "6px",
          backgroundColor: "transparent",
        }}
        src={url}
        alt={alt}
        width={35}
        height={35}
      />
    </ImageWrap>
  );
};

const Button = styled.button`
  justify-content: flex-end;
  margin-top: 10px;
  width: 200px;
  border: 0;
  border-radius: 15px;
  height: 35px;
  &:hover {
    // darkMode / lightMode
    background-color: black;
    color: white;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 50px;
  /* margin-top: 20px; */
  justify-content: center;
  align-items: center;
  /* background-color: red; */

  a {
    /* background-color: yellow; */
    margin: 15px;
    text-decoration: none;
    color: black;
    &:hover {
      color: blue;
    }
  }
`;

function checkUserAccount(data: ILogin) {
  const { id, password } = data;
  let isSuccess = false;
  if (id === "test" && password == "test") {
    isSuccess = true;
  }
  return isSuccess;
}

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();
  const onValid = (data: ILogin) => {
    // Check Valid User
    if (checkUserAccount(data)) {
      // db에서 가져오기
      personInfo.id = "test";
      personInfo.name = "김지수";
      personInfo.birthDate = new Date().toISOString().slice(0, 10);
      personInfo.region = "대전";
      personInfo.phoneNumber = "01040086287";
      personInfo.email = "wldnd923@naver.com";
      alert("sign in success");
      router.push(`/`);
    } else {
      alert("sign in failed");
    }

    console.log(data.id);
    console.log(data.password);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onValid)}>
        <Image src={iconLogo} alt="StudyLogo" width={300} height={300} />
        {/*<img src={"/images/icons/people_icon.png"} alt="StudyLogo" />*/}
        <InputWrapper>
          <ImageWrapper url={iconID} alt="iconID" />
          <Input
            placeholder="아이디"
            {...register("id", {
              required: "아이디를 입력해주세요",
              minLength: {
                value: 4,
                message: "최소 4글자 이상을 입력해주세요. ",
              },
            })}
          />
        </InputWrapper>
        <SpanError>{errors?.id?.message}</SpanError>
        <InputWrapper>
          <ImageWrapper url={iconPassword} alt="iconPassword" />
          <Input
            placeholder="비밀번호"
            type="password"
            {...register("password", {
              required: "비밀번호를 입력해주세요",
            })}
          />
        </InputWrapper>
        <SpanError>{errors?.password?.message}</SpanError>
        <Button type="submit">로그인</Button>
      </Form>

      <LinkWrapper>
        <Link href={"#"}>아이디 찾기</Link>
        <Link href={"#"}>비밀번호 찾기</Link>
        <Link href={"/termsOfService"}>회원가입</Link>
      </LinkWrapper>
    </Wrapper>
  );
};

export default Login;
