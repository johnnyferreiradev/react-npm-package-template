import React from 'react';

function App() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="w-full h-full min-h-screen flex flex-col items-center py-16 dark:bg-slate-900">
        <p className="text-xl font-bold mb-4 text-center text-slate-950 dark:text-white bg-primary-600 p-2 rounded">
          My library
        </p>
        <h1 className="text-4xl font-bold mb-4">
          BlastZone: Component Playground 💣
        </h1>

        <div className="flex-1 w-full max-w-[900px] bg-slate-50/50 dark:bg-slate-950 rounded-xl p-4">
          <div className="flex items-center gap-1"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
