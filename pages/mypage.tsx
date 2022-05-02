import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { iconProfile } from "../public/images/url_image";
import { changeProfilePhoto, uploadFileToFireBase } from "../public/file";
import { useForm } from "react-hook-form";

interface IMyPage {
  name: string;
  birthDate: Date;
  region: string;
  phoneNumber: string;
  email: string;
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
  width: 100%;
  height: 50px;
  align-items: center;
  background-color: brown;
`;

const Label = styled.label`
  font-size: 18px;
  width: 100px;
  background-color: aliceblue;
  padding-left: 10px;
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

export default function MyPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [attachment, setAttachment] = useState(iconProfile);
  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;
    const theFile = files?.[0];
    changeProfilePhoto(theFile, setAttachment);
  };

  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfileImageWrapper>
          <Img src={attachment}></Img>
          <LabelEdit htmlFor="file">Edit</LabelEdit>
          <ButtonPhotoCancel onClick={() => setAttachment(iconProfile)}>
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
        <form>
          <InputWrapper>
            <Label htmlFor="password">비밀번호</Label>
            <button style={{ marginLeft: "5px" }}>변경</button>
          </InputWrapper>
          <InputWrapper>
            <Label>이름</Label>
          </InputWrapper>
          <InputWrapper>
            <Label>생년월일</Label>
          </InputWrapper>
          <InputWrapper>
            <Label>지역</Label>
          </InputWrapper>
          <InputWrapper>
            <Label>전화번호</Label>
          </InputWrapper>
          <InputWrapper>
            <Label>이메일</Label>
          </InputWrapper>
          <InputWrapper>
            <button>Save</button>
            <button>Cancel</button>
          </InputWrapper>
        </form>
      </DetailWrapper>
    </Wrapper>
  );
}
