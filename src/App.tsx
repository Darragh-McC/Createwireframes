import { useState } from 'react';
import WeeklyReflection from './components/WeeklyReflection';
import GratitudeWall from './components/GratitudeWall';
import ProgressGarden from './components/ProgressGarden';
import MindfulnessHub from './components/MindfulnessHub';
import CalendarOverview from './components/CalendarOverview';
import AffirmationsPage from './components/AffirmationsPage';
import { BookOpen, Calendar, TrendingUp, Settings } from 'lucide-react';

type Page = 'reflection' | 'gratitude' | 'garden' | 'mindfulness' | 'calendar' | 'affirmations';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('reflection');

  const renderPage = () => {
    switch (currentPage) {
      case 'reflection':
        return <WeeklyReflection />;
      case 'gratitude':
        return <GratitudeWall />;
      case 'garden':
        return <ProgressGarden />;
      case 'mindfulness':
        return <MindfulnessHub />;
      case 'calendar':
        return <CalendarOverview />;
      case 'affirmations':
        return <AffirmationsPage />;
      default:
        return <WeeklyReflection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Header with Logo */}
      <header className="bg-white/80 backdrop-blur border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📔</span>
            <h1 className="text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">SmartJournal</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pb-20">
        {renderPage()}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex justify-around items-center">
            <button
              onClick={() => setCurrentPage('reflection')}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                currentPage === 'reflection' ? 'text-purple-600 bg-purple-50' : 'text-gray-600'
              }`}
            >
              <BookOpen size={20} />
              <span className="text-xs">Journal</span>
            </button>
            <button
              onClick={() => setCurrentPage('calendar')}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                currentPage === 'calendar' ? 'text-purple-600 bg-purple-50' : 'text-gray-600'
              }`}
            >
              <Calendar size={20} />
              <span className="text-xs">Tracker</span>
            </button>
            <button
              onClick={() => setCurrentPage('garden')}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                currentPage === 'garden' ? 'text-purple-600 bg-purple-50' : 'text-gray-600'
              }`}
            >
              <TrendingUp size={20} />
              <span className="text-xs">Insights</span>
            </button>
            <button
              onClick={() => setCurrentPage('mindfulness')}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                currentPage === 'mindfulness' ? 'text-purple-600 bg-purple-50' : 'text-gray-600'
              }`}
            >
              <Settings size={20} />
              <span className="text-xs">Settings</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Quick Access Menu */}
      <div className="fixed top-20 right-4 flex flex-col gap-2 z-10">
        <button
          onClick={() => setCurrentPage('gratitude')}
          className="bg-white shadow-md rounded-full p-3 hover:shadow-lg transition-shadow"
          title="Gratitude Wall"
        >
          🙏
        </button>
        <button
          onClick={() => setCurrentPage('affirmations')}
          className="bg-white shadow-md rounded-full p-3 hover:shadow-lg transition-shadow"
          title="Affirmations"
        >
          💫
        </button>
        <button
          onClick={() => setCurrentPage('mindfulness')}
          className="bg-white shadow-md rounded-full p-3 hover:shadow-lg transition-shadow"
          title="Mindfulness"
        >
          🧘
        </button>
      </div>
    </div>
  );
}
