import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/home/home';
import Start from './Components/quiz/start';
import Introduction from './Components/quiz/introduction';
import StackingCards from './Components/stackingCards/stackingCards';
import OpeningIntro from './Components/openingIntro/OpeningIntro';
import ReadyOrNot from './Components/quiz/readyOrNot';
import QuizTemplate from './Components/quiz/quizTemplate';
import EndingPage from './Components/quiz/endingPage';
import QuizAiTemplate from './Components/quiz/aiOrRealQuiz/quizAiTemplate';
import './app.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/readyornot" element={<ReadyOrNot />} />
        <Route path="/quizbreakingnews" element={<QuizTemplate />} />
        <Route path="/quizai" element={<QuizAiTemplate />} />

        {/* 1. GOOD ENDING (Hijau Toska) */}
        <Route 
          path="/endingsafe" 
          element={
            <EndingPage 
              title="congrats!!!"
              message="You helped stop the spread of misinformation. By sharing information from an official source, you helped your friends understand the situation and prevented unnecessary panic."
              quote="“One verified message can stop hundreds of misleading ones.”"
              bgClass="BgTeal"
            />
          } 
        />

        {/* 2. NEUTRAL ENDING (Oranye) */}
        <Route 
          path="/endingneutral" 
          element={
            <EndingPage 
              title="Great Job!!"
              message="You protected yourself, but not others. Deleting your post prevented further sharing from your account, but your friends may still believe the misinformation. Sometimes correcting misinformation is just as important as avoiding it."
              bgClass="BgOrange"
            />
          } 
        />

        {/* 3. BAD ENDING (Pink / Merah) */}
        <Route 
          path="/endingrisky" 
          element={
            <EndingPage 
              title="Oh No!"
              message="The misinformation kept spreading. Although the information was proven false, choosing not to act allowed more people to continue sharing it. Doing nothing can also contribute to misinformation."
              bgClass="BgPink"
            />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App
