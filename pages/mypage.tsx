import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { iconProfile } from "../public/images/url_image";
import { changeProfilePhoto, uploadFileToFireBase } from "../public/file";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import { SpanError } from "../components/Error/Error";
import { personInfo } from "../public/personInfo";
import { regions } from "./signUp";

interface IMyPage {
  name: string;
  birthDate: Date;
  region: string;
  phoneNumber: string;
  email: string;
}

interface IInput {
  customWidth?: number | string;
  // customAlignment?: string;
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: blueviolet;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: aqua;
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
  position: relative;
  background-color: tomato;
  /* cursor: pointer; */
  /* margin: 0 auto; */
  /* overflow: hidden; */
`;

const ProfileIntroduceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  background-color: violet;
  /* margin-top: 10px; */
  p {
    font-size: 3.5vw;
    margin: 5px;
    vertical-align: middle;
    background-color: aliceblue;
  }
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: aquamarine;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50px;
  justify-content: center;
  /* align-items: center; */
  background-color: brown;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  /* justify-content: center; */
  align-items: center;
  background-color: blue;
`;

const Label = styled.label`
  font-size: 18px;
  width: 100px;
  background-color: aliceblue;
  padding-left: 10px;
`;

const Input = styled.input<IInput>`
  width: ${(props) => props.customWidth || "200px"};
  /* height: 28px; */
  margin-left: 5px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: 0;
  outline: none;
  font-size: 18px;
  padding: 3px;
`;

const Img = styled.img`
  width: 95%;
  height: 95%;
  border-radius: 50%;
`;

const InputEdit = styled.input`
  /* position: absolute;
  bottom: 0;
  right: 0;
  width: 50px;
  height: 12%; */
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

const LabelEdit = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;
  color: #fff;
  background-color: #999999;
  cursor: pointer;
`;

const ButtonPhotoCancel = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  border: none;
  color: #fff;
  background-color: #999999;
  cursor: pointer;
`;

const ButtonPhotoApply = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  color: #fff;
  background-color: #999999;
  cursor: pointer;
`;

const Select = styled.select`
  width: 30%;
  margin-top: 4px;
  margin-left: 8px;
  font-size: 18px;
`;

const Button = styled.button`
  width: 100px;
  margin: 3px;
`;

export default function MyPage() {
  console.log(personInfo.birthDate);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IMyPage>();
  const [attachment, setAttachment] = useState(iconProfile);
  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;
    const theFile = files?.[0];
    changeProfilePhoto(theFile, setAttachment);
  };
  const onValid = (data: IMyPage) => {
    console.log(data.name);
  };
  // const router = useRouter();
  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfileImageWrapper>
          <Img src={attachment}></Img>
          <LabelEdit htmlFor="file">Edit</LabelEdit>
          <ButtonPhotoCancel
            onClick={() => {
              setAttachment(iconProfile);
              (document.getElementById("file") as HTMLInputElement).value = "";
            }}
          >
            Cancel
          </ButtonPhotoCancel>
          <ButtonPhotoApply onClick={() => uploadFileToFireBase(attachment)}>
            Apply
          </ButtonPhotoApply>
          <InputEdit
            type="file"
            id="file"
            accept="image/*" // jpeg,.png,.bmp
            onChange={onFileChange}
          />
        </ProfileImageWrapper>
        <ProfileIntroduceWrapper>
          <p>Profile</p>
          <TextArea></TextArea>
        </ProfileIntroduceWrapper>
      </ProfileWrapper>
      <DetailWrapper>
        <InputWrapper>
          <Label htmlFor="password">비밀번호</Label>
          <Link href="/changePassword" passHref>
            {
              //useRouter를 이용하여 url을 변경하니까 다시 뒤로가기가 되는현상발생
              //button onClick= {() => router.push(/"changePassword")}
            }
            <Input type="button" value="변경" customWidth={"80px"} />
          </Link>
        </InputWrapper>
        <form onSubmit={handleSubmit(onValid)}>
          <InputWrapper>
            <Label htmlFor="name">이름</Label>
            <Input
              defaultValue={personInfo.name}
              {...register("name", { required: "이름을 입력해주세요" })}
            />
            <SpanError>{errors?.name?.message}</SpanError>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="birthDate">생년월일</Label>
            <Input
              type="date"
              defaultValue={personInfo.birthDate}
              {...register("birthDate")}
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="region">지역</Label>
            <Select
              defaultValue={personInfo.region}
              {...register("region", { required: "지역을 선택해주세요" })}
            >
              {regions.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </Select>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="phoneNumber">전화번호</Label>
            <Input
              defaultValue={personInfo.phoneNumber}
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
            />
          </InputWrapper>
          <InputWrapper>
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
          </InputWrapper>
          <ButtonWrapper>
            <Button type="submit">Save</Button>
            <Link href="/" passHref>
              <Button>Cancel</Button>
            </Link>
          </ButtonWrapper>
        </form>
      </DetailWrapper>
    </Wrapper>
  );
}
