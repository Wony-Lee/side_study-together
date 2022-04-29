import { storageService } from "./fBase";

export function ChangeProfilePhoto(files, setState) {
  const reader = new FileReader();
  reader.onloadend = (finishedEvent) => {
    const {
      currentTarget: { result },
    } = finishedEvent;
    setState(result);
    // console.log(result);
  };
  /** readAsDataURL
   * 컨텐츠를 특정 Blob 이나 File에서 읽어 오는 역할
   * 읽어오는 read 행위가 종료되는 경우에, readyState의 상태가 DONE이 되며,
   * loadend (en-US) 이벤트가 트리거 됩니다.
   */
  reader.readAsDataURL(files);
}

export async function UploadFileToFireBase(attachment) {
  const fileRef = storageService.ref().child(`${"userID"}/${"uniqueText"}`);
  const response = await fileRef.putString(attachment, "data_url");
  console.log(response);
}