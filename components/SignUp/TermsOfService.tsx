import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  ChangeEvent,
  Dispatch,
  ReactEventHandler,
  SetStateAction,
  useState,
} from "react";
import { iconLogo } from "../../public/images/url_image";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(233, 233, 233, 1);
  /* background-color: red; */
`;

const LogoWrapper = styled.div`
  display: flex;
  height: 23vh;
  align-items: center;
  justify-content: center;
  /* background-color: orange; */
  /* overflow: hidden; */
`;

const MainWrapper = styled.div`
  height: 77vh;
  /* background-color: rgb(233, 233, 233, 0.4); */
  /* background-color: yellow; */
  /* margin: 10px; */
`;

const CheckAllWrapper = styled.div`
  display: flex;
  height: 7%;
  margin: 5px;
  /* background-color: green; */
  align-items: center;
  justify-content: center;
`;

const CheckWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  height: 28%;
  margin-bottom: 10px;
  /* background-color: blue; */
  align-items: center;
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  height: 9%;
  align-items: center;
  justify-content: center;
  /* background-color: pink; */
`;

const CheckBox = styled.input`
  width: 23px;
  height: 23px;
  vertical-align: middle;
  cursor: pointer;
`;

const Label = styled.label`
  font-size: 22px;
`;

const SpanEssential = styled.span`
  font-size: 18px;
  color: ${(props) => props.color || "black"};
  margin-left: 5px;
`;

const TextArea = styled.textarea`
  width: 500px;
  height: 20vh;
  font-size: 11px;
  background-color: rgba(255, 255, 255, 1);
  resize: none;
`;

const Button = styled.button`
  width: 200px;
  height: 30px;
  margin: 10px;
  /* background-color: white; */
  border: 0;
  &:hover {
    background-color: black;
    color: white;
  }
`;

