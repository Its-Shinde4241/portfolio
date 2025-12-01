import React from 'react';

export const EmptyState: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-slate-500 bg-slate-900">
      <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 7 4 4 20 4 20 7"></polyline>
          <line x1="9" y1="20" x2="15" y2="20"></line>
          <line x1="12" y1="4" x2="12" y2="20"></line>
        </svg>
      </div>
      <h3 className="text-xl font-medium text-slate-300 mb-2">No File Selected</h3>
      <p className="max-w-md text-center">Select a file from the sidebar to view its contents, or import new files to the workspace.</p>
    </div>
  );
};