import { ArrowLeft } from 'lucide-react';
import { Card } from './ui/card';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

export default function WeeklyReflection() {
  const moodData = [
    { day: 'Mon', mood: '😊' },
    { day: 'Tue', mood: '😌' },
    { day: 'Wed', mood: '😕' },
    { day: 'Thu', mood: '😊' },
    { day: 'Fri', mood: '😇' },
    { day: 'Sat', mood: '😴' },
    { day: 'Sun', mood: '😊' },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {/* Page Title */}
      <div className="text-center">
        <h1>Weekly Reflection</h1>
        <p className="text-sm text-gray-500 mt-1">Review your week with SmartJournal</p>
      </div>

      {/* Week Info */}
      <Card className="p-4 bg-white/80 backdrop-blur">
        <p className="text-center text-gray-600">📅 Week of Oct 6 – Oct 12, 2025</p>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="text-sm text-gray-600">😊 Average Mood</div>
          <div className="mt-1">Good</div>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="text-sm text-gray-600">💤 Avg Sleep</div>
          <div className="mt-1">7h 10m</div>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="text-sm text-gray-600">😌 Stress Level</div>
          <div className="mt-1">Moderate</div>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="text-sm text-gray-600">🙏 Gratitude Entries</div>
          <div className="mt-1">12</div>
        </Card>
      </div>

      {/* Mood Over Time */}
      <Card className="p-6 bg-white/80 backdrop-blur">
        <h2 className="mb-4">📊 Mood Over Time</h2>
        <div className="flex justify-around items-end h-32">
          {moodData.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <div className="text-2xl">{item.mood}</div>
              <div className="text-xs text-gray-500">{item.day}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Highlights */}
      <Card className="p-6 bg-white/80 backdrop-blur">
        <h2 className="mb-4">💬 Highlights of the Week</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>"Had a great walk with a friend"</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>"Finished project early and felt relieved"</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>"Slept poorly midweek but improved after Friday"</span>
          </li>
        </ul>
      </Card>

      {/* Reflection Prompt */}
      <Card className="p-6 bg-white/80 backdrop-blur">
        <h2 className="mb-4">💭 Reflection Prompt</h2>
        <p className="text-gray-600 mb-3">"What made you happiest this week?"</p>
        <Textarea
          placeholder="Write your reflection here..."
          className="min-h-[100px] resize-none"
        />
      </Card>

      {/* AI Insight */}
      <Card className="p-6 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 border-none">
        <h2 className="mb-2">✨ AI Insight</h2>
        <p className="text-gray-700 italic">
          "You tend to feel calmer on days you journal before bed."
        </p>
      </Card>

      {/* Save Button */}
      <Button className="w-full bg-purple-600 hover:bg-purple-700">
        Save Reflection
      </Button>
    </div>
  );
}
