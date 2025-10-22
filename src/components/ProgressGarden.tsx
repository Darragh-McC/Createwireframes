import { Plus } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export default function ProgressGarden() {
  const plants = [
    { emoji: '🌷', entry: 'Felt grateful after studying outside.' },
    { emoji: '🌻', entry: 'Mood: Happy | Sleep: 8h | Stress: Low' },
    { emoji: '🌵', entry: 'Journaled about work-life balance' },
    { emoji: '🌸', entry: 'Practiced mindfulness for 10 minutes' },
    { emoji: '🌼', entry: 'Had a great conversation with family' },
    { emoji: '🌺', entry: 'Completed a difficult task today' },
    { emoji: '🌿', entry: 'Morning walk in nature' },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1>🌿 Progress Garden</h1>
        <p className="text-gray-600">🌼 "Every entry helps your garden grow."</p>
        <p className="text-xs text-gray-400">SmartJournal</p>
      </div>

      {/* Current Time */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>🌞 Good Morning</span>
        <span>10:40am</span>
      </div>

      {/* Garden Grid */}
      <Card className="p-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="grid grid-cols-5 gap-4 place-items-center">
          {plants.map((plant, idx) => (
            <button
              key={idx}
              className="text-5xl hover:scale-110 transition-transform cursor-pointer"
              title={plant.entry}
            >
              {plant.emoji}
            </button>
          ))}
        </div>
      </Card>

      {/* Plant Info */}
      <Card className="p-6 bg-white/80 backdrop-blur">
        <h2 className="mb-3">🪴 Tap any plant to view its entry:</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span>🌸</span>
            <span>"Felt grateful after studying outside."</span>
          </li>
          <li className="flex items-start gap-2">
            <span>🌻</span>
            <span>"Mood: Happy | Sleep: 8h | Stress: Low"</span>
          </li>
        </ul>
      </Card>

      {/* Streak Card */}
      <Card className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-600">🎯 Your Streak</div>
            <div className="text-2xl mt-1">7 days 🌤️</div>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus size={18} className="mr-2" />
            💧 Water Garden
          </Button>
        </div>
      </Card>

      {/* Achievements */}
      <Card className="p-6 bg-white/80 backdrop-blur">
        <h2 className="mb-4">🏅 Achievements</h2>
        <div className="flex flex-wrap gap-3">
          <Badge className="bg-purple-100 text-purple-700 px-4 py-2 border border-purple-300">
            ✅ First Week Completed
          </Badge>
          <Badge className="bg-pink-100 text-pink-700 px-4 py-2 border border-pink-300">
            🌼 5 Gratitude Notes Logged
          </Badge>
          <Badge className="bg-blue-100 text-blue-700 px-4 py-2 border border-blue-300">
            🧘 Mindfulness Beginner
          </Badge>
          <Badge className="bg-green-100 text-green-700 px-4 py-2 border border-green-300">
            🌱 Garden Started
          </Badge>
        </div>
      </Card>
    </div>
  );
}
