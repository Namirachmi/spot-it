// quizData.js

// Stage 0: Pemilihan topik
export const topicSelectionStage = {
  id: 'stage-0',
  imageSrc: null,
  officialText: null,
  questionBoxes: [
    { id: 'q1', text: 'Choose the hot topic!' }
  ],
  options: [
    { id: 'A', label: 'A.', text: 'Breaking News', colorClass: 'BtnPink', topicKey: 'breakingNews' },
    { id: 'B', label: 'B.', text: 'AI or Real', colorClass: 'BtnTeal', targetRoute: '/quizai' },
    { id: 'C', label: 'C.', text: 'Health & Beauty Hoax', colorClass: 'BtnPurple', topicKey: 'healthBeauty' }
  ]
};

// Data Topik 1: Breaking News
export const breakingNewsStages = [
  {
    id: 'stage-1',
    imageSrc: '/src/Assets/img/question1-illustration.png',
    officialText: null,
    questionBoxes: [{ id: 'q1', text: 'What would you do first?' }],
    options: [
      { id: 'A', label: 'A.', text: 'Share it immediately so more people stay safe. Your friends saw it and immediately started forwarding it.', colorClass: 'BtnPink', nextStageIndex: 1 },
      { id: 'B', label: 'B.', text: 'Check where this information comes from. You open the account. And it seems a little bit suspicious.', colorClass: 'BtnTeal', nextStageIndex: 1 },
      { id: 'C', label: 'C.', text: 'Ignore the post and continue scrolling. You don\'t share it. However, your friends begin discussing it in the chat', colorClass: 'BtnPurple', nextStageIndex: 1 }
    ]
  },
  {
    id: 'stage-2',
    imageSrc: null,
    officialText: null,
    questionBoxes: [{ id: 'q1', text: 'Is this real? My parents and everyone are already panicking.\nWhat do you reply?' }],
    options: [
      { id: 'A', label: 'A.', text: 'Everyone is posting it, so it must be true. Quick, share it to everyone just in case.', colorClass: 'BtnPink', nextStageIndex: 2 },
      { id: 'B', label: 'B.', text: 'I don\'t know.', colorClass: 'BtnTeal', nextStageIndex: 2 },
      { id: 'C', label: 'C.', text: 'I\'m not sure. Let\' check official sources.', colorClass: 'BtnPurple', nextStageIndex: 2 }
    ]
  },
  {
    id: 'stage-3',
    imageSrc: null,
    officialText: 'Official disaster agency:\n"No official warning has been issued."',
    questionBoxes: [
      { id: 'q1', text: '"Is this real? My parents and everyone are already panicking."\nWhat do you reply?' },
      { id: 'q2', text: 'What will you do now?' }
    ],
    options: [
      { id: 'A', label: 'A.', text: 'Warn your friends and include the official source.', colorClass: 'BtnPink', endingRoute: '/endingsafe' },
      { id: 'B', label: 'B.', text: 'Delete your share, but don\'t say anything.', colorClass: 'BtnTeal', endingRoute: '/endingneutral' },
      { id: 'C', label: 'C.', text: 'Leave it as it is because it\'s already everywhere', colorClass: 'BtnPurple', endingRoute: '/endingrisky' }
    ]
  }
];

// Data Topik 2: Health & Beauty Hoax
export const healthBeautyStages = [
  {
    id: 'hb-stage-1',
    imageSrc: '/src/Assets/img/health-illustration.png',
    officialText: null,
    questionBoxes: [{ id: 'q1', text: 'Toothpaste is a safe and effective treatment for pimples.' }],
    options: [
      { id: 'A', label: 'A.', text: 'True', colorClass: 'BtnPink', nextStageIndex: 1 },
      { id: 'B', label: 'B.', text: 'False', colorClass: 'BtnTeal', nextStageIndex: 1 },
    ]
  },
  {
    id: 'hb-stage-2',
    imageSrc: null,
    officialText: 'You decided to try it overnight. The next morning, your skin became irritated and the pimple looked even worse.',
    questionBoxes: [{ id: 'q1', text: 'Which red flag did you miss?' }],
    options: [
      { id: 'A', label: 'A.', text: 'High number of likes', colorClass: 'BtnPink', endingRoute: '/endingneutral' },
      { id: 'B', label: 'B.', text: 'No medical source cited', colorClass: 'BtnTeal', endingRoute: '/endingsafe'},
      { id: 'C', label: 'C.', text: 'Viral comments', colorClass: 'BtnPurple', endingRoute: '/endingrisky' }
    ]
  }
];