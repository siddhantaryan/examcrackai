import type { Track } from '@/types';

export const TRACKS: Track[] = [
  {
    id: 'bpsc-6-8',
    title: 'BPSC TRE 4.0 - Classes 6-8',
    level: 'Classes 6-8',
    subject: 'Math, Science, GK/GS, Aptitude, Teaching Ability',
    icon: '📐',
    description: 'Complete preparation for BPSC TRE 4.0',
    color: 'blue',
    examType: 'BPSC TRE',
  },
  {
    id: 'bpsc-9-10',
    title: 'BPSC TRE 4.0 - Classes 9-10',
    level: 'Classes 9-10',
    subject: 'Math, Science, GK/GS, Aptitude, Teaching Ability',
    icon: '📐',
    description: 'Complete preparation for BPSC TRE 4.0',
    color: 'cyan',
    examType: 'BPSC TRE',
  },
  {
    id: 'bpsc-11-12',
    title: 'BPSC TRE 4.0 - Classes 11-12',
    level: 'Classes 11-12',
    subject: 'CS, GK/GS, Teaching Ability, Language',
    icon: '💻',
    description: 'Complete preparation for BPSC TRE 4.0',
    color: 'purple',
    examType: 'BPSC TRE',
  },
  {
    id: 'jee-main',
    title: 'JEE Main - PCM',
    level: 'Class 11-12',
    subject: 'Physics, Chemistry, Mathematics',
    icon: '⚛️',
    description: 'Complete JEE Main preparation with PCM',
    color: 'orange',
    examType: 'JEE Main',
  },
  {
    id: 'jee-advanced',
    title: 'JEE Advanced - PCM',
    level: 'Class 11-12',
    subject: 'Physics, Chemistry, Mathematics',
    icon: '🔬',
    description: 'Complete JEE Advanced preparation with PCM',
    color: 'red',
    examType: 'JEE Advanced',
  },
  {
    id: 'neet',
    title: 'NEET - PCB',
    level: 'Class 11-12',
    subject: 'Physics, Chemistry, Biology',
    icon: '🧬',
    description: 'Complete NEET preparation with PCB',
    color: 'green',
    examType: 'NEET',
  },
];

export const TRACK_MAP: Record<string, Track> = TRACKS.reduce(
  (acc, t) => ({ ...acc, [t.id]: t }),
  {} as Record<string, Track>
);
