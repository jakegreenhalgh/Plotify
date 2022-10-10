import React from 'react'
import styled from 'styled-components'

const QuizItem = ({songName, songID, songArtists, checkQuestion, answeredQuestions, preview, songImage}) => {

let audio = new Audio(preview)

const handleGuess = () => {
    if (!answeredQuestions.hasOwnProperty(songID)) 
    checkQuestion(songID)
    audio.pause()
    
}
const playTrack = () => {
    audio.currentTime = 0
    audio.play()
}
const pauseTrack = () => {
    audio.pause()
}  

const getButtonStatus = (answeredQuestions, songID) => {
    if (!answeredQuestions.hasOwnProperty(songID)){
        return <QuestionUnanswered>
                <Wrapper onMouseEnter={playTrack} onMouseLeave={pauseTrack} onClick={handleGuess}>
        <SongImage src={songImage}/>
        <Details>
            {/* <UserName>
                {songName}
            </UserName> */}
            <Info>
            {songName} by {songArtists[0].name}{songArtists[1]?", "+songArtists[1].name:null}
            </Info>
        </Details>
    </Wrapper>
        </QuestionUnanswered>
        // return <QuestionUnanswered onMouseEnter={playTrack} onMouseLeave={pauseTrack} onClick={handleGuess}>{songName} | {songArtists[0].name}{songArtists[1]?", "+songArtists[1].name:null}</QuestionUnanswered>
    } else if (answeredQuestions[songID]) {
        return <QuestionCorrect disabled={answeredQuestions.hasOwnProperty(songID)}>
            <Wrapper onMouseEnter={playTrack} onMouseLeave={pauseTrack} onClick={handleGuess} disabled={true}>
        <SongImage src={songImage}/>
        <Details>
            {/* <Comment>
                {songName}
            </Comment> */}
            <Info>
            {songName} by {songArtists[0].name}{songArtists[1]?", "+songArtists[1].name:null}
            </Info>
        </Details>
    </Wrapper>
        </QuestionCorrect>
        // return <QuestionCorrect onMouseEnter={playTrack} onMouseLeave={pauseTrack} disabled={answeredQuestions.hasOwnProperty(songID)}  onClick={handleGuess}>{songName} | {songArtists[0].name}{songArtists[1]?", "+songArtists[1].name:null}</QuestionCorrect>
    } else {
        return <QuestionIncorrect disabled={answeredQuestions.hasOwnProperty(songID)}>
            <Wrapper onMouseEnter={playTrack} onMouseLeave={pauseTrack} onClick={handleGuess} disabled={true}>
        <SongImage src={songImage}/>
        <Details>
            {/* <UserName>
                {songName}
            </UserName> */}
            <Info>
            {songName} by {songArtists[0].name}{songArtists[1]?", "+songArtists[1].name:null}
            </Info>
        </Details>
    </Wrapper>
        </QuestionIncorrect>
        // return <QuestionIncorrect onMouseEnter={playTrack} disabled={answeredQuestions.hasOwnProperty(songID)}  onClick={handleGuess}>{songName} | {songArtists[0].name}{songArtists[1]?", "+songArtists[1].name:null}</QuestionIncorrect>
    }
}
const buttonStatus = getButtonStatus(answeredQuestions, songID)


  return (
    <>
    {buttonStatus}
    </>
  )
}

export default QuizItem

const QuestionUnanswered = styled.button`
    margin-right: 4px;
    color: #16425B;
    background-color: #16425B;
    
`

const QuestionCorrect = styled.button`
    margin-right: 4px;
    color: green;
    background-color: green;
`

const QuestionIncorrect = styled.button`
    margin-right: 4px;
    color: red;
    background-color: red;
`
// return (
//     <Wrapper onMouseEnter={playTrack} onMouseLeave={pauseTrack} onClick={handleGuess}>
//         <ProfileImage src={songImage}/>
//         <Details>
//             <UserName>
//                 {songName}
//             </UserName>
//             <Info>
//             {songArtists[0].name}{songArtists[1]?", "+songArtists[1].name:null}
//             </Info>
//         </Details>
//     </Wrapper>
// )

const Wrapper = styled.li`
    display: flex;
    margin: 10px auto;
    height: 50px;
    width: 300px;
    padding: 10px;
    border-radius: 5px;

`

const SongImage = styled.img.attrs(props => ({ src: props.src }))`
    width: 60px;
    height: 60px;
    opacity: 0.8;
    border-style: solid;
`;

const Comment = styled.blockquote`
    margin: 10px 0;
    font-size: 1.1rem;
`;

const Info = styled.span`
    font-size: 10rem;
    color: white; 
    a {
        text-decoration: bold;

        &:hover {
            text-decoration: underline;
        }
    }

    font-size: 0.8rem;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
`;

const UserName = styled.div`
    color: white; 
    a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;