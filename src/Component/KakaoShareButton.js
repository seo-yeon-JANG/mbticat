import React from "react";
import Button from 'react-bootstrap/Button'
const {Kakao} = window;

const KakaoShareButton = () =>{
    const url = "https://catmbti31.netlify.app/"
    const resultUrl = window.location.href;
    console.log('aaa',resultUrl,url)
    React.useEffect(()=>{
        Kakao.cleanup()
        Kakao.init("83ed54402667790640a4959b849196e8")
        console.log(Kakao.isInitialized)
    },[])
    const shareKakao = () =>{
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '예비집사 판별기 결과',
          description: '예비 집사님이 고양이를 키운다면 가장 잘 맞는 고양이는?',
          imageUrl:
            'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            androidExecutionParams: 'test',
          },
        },
        buttons: [
          {
            title: '나도 테스트 하러가기',
            link: {
              mobileWebUrl: url,
            },
          }
        ]
      });
    }
      return(<Button onClick={shareKakao} style={{marginLeft:10}}>카카오톡 공유하기</Button>)
}
export default KakaoShareButton