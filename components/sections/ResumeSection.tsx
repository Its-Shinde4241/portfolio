import React from 'react';
import { ExternalLink, FileUser } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const resumeUrl = 'https://drive.google.com/file/d/1_UC8_HMbvUXVwpAlfbs9eBdKl_cs9fyn/view?usp=drive_link'; // Update with actual resume URL
  const handleDownload = () => {
    window.open(resumeUrl, '_blank');
  }
  return (
    <div className="flex flex-col items-center justify-center space-y-8 text-center">
      <div className="w-24 h-24 bg-foreground/10 rounded-full flex items-center justify-center text-primary mb-4">
        <FileUser size={48} />
      </div>
      <h2 className="font-title text-4xl text-foreground">My Resume</h2>
      <p className="text-muted-foreground max-w-md">
        Download my resume to get a detailed overview of my experience, education, and achievements.
      </p>
      <button
        className="cursor-pointer px-8 py-3 bg-white/20 dark:bg-white/10 backdrop-blur-xl border border-white/30 dark:border-white/20 text-foreground font-bold rounded-full hover:bg-white/30 dark:hover:bg-white/15 transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:text-blue-500"
        style={{
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.12),
            0 2px 8px rgba(0, 0, 0, 0.08),
            inset 0 1px 1px rgba(255, 255, 255, 0.4),
            inset 0 -1px 1px rgba(0, 0, 0, 0.05),
            0 0 0 0.5px rgba(255, 255, 255, 0.2)
          `
        }}
        onClick={handleDownload}
      >
        <span>OPEN</span>
        <ExternalLink size={16} />
      </button>
    </div>
  );
};