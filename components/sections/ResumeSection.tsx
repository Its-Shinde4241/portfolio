import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const resumeUrl = 'https://drive.google.com/uc?export=download&id=1nQhqckh4m34oQp1q8f5EHd8BIJQF6tpE'; // Update with actual resume URL
  const handleDownload = () => {
    window.open(resumeUrl, '_blank');
  }
  return (
    <div className="flex flex-col items-center justify-center space-y-8 text-center">
      <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-primary mb-4">
        <FileText size={48} />
      </div>
      <h2 className="font-title text-4xl text-foreground">My Resume</h2>
      <p className="text-muted-foreground max-w-md">
        Download my resume to get a detailed overview of my experience, education, and achievements.
      </p>
      <button className="cursor-pointer px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 flex items-center gap-2" onClick={handleDownload}>
        <span>DOWNLOAD PDF</span>
        <ExternalLink size={16} />
      </button>
    </div>
  );
};