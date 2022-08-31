import React from "react";
//css-in-js 자바스크립트에서 css에서 사용 코드
import '../App.css'
import styled from 'styled-components'
import catImage from '../asset/cat_image.jpg'
import Button from 'react-bootstrap/Button' //부트스트랩 버튼 디자인 사용 코드
import { useNavigate } from "react-router-dom"; //useNavigate는 양식이 제출되거나 특정 event가 발생, url을 조작할 수 있는 interface를 제공

const Home = () =>{
    const navigate = useNavigate() //useNavigate의 변수는 navigate
    const handleClickButton = ()=>{
        //useHistory
        navigate('/question') //navigate('이동하고 싶은 주소(url)')
    }//페이지 이동
    return (
    <Wrapper className="App">
        <Header>
            예비집사 판별기
        </Header>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImage>
            <img src={catImage} className="rounded-circle" width={350} height={350} alt="cat image" />
        </LogoImage>
        <Desc>MBTI를 기반으로하는 나랑 잘맞는 고양이 찾기</Desc>
        <Button variant="danger" onClick={handleClickButton}>테스트 시작하기</Button>
    </Wrapper>
    )
}

export default Home;

const Wrapper = styled.div`
    background-color:pink;
    height:100vh;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items: center;
`
const Header = styled.div`
    font-size: 40px;
`
const Title = styled.div`
    font-size: 30px;
    margin-top:40px;
`
const LogoImage = styled.div`
    margin-top:10px;
`
const Desc = styled.div`
    font-size:20px;
    margin-top:20px;
`
//const Button = styled.div`
//`