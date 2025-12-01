import React from 'react';

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  url: string | null;
  github: string;
  backimage: string;
}

export interface Education {
  start?: string;
  end: string;
  title: string;
  description: string;
  place: string;
  institute: string;
  logoLink?: string;
  technologies: string[];
}

export interface Work {
  company_name: string;
  company_logo?: string;
  role: string;
  start: string;
  end: string;
  place: string;
  description: string;
  technologies: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface FileNode {
  id: string;
  name: string;
  type: 'file' | 'folder';
  content?: string;
  children?: FileNode[];
}