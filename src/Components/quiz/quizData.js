// quizData.js

export const quizStages = [
  // STAGE 0: Pilihan Topik (Sisi Kiri Kosong)
  {
    id: 'stage-0',
    imageSrc: null,
    officialText: null,
    questionBoxes: [
      { id: 'q1', text: 'Choose the hot topic!' }
    ],
    options: [
      // Topik A: Lanjut ke Stage 1 (Breaking News)
      { id: 'A', label: 'A.', text: 'Breaking News', colorClass: 'BtnPink', nextStageIndex: 1 },
      
      // Topik B: Langsung Navigasi ke Halaman /quizai
      { id: 'B', label: 'B.', text: 'AI or Real', colorClass: 'BtnTeal', targetRoute: '/quizai' },
      
      // Topik C: (Bisa diisi route lain nanti jika ada)
      { id: 'C', label: 'C.', text: 'Health & Beauty Hoax', colorClass: 'BtnPurple', nextStageIndex: 1 }
    ]
  },

  // STAGE 1: Skenario 1 (Sisi Kiri Muncul Gambar)
  {
    id: 'stage-1',
    imageSrc: '/src/Assets/img/question1-illustration.png',
    officialText: null,
    questionBoxes: [
      { id: 'q1', text: 'What would you do first?' }
    ],
    options: [
      { 
        id: 'A', 
        label: 'A.', 
        text: 'Share it immediately so more people stay safe. Your friends saw it and immediately started forwarding it.', 
        colorClass: 'BtnPink',
        nextStageIndex: 2
      },
      { 
        id: 'B', 
        label: 'B.', 
        text: 'Check where this information comes from. (Best Option). You open the account. And it seems a little bit suspicious.', 
        colorClass: 'BtnTeal',
        nextStageIndex: 2 
      },
      { 
        id: 'C', 
        label: 'C.', 
        text: 'Ignore the post and continue scrolling. You don\'t share it. However, your friends begin discussing it in the chatA', 
        colorClass: 'BtnPurple',
        nextStageIndex: 2 
      }
    ]
  },

  // STAGE 2: Skenario 2 (Gambar Hilang + Teks Pernyataan di Bawah)
  {
    id: 'stage-2',
    imageSrc: null,
    officialText: 'Official disaster agency:\n"No official warning has been issued."',
    questionBoxes: [
      { id: 'q1', text: '"Is this real? My parents and everyone are already panicking."\nWhat do you reply?' },
      { id: 'q2', text: 'What will you do now?' }
    ],
    options: [
      { 
        id: 'A', 
        label: 'A.', 
        text: 'Warn your friends and include the official source.', 
        colorClass: 'BtnPink',
        endingRoute: '/endingsafe'
      },
      { 
        id: 'B', 
        label: 'B.', 
        text: 'Delete your share, but don\'t say anything.', 
        colorClass: 'BtnTeal',
        endingRoute: '/endingneutral'
      },
      { 
        id: 'C', 
        label: 'C.', 
        text: 'Leave it as it is because it\'s already everywhere', 
        colorClass: 'BtnPurple',
        endingRoute: '/endingrisky'
      }
    ]
  }
];