export const aiQuizStages = [
  {
    id: 1,
    imageSrc: '/src/Assets/img/ai-sample-1.jpg', // Ganti dengan path gambar kamu
    question: 'Is this picture of Mona Lisa are ai generated or real artwork?',
    correctAnswer: 'False', // 'True' atau 'False'
    // Route ending setelah selesai
    nextEnding: '/endingsafe'
  },
  {
    id: 2,
    imageSrc: '/src/Assets/img/ai-sample-2.jpg',
    question: 'Is this picture of Futuristic City are ai generated or real artwork?',
    correctAnswer: 'True',
    nextEnding: '/endingrisky'
  }
];