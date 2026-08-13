export const aiQuizStages = [
  {
    id: 1,
    imageSrc: '/src/Assets/img/quiz/Fake/103.png', // Ganti dengan path gambar kamu
    question: 'Is this picture ai generated or real?',
    correctAnswer: 'False', // 'True' atau 'False'
    // Route ending setelah selesai
    nextEnding: '/endingsafe'
  },
  {
    id: 2,
    imageSrc: '/src/Assets/img/quiz/Fake/112.png',
    question: 'Is this picture ai generated or real?',
    correctAnswer: 'False',
    nextEnding: '/endingsafe'
  },
  {
    id: 3,
    imageSrc: '/video/109.mp4',
    question: 'Is this picture ai generated or real?',
    correctAnswer: 'False',
    nextEnding: '/endingsafe'
  },
  {
    id: 4,
    imageSrc: '/src/Assets/img/quiz/Real/534.jpeg',
    question: 'Is this picture ai generated or real?',
    correctAnswer: 'True',
    nextEnding: '/endingsafe'
  },
  {
    id: 5,
    imageSrc: '/src/Assets/img/quiz/Real/345.jpeg',
    question: 'Is this picture ai generated or real?',
    correctAnswer: 'True',
    nextEnding: '/endingsafe'
  }

];