import styled from "@emotion/styled";
import Image from "next/image";
import { iconID, iconLogo, iconPassword } from "../../public/images/url_image";
import { useForm } from "react-hook-form";
import Link from "next/link";

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
  /* justify-content: center; */
`;

const Input = styled.input`
  position: absolute;
  width: 350px; // InputWrapper에 감싸져 있는데 100%하면 왜 침범..? div에 맞게 조절되는거 아닌가
  height: 40px;
  border: 0;
  border-radius: 15px;
  padding-left: 50px;
  font-size: 25px;
  background-color: rgb(233, 233, 233);
`;

const ImageWrapper = ({ url, alt }: IImageWrapper) => {
  return (
    <Image
      style={{
        position: "absolute",
        paddingLeft: "6px",
        backgroundColor: "transparent",
      }}
      src={url}
      alt={alt}
      width={35}
      height={35}
    />
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

const SpanError = styled.span`
  margin-top: 10px;
  color: red;
  font-size: 20px;
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

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();
  const onValid = (data: ILogin) => {
    console.log(data.id);
    console.log(data.password);
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onValid)}>
        <Image src={iconLogo} alt="StudyLogo" width={300} height={300} />
        {/* <img src={"/images/icons/people_icon.png"} alt="StudyLogo" /> */}
        <InputWrapper>
          <Input
            placeholder="아이디"
            {...register("id", {
              required: "아이디를 입력해주세요",
              minLength: {
                value: 5,
                message: "최소 5글자 이상을 입력해주세요. ",
              },
            })}
          />
          <ImageWrapper url={iconID} alt="iconID" />
        </InputWrapper>
        <SpanError>{errors?.id?.message}</SpanError>
        <InputWrapper>
          <Input
            placeholder="비밀번호"
            {...register("password", {
              required: "비밀번호를 입력해주세요",
            })}
          />
          <ImageWrapper url={iconPassword} alt="iconPassword" />
        </InputWrapper>
        <SpanError>{errors?.password?.message}</SpanError>
        <Button type="submit">로그인</Button>
      </Form>
      <LinkWrapper>
        <Link href={"#"}>아이디 찾기</Link>
        <Link href={"#"}>비밀번호 찾기</Link>
        <Link href={"/tos"}>회원가입</Link>
      </LinkWrapper>
    </Wrapper>
  );
}
export default Login;
