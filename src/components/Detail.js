import React from 'react'
import styled from 'styled-components'

const Detail = () => {
  return (
    <Container>
        
        <Background>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz6YESkL8__pJqXluBzmW-78b9EhsD1aVJR1dNZoY3Uw&s'/>
        </Background>
        <ImageTitle>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3qI4dY3IqhcCY7mZEqrIiP1ZcB_0CXmdORdGUbFaQEQ&s'/>
        </ImageTitle>
        <Controls>
            <PlayButton>
                <img src='/images/play-icon-black.png'/>
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
                <img src='/images/play-icon-white.png'/>
                <span>Trailer</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src='/images/group-icon.png'/>
            </GroupWatchButton>
        </Controls>
        <SubTitle>
            2018 . 7m . Family, Fantasy, Kids, Animation
        </SubTitle>
        <Description>
            A Chinese mom who's sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
        </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top:  0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    margin-bottom: 12px;
    margin-top: 60px;

    img{
        width: 100%;
        height:100%;
        object-fit: contain
        z-index: 1;
        opacity: 0.5;
        
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;

`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    backgrond-color: rgb(249, 249, 249);
    border: none;
    padding: 0px 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover{
        background: rgb(198, 198, 198)
    }
    
`
const TrailerButton = styled(PlayButton)`
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-trabsform: uppercase;
`
const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;


    span{
        font-size: 30px;
        color: white;
    }
`
const GroupWatchButton = styled(AddButton)`
    background-color: rgba(0, 0, 0);
`
const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    min-width: 26px;
`
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;
`