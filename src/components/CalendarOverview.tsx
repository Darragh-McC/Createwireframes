import { ArrowLeft, Search } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

export default function CalendarOverview() {
  const calendarWeeks = [
    ['', '😌', '🙂', '😕', '😍', '😴', '😐'],
    ['😍', '😌', '😡', '🙂', '😴', '😇', '😌'],
    ['😐', '😴', '😌', '😕', '😍', '😴', '😇'],
    ['😇', '😊', '😌', '😊', '😍', '', ''],
  ];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1>📅 Calendar Overview</h1>
        <p className="text-xs text-gray-400">Track your mood timeline with SmartJournal</p>
      </div>

      {/* Month Selector */}
      <Card className="p-4 bg-white/80 backdrop-blur">
        <div className="flex items-center justify-between">
          <button className="text-gray-600 hover:text-gray-900">◀</button>
          <h2>October 2025</h2>
          <button className="text-gray-600 hover:text-gray-900">▶</button>
        </div>
      </Card>

      {/* Calendar Grid */}
      <Card className="p-4 bg-white/90 backdrop-blur">
        <div className="grid grid-cols-7 gap-2 text-center">
          {/* Day Headers */}
          {days.map((day) => (
            <div key={day} className="text-xs text-gray-500 py-2">
              {day}
            </div>
          ))}
          
          {/* Calendar Days */}
          {calendarWeeks.map((week, weekIdx) => (
            week.map((emoji, dayIdx) => (
              <div
                key={`${weekIdx}-${dayIdx}`}
                className={`aspect-square flex items-center justify-center text-2xl rounded-lg hover:bg-purple-50 transition-colors cursor-pointer ${
                  emoji ? 'bg-white border border-gray-200' : ''
                }`}
              >
                {emoji}
              </div>
            ))
          ))}
        </div>
      </Card>

      {/* Legend */}
      <div className="flex gap-4 text-xs text-gray-600 justify-center flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-400"></div>
          <span>Journal Entry Logged</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <span>Gratitude Added</span>
        </div>
      </div>

      {/* Selected Day Summary */}
      <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <h2 className="mb-4">🪞 Summary for Oct 13</h2>
        <div className="space-y-2 text-gray-700">
          <div className="flex items-center gap-2">
            <span>Mood:</span>
            <span>😊 Good</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Sleep:</span>
            <span>7h 20m</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Stress:</span>
            <span>Low</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Gratitude:</span>
            <span>2 things</span>
          </div>
          <p className="mt-3 italic text-gray-600">
            "Had a peaceful morning walk."
          </p>
        </div>
      </Card>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap items-center">
        <span className="text-sm text-gray-600">🔍 Filter:</span>
        <Button variant="outline" size="sm">Mood ▼</Button>
        <Button variant="outline" size="sm">Month ▼</Button>
        <div className="ml-auto flex gap-2">
          <Button variant="outline" size="sm">List</Button>
          <Button variant="outline" size="sm" className="bg-purple-100">Grid</Button>
        </div>
      </div>
    </div>
  );
}
