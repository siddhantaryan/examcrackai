import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import type { TrackId } from '@/types';
import { progressService } from '@/services/progress.service';
import { useAuth } from '@/lib/auth';
import { Sidebar, MobileNav } from '@/components/layout/Sidebar';
import { Topbar, MobileMenu } from '@/components/layout/Topbar';
import { AuthPage } from '@/pages/AuthPage';
import { LandingPage } from '@/pages/LandingPage';
import { TrackSelectionPage } from '@/pages/TrackSelectionPage';
import { Loader2 } from 'lucide-react';

const DashboardPage = lazy(() => import('@/pages/DashboardPage').then(m => ({ default: m.DashboardPage })));
const SyllabusPage = lazy(() => import('@/pages/SyllabusPage').then(m => ({ default: m.SyllabusPage })));
const ChapterPage = lazy(() => import('@/pages/ChapterPage').then(m => ({ default: m.ChapterPage })));
const NotesPage = lazy(() => import('@/pages/NotesPage').then(m => ({ default: m.NotesPage })));
const PYQsPage = lazy(() => import('@/pages/PYQsPage').then(m => ({ default: m.PYQsPage })));
const QuestionBankPage = lazy(() => import('@/pages/QuestionBankPage').then(m => ({ default: m.QuestionBankPage })));
const DailyTestPage = lazy(() => import('@/pages/DailyTestPage').then(m => ({ default: m.DailyTestPage })));
const MockTestsPage = lazy(() => import('@/pages/MockTestsPage').then(m => ({ default: m.MockTestsPage })));
const WeakAreasPage = lazy(() => import('@/pages/WeakAreasPage').then(m => ({ default: m.WeakAreasPage })));
const MistakesPage = lazy(() => import('@/pages/MistakesPage').then(m => ({ default: m.MistakesPage })));
const RevisionPage = lazy(() => import('@/pages/RevisionPage').then(m => ({ default: m.RevisionPage })));
const AnalyticsPage = lazy(() => import('@/pages/AnalyticsPage').then(m => ({ default: m.AnalyticsPage })));
const VideosPage = lazy(() => import('@/pages/VideosPage').then(m => ({ default: m.VideosPage })));
const BookmarksPage = lazy(() => import('@/pages/BookmarksPage').then(m => ({ default: m.BookmarksPage })));
const SearchPage = lazy(() => import('@/pages/SearchPage').then(m => ({ default: m.SearchPage })));
const TestInterfacePage = lazy(() => import('@/pages/TestInterfacePage').then(m => ({ default: m.TestInterfacePage })));
const TestResultPage = lazy(() => import('@/pages/TestResultPage').then(m => ({ default: m.TestResultPage })));

function PageLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
    </div>
  );
}

function AppShell() {
  const { user, profile, loading } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const trackId: TrackId | null = (profile?.selected_track as TrackId) || null;

  useEffect(() => {
    if (user) progressService.recordVisit();
  }, [user]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }

  if (!trackId) {
    return (
      <Routes>
        <Route path="/track-selection" element={<TrackSelectionPage onSelectTrack={() => navigate('/dashboard')} />} />
        <Route path="/" element={<Navigate to="/track-selection" replace />} />
        <Route path="*" element={<Navigate to="/track-selection" replace />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="hidden md:block sticky top-0 h-screen">
        <Sidebar trackId={trackId} />
      </div>
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar onMenuClick={() => setMenuOpen(true)} />
        <main className="flex-1 p-4 sm:p-6 pb-20 md:pb-6 max-w-7xl mx-auto w-full">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<DashboardPage trackId={trackId} />} />
              <Route path="/syllabus" element={<SyllabusPage trackId={trackId} />} />
              <Route path="/chapter/:chapterId" element={<ChapterPage trackId={trackId} />} />
              <Route path="/notes" element={<NotesPage trackId={trackId} />} />
              <Route path="/pyqs" element={<PYQsPage trackId={trackId} />} />
              <Route path="/question-bank" element={<QuestionBankPage trackId={trackId} />} />
              <Route path="/daily-test" element={<DailyTestPage trackId={trackId} />} />
              <Route path="/mock-tests" element={<MockTestsPage trackId={trackId} />} />
              <Route path="/weak-areas" element={<WeakAreasPage trackId={trackId} />} />
              <Route path="/mistakes" element={<MistakesPage />} />
              <Route path="/revision" element={<RevisionPage trackId={trackId} />} />
              <Route path="/analytics" element={<AnalyticsPage trackId={trackId} />} />
              <Route path="/videos" element={<VideosPage trackId={trackId} />} />
              <Route path="/bookmarks" element={<BookmarksPage />} />
              <Route path="/search" element={<SearchPage trackId={trackId} />} />
              <Route path="/test" element={<TestInterfacePage trackId={trackId} />} />
              <Route path="/test/result" element={<TestResultPage trackId={trackId} />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </Suspense>
        </main>
        <MobileNav />
      </div>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}

export default function App() {
  return <AppShell />;
}
