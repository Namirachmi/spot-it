import imgOne from '../../../Assets/img/quiz/Fake/103.png';
import imgTwo from '../../../Assets/img/quiz/Fake/112.png';
import imgThree from '../../../Assets/img/quiz/Real/534.jpeg';
import imgFour from '../../../Assets/img/quiz/Real/345.jpeg';

export const aiQuizStages = [
  {
    id: 1,
    imageSrc: imgOne,
    question: 'Is this picture ai generated or real?',
    correctAnswer: 'True',
    // Route ending setelah selesai
    nextEnding: '/endingsafe'
  },
  {
    id: 2,
    imageSrc: imgTwo,
    question: 'Is this picture ai generated or real?',
    correctAnswer: 'True',
    nextEnding: '/endingsafe'
  },
  {
    id: 3,
    imageSrc: '/video/109.mp4',
    question: 'Is this picture ai generated or real?',
    correctAnswer: 'True',
    nextEnding: '/endingsafe'
  },
  {
    id: 4,
    imageSrc: imgThree,
    question: 'Is this picture ai generated or real?',
    correctAnswer: 'False',
    nextEnding: '/endingsafe'
  },
  {
    id: 5,
    imageSrc: imgFour,
    question: 'Is this picture ai generated or real?',
    correctAnswer: 'False',
    nextEnding: '/endingsafe'
  }

];