function TermsOfService() {
  const [checkAll, setCheckAll] = useState(false);
  const [checkAgree, setCheckAgree] = useState(false);
  const [checkPersonal, setCheckPersonal] = useState(false);
  const [checkPromotion, setCheckPromotion] = useState(false);
  const router = useRouter();
  const companyName = "스터디";
  const paragraph_1 = `${companyName} 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 ${companyName} 서비스의 이용과 관련하여 ${companyName} 서비스를 제공하는 ${companyName} 주식회사(이하 ‘${companyName}’)와 이를 이용하는 ${companyName} 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 ${companyName} 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.`;
  const paragraph_2 = `${companyName} 서비스를 이용하시거나 ${companyName} 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다.`;
  const paragraph_3 = `여러분은 본 약관을 읽고 동의하신 후 회원 가입을 신청하실 수 있으며, ${companyName}는 이에 대한 승낙을 통해 회원 가입 절차를 완료하고 여러분께 ${companyName} 서비스 이용 계정(이하 ‘계정’)을 부여합니다. 계정이란 회원이 ${companyName} 서비스에 로그인한 이후 이용하는 각종 서비스 이용 이력을 회원 별로 관리하기 위해 설정한 회원 식별 단위를 말합니다. 회원은 자신의 계정을 통해 좀더 다양한 ${companyName} 서비스를 보다 편리하게 이용할 수 있습니다. 이와 관련한 상세한 내용은 계정 운영정책 및 고객센터 내 ${companyName} 회원가입 방법 등에서 확인해 주세요.`;

  console.log("re-rendering checkAgree: ", checkAgree, "checkAll: ", checkAll);
  const changeCheckState = (
    changeFunc: Dispatch<SetStateAction<boolean>>,
    e: ChangeEvent<HTMLInputElement>,
    other1: boolean,
    other2: boolean
  ) => {
    const checkdState = e.currentTarget.checked;
    changeFunc((prev) => !prev);
    if (checkdState) {
      if (other1 && other2) {
        setCheckAll(checkdState);
      }
    } else {
      setCheckAll(checkdState);
    }
  };
  return (
    <Wrapper>
      <LogoWrapper>
        <Image src={iconLogo} alt="StudyLogo" width={300} height={300} />
      </LogoWrapper>
      <hr />
      <MainWrapper>
        {/*
          엘리먼트 위에 주석으로 1, 2, 3 적어놓으니 참고해주세요

          문제점
          - checkbox input이 div안에 있으면 checkbox click이 안됌.
          - 1번과 같이 div안에 없으면 click 잘 됌.
          - 2번 혼자 렌더링 됐을 때는 클릭이 안 됐지만 1번 먼저 렌더링 해주고
          그 다음 2번 렌더링 해주면 체크 박스 클릭이 되긴 하는데 체크박스 영역 y축기준으로
          반나눴을 때 위는 클릭안돼고 아래만 클릭됌.  
          - 1번 2번 3번 다 렌더링 하면 1번은 정상작동 2번은 영역의 반만 클릭 가능 
          3번은 체크박스 전체영역 클릭가능  
          */}
        {/* 1 */}
        <CheckBox
          type="checkbox"
          id="checkAllt"
          checked={checkAll}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            // 상태는 이 함수에서 바로 변경이 안된다. rendering전에 되는듯..?
            const checked = e.currentTarget.checked;
            setCheckAll((prev) => !prev);
            setCheckAgree(checked);
            setCheckPersonal(checked);
            setCheckPromotion(checked);
          }}
        />
        <Label htmlFor="checkAllt">전체동의</Label>
        {/* 2 */}
        {/* <CheckAllWrapper>
          <LabelWrapper>
            <CheckBox
              //   checked={checkAll}
              type="checkbox"
              id="checkAll"
              //   onChange={() => setCheckAll((prev) => !prev)}
            />
            <Label htmlFor="checkAll">전체동의</Label>
          </LabelWrapper>
        </CheckAllWrapper> */}
        {/* 3 */}
        {/* <CheckAllWrapper>
          <LabelWrapper>
            <CheckBox
              //   checked={checkAll}
              type="checkbox"
              id="checkAll"
              //   onChange={() => setCheckAll((prev) => !prev)}
            />
            <Label htmlFor="checkAll">전체동의</Label>
          </LabelWrapper>
        </CheckAllWrapper> */}
        <hr />
        <CheckWrapper>
          <LabelWrapper>
            <CheckBox
              checked={checkAgree}
              type="checkbox"
              id="checkAgree"
              onChange={(e) =>
                changeCheckState(
                  setCheckAgree,
                  e,
                  checkPersonal,
                  checkPromotion
                )
              }
            />
            <Label htmlFor="checkAgree">{companyName} 이용약관 동의</Label>
            <SpanEssential color="red">(필수)</SpanEssential>
          </LabelWrapper>
          <TextArea
            disabled
            value={` ${paragraph_1}\n\n ${paragraph_2}\n\n ${paragraph_3}`}
          />
        </CheckWrapper>
        <CheckWrapper>
          <LabelWrapper>
            <CheckBox
              checked={checkPersonal}
              type="checkbox"
              id="checkPersonalInfo"
              onChange={(e) =>
                changeCheckState(
                  setCheckPersonal,
                  e,
                  checkAgree,
                  checkPromotion
                )
              }
            ></CheckBox>
            <Label htmlFor="checkPersonalInfo">
              개인정보 수집 및 이용 동의
            </Label>
            <SpanEssential color="red">(필수)</SpanEssential>
          </LabelWrapper>

          <TextArea
            disabled
            value={` ${paragraph_3}\n\n ${paragraph_1}\n\n ${paragraph_2}`}
          />
        </CheckWrapper>
        <CheckWrapper>
          <LabelWrapper>
            <CheckBox
              checked={checkPromotion}
              type="checkbox"
              id="checkPromotion"
              onChange={(e) =>
                changeCheckState(
                  setCheckPromotion,
                  e,
                  checkAgree,
                  checkPersonal
                )
              }
            ></CheckBox>
            <Label htmlFor="checkPromotion">{companyName} 정보 수신 동의</Label>
            <SpanEssential>(선택)</SpanEssential>
          </LabelWrapper>
          <TextArea
            disabled
            value={` ${paragraph_2}\n\n ${paragraph_1}\n\n ${paragraph_3}`}
          />
        </CheckWrapper>
        <ButtonWrapper>
          <Button
            onClick={() => {
              router.push(`/`);
            }}
          >
            취소
          </Button>
          <Button
            onClick={() => {
              router.push(`/signUp`);
            }}
          >
            확인
          </Button>
        </ButtonWrapper>
      </MainWrapper>
    </Wrapper>
  );
}
export default TermsOfService;
