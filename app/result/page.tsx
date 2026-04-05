'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { examConfig, getQuestions } from '@/lib/examConfig';

export default function ResultScreen() {
  const router = useRouter();
  const [results, setResults] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<string>('summary'); // 'summary' or subtestId

  useEffect(() => {
    const data = sessionStorage.getItem('examResults');
    if (!data) {
      router.push('/');
      return;
    }
    
    const parsedData = JSON.parse(data);
    
    // Process results to include correct/wrong counts
    const processedResults = parsedData.map((res: any) => {
      const configInfo = examConfig.find(e => e.id === res.subtestId);
      const qsData = getQuestions(res.subtestId);
      
      let correct = 0;
      let wrong = 0;
      let skipped = 0;
      
      const detailedAnswers = qsData.map((q: any, i: number) => {
        const userAnswer = res.answers[i];
        if (!userAnswer) {
          skipped++;
          return { ...q, userAnswer: null, status: 'skipped' };
        }
        
        if (userAnswer === q.answer) {
          correct++;
          return { ...q, userAnswer, status: 'correct' };
        } else {
          wrong++;
          return { ...q, userAnswer, status: 'wrong' };
        }
      });
      
      const score = Math.round((correct / res.totalQuestions) * 100);
      
      return {
        ...res,
        title: configInfo?.title || res.subtestId,
        correct,
        wrong,
        skipped,
        score,
        detailedAnswers
      };
    });
    
    setResults(processedResults);
  }, [router]);

  if (!results.length) return <div className="min-h-screen bg-dark-900 flex items-center justify-center text-white">Loading Results...</div>;

  const totalQuestions = results.reduce((acc, curr) => acc + curr.totalQuestions, 0);
  const totalCorrect = results.reduce((acc, curr) => acc + curr.correct, 0);
  const averageScore = Math.round((totalCorrect / totalQuestions) * 100);

  const renderSummary = () => (
    <div className="animate-fade-in space-y-6 text-gray-200">
      
      {/* Big Score Card */}
      <div className="bg-gradient-to-br from-primary-900/40 to-indigo-900/40 border border-primary-500/30 rounded-2xl p-8 text-center relative overflow-hidden backdrop-blur-sm">
        <div className="absolute top-[-50%] left-[-10%] w-[50%] h-[200%] bg-primary-500/10 rounded-full blur-[80px] -rotate-45"></div>
        <h2 className="text-xl text-primary-200 font-medium tracking-wide mb-2">SCORE KESELURUHAN</h2>
        <div className="flex justify-center items-end gap-2 mb-4">
          <span className="text-7xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">{averageScore}</span>
          <span className="text-2xl text-primary-300 font-medium pb-2">/100</span>
        </div>
        <div className="flex justify-center gap-8 mt-6">
          <div className="text-center">
            <div className="text-green-400 font-bold text-2xl">{totalCorrect}</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Benar</div>
          </div>
          <div className="text-center">
            <div className="text-red-400 font-bold text-2xl">{results.reduce((a,c) => a+c.wrong, 0)}</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Salah</div>
          </div>
          <div className="text-center">
            <div className="text-gray-400 font-bold text-2xl">{results.reduce((a,c) => a+c.skipped, 0)}</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Kosong</div>
          </div>
        </div>
      </div>

      {/* Breakdown per Subtest */}
      <div className="grid gap-4">
        <h3 className="text-lg font-bold text-white mb-2 px-2">Rincian Per Sub-Tes</h3>
        {results.map((res, i) => (
          <div key={i} className="bg-dark-800/60 border border-dark-700 rounded-xl p-5 hover:border-dark-500 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1">
              <h4 className="font-bold text-lg text-white">{res.title}</h4>
              <div className="flex gap-4 mt-2 text-sm">
                <span className="text-green-400 font-medium">✓ {res.correct}</span>
                <span className="text-red-400 font-medium">✗ {res.wrong}</span>
                <span className="text-gray-500 font-medium">○ {res.skipped} Kosong</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-dark-700 pt-4 md:pt-0 md:pl-6">
              <div className="text-right">
                <div className="text-2xl font-bold text-white">{res.score}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">Score</div>
              </div>
              <button 
                onClick={() => setActiveTab(res.subtestId)}
                className="ml-auto md:ml-4 px-4 py-2 bg-dark-700 hover:bg-primary-600 hover:text-white rounded-lg text-sm font-medium transition-colors text-primary-300"
              >
                Lihat Pembahasan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDetails = (subtestId: string) => {
    const res = results.find(r => r.subtestId === subtestId);
    if (!res) return null;

    return (
      <div className="animate-fade-in space-y-8">
        <div className="flex items-center gap-4 bg-dark-800 p-4 rounded-xl border border-dark-700">
          <button 
            onClick={() => setActiveTab('summary')}
            className="flex items-center gap-2 text-gray-400 hover:text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Kembali
          </button>
          <div className="h-6 w-px bg-dark-700"></div>
          <h2 className="text-xl font-bold text-white">{res.title}</h2>
        </div>

        <div className="space-y-6">
          {res.detailedAnswers.map((q: any, i: number) => (
            <div key={q.id} className={`bg-dark-800 rounded-xl p-6 md:p-8 border-l-4 ${
              q.status === 'correct' ? 'border-l-green-500' : 
              q.status === 'wrong' ? 'border-l-red-500' : 'border-l-gray-500'
            }`}>
              {/* Question */}
              <div className="flex justify-between items-start gap-4 mb-4">
                <span className="shrink-0 bg-dark-700 text-gray-300 px-3 py-1 rounded-md font-mono text-sm">Soal {i+1}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  q.status === 'correct' ? 'bg-green-500/20 text-green-400' : 
                  q.status === 'wrong' ? 'bg-red-500/20 text-red-400' : 'bg-gray-500/20 text-gray-400'
                }`}>
                  {q.status === 'correct' ? 'BENAR' : q.status === 'wrong' ? 'SALAH' : 'KOSONG'}
                </span>
              </div>
              
              <div className="text-lg text-gray-100 whitespace-pre-wrap mb-6 font-medium leading-relaxed">
                {q.question}
              </div>

              {/* Options display - highlights user's and correct answer */}
              <div className="space-y-2 mb-8">
                {['A', 'B', 'C', 'D', 'E'].map(opt => {
                  if (!q.options[opt]) return null;
                  
                  let optStyle = "border-dark-700 text-gray-400";
                  let bgStyle = "bg-dark-900";
                  
                  if (opt === q.answer) {
                    optStyle = "border-green-500 text-white font-bold ring-1 ring-green-500/50";
                    bgStyle = "bg-green-500/10";
                  } else if (opt === q.userAnswer) { // Wrong answer chosen by user
                    optStyle = "border-red-500/50 text-red-200 line-through opacity-70";
                    bgStyle = "bg-red-500/10";
                  }

                  return (
                    <div key={opt} className={`flex items-start gap-3 p-3 rounded-lg border ${optStyle} ${bgStyle}`}>
                      <div className="shrink-0 w-6 font-mono text-sm">{opt}.</div>
                      <div>{q.options[opt]}</div>
                    </div>
                  )
                })}
              </div>

              {/* Explanations & TRICKS */}
              <div className="bg-dark-900 rounded-xl p-5 border border-dark-700 space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Pembahasan
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">{q.explanation}</p>
                </div>
                
                {q.trick && (
                  <div className="mt-4 bg-primary-900/30 p-4 rounded-lg border border-primary-500/20">
                    <h4 className="text-sm font-bold text-yellow-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path></svg>
                      Quick Hack / Trick
                    </h4>
                    <p className="text-primary-100 font-medium text-sm md:text-base leading-relaxed">{q.trick}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-dark-900 p-4 md:p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto pb-20">
        
        {/* Header Title */}
        <div className="mb-10 text-center animate-slide-in">
          <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400 mb-2">
            HASIL TRYOUT CBT
          </h1>
          <p className="text-gray-400">Review performa Anda dan pelajari trick menjawab cepat.</p>
        </div>

        {activeTab === 'summary' ? renderSummary() : renderDetails(activeTab)}

        {activeTab === 'summary' && (
          <div className="mt-12 text-center">
            <button 
              onClick={() => {
                sessionStorage.removeItem('examResults');
                router.push('/');
              }}
              className="px-8 py-3 bg-dark-800 hover:bg-dark-700 text-white font-bold rounded-xl border border-dark-600 transition-colors"
            >
              Kembali ke Beranda
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
