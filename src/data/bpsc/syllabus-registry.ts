import type { Syllabus, TrackId } from '@/types';
import { BPSC_6_8_SYLLABUS } from './bpsc-6-8';
import { BPSC_9_10_SYLLABUS } from './bpsc-9-10';
import { BPSC_11_12_SYLLABUS } from './bpsc-11-12';
import { JEE_MAIN_SYLLABUS } from './jee-main';
import { JEE_ADVANCED_SYLLABUS } from './jee-advanced';
import { NEET_SYLLABUS } from './neet';

export const SYLLABI: Record<TrackId, Syllabus> = {
  'bpsc-6-8': BPSC_6_8_SYLLABUS,
  'bpsc-9-10': BPSC_9_10_SYLLABUS,
  'bpsc-11-12': BPSC_11_12_SYLLABUS,
  'jee-main': JEE_MAIN_SYLLABUS,
  'jee-advanced': JEE_ADVANCED_SYLLABUS,
  'neet': NEET_SYLLABUS,
};

export function getSyllabus(trackId: TrackId): Syllabus {
  return SYLLABI[trackId];
}

export function getAllChapters(trackId: TrackId) {
  const syllabus = SYLLABI[trackId];
  const chapters: { chapter: typeof syllabus.subjects[0]['units'][0]['chapters'][0]; subjectName: string; unitName: string }[] = [];
  for (const subject of syllabus.subjects) {
    for (const unit of subject.units) {
      for (const chapter of unit.chapters) {
        chapters.push({ chapter, subjectName: subject.name, unitName: unit.name });
      }
    }
  }
  return chapters;
}

export function getChapterById(trackId: TrackId, chapterId: string) {
  const chapters = getAllChapters(trackId);
  return chapters.find((c) => c.chapter.id === chapterId);
}

export function getAllTopics(trackId: TrackId) {
  const chapters = getAllChapters(trackId);
  const topics: { topicId: string; topicName: string; chapterId: string; chapterName: string }[] = [];
  for (const { chapter } of chapters) {
    for (const topic of chapter.topics) {
      topics.push({ topicId: topic.id, topicName: topic.name, chapterId: chapter.id, chapterName: chapter.name });
    }
  }
  return topics;
}
