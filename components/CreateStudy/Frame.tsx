// Simple React Snippets 'rafce', it is similiar with template
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { SpanError } from "../Error/Error";

interface IStudyForm {
  capacity: number;
  category: string;
  detail: string;
  endDate: string;
  region: string;
  startDate: string;
  title: string;
}

const Region: String[] = ["서울", "부산", "강원"];
const Category: String[] = ["IT", "요리", "여행"];

const Wrapper = styled.div`
  /* background-image: url("https://amymhaddad.s3.amazonaws.com/morocco-blue.png"); */
  /* background-size: cover; */
  // darkMode / lightMode
  /* color: blue; 
  background-color: rgba(0, 0, 0, 0); */
  /* display: flex;
  flex-direction: column; */
  margin: 5px;
`;

const ElementWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const Label = styled.label`
  display: inline-flex;
  width: 100px;
  height: 30px;
  align-items: center;
`;

const Input = styled.input`
  width: 300px;
  height: 25px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
`;

const DateInput = styled.input`
  width: 110px;
  height: 27px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding: 0;
  background-color: rgb(233, 233, 233);
  text-align: center;
`;

const Select = styled.select`
  width: 100px;
  height: 25px;
  text-align: center;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  background-color: rgb(233, 233, 233);
`;

const TextArea = styled.textarea`
  width: 80vw;
  height: 20vh;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
  resize: none;
`;

const ButtonSummit = styled.button`
  width: 200px;
  height: 30px;
  border: 0;
  border-radius: 8px;
  &:hover {
    // darkMode / lightMode
    background-color: black;
    color: white;
  }
`;

const Frame = () => {
  // "handleSubmit" will validate your inputs before invoking "onSubmit"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IStudyForm>();
  // if all the data is valid, onValid function will be executed
  const onValid = (data: IStudyForm) => {
    // data
    console.log(data.capacity);
  };
  // console.log(watch("title"));
  // console.log(watch());
  return (
    <Wrapper>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <ElementWrapper>
          <Label htmlFor="title">이름</Label>
          <Input
            placeholder="스터디 이름"
            {...register("title", {
              required: "이름을 기입해주세요",
            })}
          />
          <SpanError>{errors?.title?.message}</SpanError>
        </ElementWrapper>

        <ElementWrapper>
          <Label htmlFor="region">지역</Label>
          <Select {...register("region")}>
            {Region.map((item, idx) => (
              <option key={idx}>{item}</option>
            ))}
          </Select>
        </ElementWrapper>
        <ElementWrapper>
          <Label htmlFor="category">분야</Label>
          <Select {...register("category")}>
            {Category.map((item, idx) => (
              <option key={idx}>{item}</option>
            ))}
          </Select>
        </ElementWrapper>
        <ElementWrapper>
          <Label htmlFor="capacity">총인원</Label>
          <Input
            style={{ textAlign: "right", width: "88px" }}
            type="number"
            min={0}
            placeholder="1명 이상"
            {...register("capacity", {
              required: true,
              min: {
                value: 1,
                message: "1명 이상의 인원이 필요합니다.",
              },
            })}
          ></Input>
          <SpanError>{errors?.capacity?.message}</SpanError>
        </ElementWrapper>

        <ElementWrapper>
          <Label htmlFor="region">진행기간</Label>
          <DateInput
            style={{
              marginRight: "5px",
            }}
            type="date"
            defaultValue={new Date().toISOString().slice(0, 10)}
            {...register("startDate", { required: true })}
          />
          <label>~</label>
          <DateInput
            style={{
              marginLeft: "5px",
            }}
            type="date"
            defaultValue={new Date().toISOString().slice(0, 10)}
            {...register("endDate", { required: true })}
          />
        </ElementWrapper>
        <ElementWrapper>
          <Label>모집종료</Label>
          <DateInput
            type="date"
            defaultValue={new Date().toISOString().slice(0, 10)}
            {...register("endDate", { required: true })}
          />
        </ElementWrapper>

        <ElementWrapper>
          <Label>상세설명</Label>
          <TextArea {...register("detail")} />
        </ElementWrapper>
        <ElementWrapper
          style={{
            justifyContent: "center", // flex-end
          }}
        >
          <ButtonSummit type="submit">스터디 생성</ButtonSummit>
        </ElementWrapper>
      </form>
    </Wrapper>
  );
};

export default Frame;
