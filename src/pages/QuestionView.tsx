import React from "react";
import { useEffect, useRef, useState } from "react";
import { QuestionPanel } from "../Components/Sections/QuestionPanel";
import { VideoPlayer } from "../Components/Sections/VideoPlayer";
import {
  JsonViewer,
  UserVideoSelector,
} from "../Components/Sections/JsonViewer";
import { USERS } from "../Components/Json/Users";
import type { TrajectoryData } from "../Components/Json/Types";
import {
  AlertTriangle,
  Box,
  Check,
  ChevronDown,
  FileQuestionMark,
  Video,
} from "lucide-react";
import { loadTrackingForVideo } from "../Components/Camera/TrackingCamera";
import type { TrackingEntry } from "../Components/Camera/Types";
import { KitchenScene } from "../Components/Sections/KitchenScene";

const STORAGE_KEYS = {
  selectedVideoId: "questionView.selectedVideoId",
  selectedTrajectoryByVideo: "questionView.selectedTrajectoryByVideo",
  activePanel: "questionView.activePanel",
  mobileMediaPanel: "questionView.mobileMediaPanel",
  trackingEnabled3d: "questionView.trackingEnabled3d",
  leftPanelWidth: "questionView.leftPanelWidth",
  rightPanelWidth: "questionView.rightPanelWidth",
} as const;

class SceneErrorBoundary extends React.Component<
  {
    children: React.ReactNode;
    fallback?: React.ReactNode;
  },
  {
    hasError: boolean;
    error: Error | null;
  }
> {
  constructor(props: {
    children: React.ReactNode;
    fallback?: React.ReactNode;
  }) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("[KitchenScene] crashed", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            3D scene failed to load.
          </div>
        )
      );
    }

    return this.props.children;
  }
}

function getSavedTrajectoryByVideo(): Record<string, string> {
  if (typeof window === "undefined") return {};

  try {
    const raw = localStorage.getItem(STORAGE_KEYS.selectedTrajectoryByVideo);
    if (!raw) return {};

    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

function getInitialTrajectoryKeyForVideo(
  videoId: string,
  trajectory: Record<string, TrajectoryData> | undefined,
) {
  if (!trajectory) return null;

  const keys = Object.keys(trajectory);
  if (keys.length === 0) return null;

  const savedByVideo = getSavedTrajectoryByVideo();
  const savedKey = savedByVideo[videoId];

  return savedKey && savedKey in trajectory ? savedKey : keys[0];
}

function getInitialVideoSelection() {
  if (typeof window === "undefined") {
    const user = USERS[0];
    const video = user.videos[0];

    return {
      userId: user.userId,
      videoId: video.id,
    };
  }

  const savedVideoId = localStorage.getItem(STORAGE_KEYS.selectedVideoId);

  for (const user of USERS) {
    const video = user.videos.find((v) => v.id === savedVideoId);

    if (video) {
      return {
        userId: user.userId,
        videoId: video.id,
      };
    }
  }

  const user = USERS[0];
  const video = user.videos[0];

  return {
    userId: user.userId,
    videoId: video.id,
  };
}

function TrajectoryDropdown({
  value,
  options,
  onChange,
}: {
  value: string | null;
  options: string[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (e: PointerEvent) => {
      const target = e.target as Node | null;

      if (target && dropdownRef.current?.contains(target)) {
        return;
      }

      setOpen(false);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.blur();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (options.length === 0) return null;

  const selectedLabel = value ?? options[0];

  return (
    <div ref={dropdownRef} className="relative mt-1">
      <button
        type="button"
        ref={buttonRef}
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between rounded-md border bg-white px-2 py-1.5 text-left text-[12px] text-slate-700 transition-box-shadow dark:bg-slate-900 dark:text-slate-300 ${
          open
            ? "border-blue-400 ring-2 ring-blue-500/20 dark:border-blue-500/50"
            : "border-slate-300 hover:border-slate-400 dark:border-white/[0.07] dark:hover:border-white/20"
        }`}
      >
        <span className="truncate">{selectedLabel}</span>

        <ChevronDown
          className={`h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute left-0 right-0 top-full z-40 mt-1 origin-top overflow-hidden rounded-md border border-slate-200 bg-white shadow-xl shadow-slate-900/10 transition-all duration-200 ease-out dark:border-white/[0.07] dark:bg-slate-900 dark:shadow-black/30 ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-1 scale-95 opacity-0"
        }`}
      >
        <div className="max-h-56 overflow-y-auto p-1">
          {options.map((key) => {
            const selected = key === value;

            return (
              <button
                key={key}
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  onChange(key);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-2 rounded px-2 py-1.5 text-left text-[12px] transition-colors focus:outline-none ${
                  selected
                    ? "bg-blue-500/10 text-blue-700 hover:bg-blue-500/15 active:bg-blue-500/20 focus-visible:bg-blue-500/15 dark:bg-blue-500/15 dark:text-blue-300 dark:hover:bg-blue-500/20 dark:active:bg-blue-500/25 dark:focus-visible:bg-blue-500/20"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 active:bg-blue-500/10 active:text-blue-700 focus-visible:bg-slate-100 focus-visible:text-slate-950 dark:text-slate-400 dark:hover:bg-white/6 dark:hover:text-slate-100 dark:active:bg-blue-500/15 dark:active:text-blue-300 dark:focus-visible:bg-white/6 dark:focus-visible:text-slate-100"
                }`}
              >
                <span className="truncate">{key}</span>

                {selected && <Check className="h-3.5 w-3.5 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MobilePillDropdown({
  value,
  options,
  onChange,
}: {
  value: string;
  options: Array<{
    value: string;
    label: string;
    badge?: string;
  }>;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;

      if (target && dropdownRef.current?.contains(target)) {
        return;
      }

      setOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const selectedOption =
    options.find((option) => option.value === value) ?? options[0];

  if (!selectedOption) return null;

  return (
    <div ref={dropdownRef} className="relative z-30 min-w-0">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className={`flex h-9 w-full min-w-0 items-center justify-between gap-2 overflow-hidden rounded-full border px-3 text-left text-xs font-semibold transition-all ${
          open
            ? "border-blue-400 bg-white/90 text-blue-600 shadow-[0_0_12px_rgba(59,130,246,0.22)] dark:border-[#3a6abf]/80 dark:bg-[#0f1e3d] dark:text-[#6ab0ff]"
            : "border-slate-300/40 bg-slate-100/70 text-slate-600 hover:bg-slate-200/80 hover:text-blue-600 dark:border-[#1e2f45]/60 dark:bg-[#0d1520] dark:text-slate-300 dark:hover:bg-[#101a28] dark:hover:text-[#89c2ff]"
        }`}
      >
        <span className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden">
          {selectedOption.badge && (
            <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 px-1.5 text-[10px] font-bold text-blue-600 dark:bg-blue-500/15 dark:text-blue-300">
              {selectedOption.badge}
            </span>
          )}

          <span className="min-w-0 flex-1 truncate">
            {selectedOption.label}
          </span>
        </span>

        <ChevronDown
          className={`h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute left-0 top-full z-50 mt-2 w-full min-w-44 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl shadow-slate-900/15 transition-all dark:border-white/[0.07] dark:bg-slate-950 dark:shadow-black/40 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div className="max-h-64 overflow-y-auto p-1">
          {options.map((option) => {
            const selected = option.value === selectedOption.value;

            return (
              <button
                key={option.value}
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
                className={`flex w-full min-w-0 items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs transition-colors focus:outline-none ${
                  selected
                    ? "bg-blue-500/10 text-blue-700 hover:bg-blue-500/15 active:bg-blue-500/20 focus-visible:bg-blue-500/15 dark:bg-blue-500/15 dark:text-blue-300 dark:hover:bg-blue-500/20 dark:active:bg-blue-500/25 dark:focus-visible:bg-blue-500/20"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 active:bg-blue-500/10 active:text-blue-700 focus-visible:bg-slate-100 focus-visible:text-slate-950 dark:text-slate-400 dark:hover:bg-white/6 dark:hover:text-slate-100 dark:active:bg-blue-500/15 dark:active:text-blue-300 dark:focus-visible:bg-white/6 dark:focus-visible:text-slate-100"
                }`}
              >
                {option.badge && (
                  <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded bg-slate-100 px-1 text-[10px] font-bold dark:bg-slate-800">
                    {option.badge}
                  </span>
                )}

                <span className="min-w-0 flex-1 truncate">{option.label}</span>

                {selected && <Check className="h-3.5 w-3.5 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

const PANEL_MIN_PERCENT = 5;
const PANEL_BALANCE_THRESHOLD_PERCENT = 40;
const PANEL_MAX_PERCENT = 90;
const DEFAULT_LEFT_PANEL_PERCENT = 24;
const DEFAULT_RIGHT_PANEL_PERCENT = 28;
const RESIZE_TOUCH_ACTION = "none";

type ActivePanel = "questions" | "json";
type LeftPanel = "selector" | "3d";
type MobileMediaPanel = "video" | "3d";
type PanelWidths = {
  left: number;
  right: number;
};

function getInitialActivePanel(): ActivePanel {
  if (typeof window === "undefined") return "questions";

  const saved = localStorage.getItem(STORAGE_KEYS.activePanel);

  return saved === "questions" || saved === "json" ? saved : "questions";
}

function getInitialMobileMediaPanel(): MobileMediaPanel {
  if (typeof window === "undefined") return "video";

  const saved = localStorage.getItem(STORAGE_KEYS.mobileMediaPanel);

  return saved === "video" || saved === "3d" ? saved : "video";
}

function getInitialTrackingEnabled3d(): boolean {
  if (typeof window === "undefined") return false;

  return localStorage.getItem(STORAGE_KEYS.trackingEnabled3d) === "true";
}

function getSavedPanelPercent(
  key: string,
  fallback: number,
  min: number,
  max: number,
) {
  if (typeof window === "undefined") return fallback;

  const raw = localStorage.getItem(key);
  if (!raw) return fallback;

  const parsed = Number(raw);
  if (!Number.isFinite(parsed)) return fallback;
  if (parsed > 100) return fallback;

  return clamp(parsed, min, max);
}

function getPanelWidthsForResize(
  side: "left" | "right",
  desiredPercent: number,
  oppositePercent: number,
): PanelWidths {
  const activePercent = clamp(
    desiredPercent,
    PANEL_MIN_PERCENT,
    PANEL_MAX_PERCENT,
  );

  if (activePercent > PANEL_BALANCE_THRESHOLD_PERCENT) {
    const remainingPercent = (100 - activePercent) / 2;

    return side === "left"
      ? {
          left: activePercent,
          right: remainingPercent,
        }
      : {
          left: remainingPercent,
          right: activePercent,
        };
  }

  const nextOppositePercent = clamp(
    oppositePercent,
    PANEL_MIN_PERCENT,
    100 - activePercent - PANEL_MIN_PERCENT,
  );

  return side === "left"
    ? {
        left: activePercent,
        right: nextOppositePercent,
      }
    : {
        left: nextOppositePercent,
        right: activePercent,
      };
}

function useIsMobileQuestionView() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window === "undefined"
      ? false
      : window.matchMedia("(max-width: 767px)").matches,
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
}

export default function QuestionView() {
  const isMobile = useIsMobileQuestionView();
  const [initialSelection] = useState(() => getInitialVideoSelection());
  const [tracking, setTracking] = useState<TrackingEntry | null>(null);
  const layoutRef = useRef<HTMLDivElement | null>(null);
  type ResizeSide = "left" | "right" | null;
  const [resizingSide, setResizingSide] = useState<ResizeSide>(null);
  const [leftPanel, setLeftPanel] = useState<LeftPanel>("selector");
  const [leftWidth, setLeftWidth] = useState(() =>
    getSavedPanelPercent(
      STORAGE_KEYS.leftPanelWidth,
      DEFAULT_LEFT_PANEL_PERCENT,
      PANEL_MIN_PERCENT,
      PANEL_MAX_PERCENT,
    ),
  );

  const [rightWidth, setRightWidth] = useState(() =>
    getSavedPanelPercent(
      STORAGE_KEYS.rightPanelWidth,
      DEFAULT_RIGHT_PANEL_PERCENT,
      PANEL_MIN_PERCENT,
      PANEL_MAX_PERCENT,
    ),
  );

  const startResizeLeft = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault();

    const layoutWidth = layoutRef.current?.getBoundingClientRect().width ?? 0;
    if (layoutWidth <= 0) return;

    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // Some browsers can reject pointer capture after interrupted gestures.
    }

    setResizingSide("left");

    const startX = event.clientX;
    const startWidth = leftWidth;
    const previousBodyCursor = document.body.style.cursor;
    const previousBodyUserSelect = document.body.style.userSelect;
    const previousBodyTouchAction = document.body.style.touchAction;
    let latestWidths: PanelWidths = {
      left: leftWidth,
      right: rightWidth,
    };

    const handlePointerMove = (moveEvent: PointerEvent) => {
      const deltaPercent = ((moveEvent.clientX - startX) / layoutWidth) * 100;
      latestWidths = getPanelWidthsForResize(
        "left",
        startWidth + deltaPercent,
        rightWidth,
      );
      setLeftWidth(latestWidths.left);
      setRightWidth(latestWidths.right);
    };

    const handlePointerUp = () => {
      localStorage.setItem(
        STORAGE_KEYS.leftPanelWidth,
        String(latestWidths.left),
      );
      localStorage.setItem(
        STORAGE_KEYS.rightPanelWidth,
        String(latestWidths.right),
      );

      setResizingSide(null);

      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("pointercancel", handlePointerUp);
      document.body.style.cursor = previousBodyCursor;
      document.body.style.userSelect = previousBodyUserSelect;
      document.body.style.touchAction = previousBodyTouchAction;
    };

    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
    document.body.style.touchAction = RESIZE_TOUCH_ACTION;

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", handlePointerUp);
    document.addEventListener("pointercancel", handlePointerUp);
  };

  const startResizeRight = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault();

    const layoutWidth = layoutRef.current?.getBoundingClientRect().width ?? 0;
    if (layoutWidth <= 0) return;

    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // Some browsers can reject pointer capture after interrupted gestures.
    }

    setResizingSide("right");

    const startX = event.clientX;
    const startWidth = rightWidth;
    const previousBodyCursor = document.body.style.cursor;
    const previousBodyUserSelect = document.body.style.userSelect;
    const previousBodyTouchAction = document.body.style.touchAction;
    let latestWidths: PanelWidths = {
      left: leftWidth,
      right: rightWidth,
    };

    const handlePointerMove = (moveEvent: PointerEvent) => {
      const deltaPercent = ((startX - moveEvent.clientX) / layoutWidth) * 100;
      latestWidths = getPanelWidthsForResize(
        "right",
        startWidth + deltaPercent,
        leftWidth,
      );
      setLeftWidth(latestWidths.left);
      setRightWidth(latestWidths.right);
    };

    const handlePointerUp = () => {
      localStorage.setItem(
        STORAGE_KEYS.leftPanelWidth,
        String(latestWidths.left),
      );
      localStorage.setItem(
        STORAGE_KEYS.rightPanelWidth,
        String(latestWidths.right),
      );

      setResizingSide(null);

      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("pointercancel", handlePointerUp);
      document.body.style.cursor = previousBodyCursor;
      document.body.style.userSelect = previousBodyUserSelect;
      document.body.style.touchAction = previousBodyTouchAction;
    };

    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
    document.body.style.touchAction = RESIZE_TOUCH_ACTION;

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", handlePointerUp);
    document.addEventListener("pointercancel", handlePointerUp);
  };

  const [selectedUserId, setSelectedUserId] = useState(initialSelection.userId);
  const [selectedVideoId, setSelectedVideoId] = useState(
    initialSelection.videoId,
  );
  const [currentTimeSec, setCurrentTimeSec] = useState(0);

  const [activePanel, setActivePanel] = useState<ActivePanel>(() =>
    getInitialActivePanel(),
  );
  const [mobileMediaPanel, setMobileMediaPanel] =
    useState<MobileMediaPanel>(() => getInitialMobileMediaPanel());
  const [trackingEnabled3d, setTrackingEnabled3d] = useState(() =>
    getInitialTrackingEnabled3d(),
  );
  const [selectedTrajectoryKey, setSelectedTrajectoryKey] = useState<
    string | null
  >(null);

  const selectedUser = USERS.find((u) => u.userId === selectedUserId)!;
  const selectedVideo =
    selectedUser?.videos.find((v) => v.id === selectedVideoId) ??
    selectedUser?.videos[0];
  useEffect(() => {
    let cancelled = false;

    async function loadTracking() {
      if (!selectedVideo?.id) {
        setTracking(null);
        return;
      }

      setTracking(null);

      const loaded = await loadTrackingForVideo(selectedVideo.id);

      if (!cancelled) {
        setTracking(loaded);
      }
    }

    loadTracking();

    return () => {
      cancelled = true;
    };
  }, [selectedVideo?.id]);
  // Get selected trajectory from the trajectory map
  const selectedTrajectory: TrajectoryData | null = selectedVideo?.trajectory
    ? selectedTrajectoryKey && selectedTrajectoryKey in selectedVideo.trajectory
      ? selectedVideo.trajectory[selectedTrajectoryKey]
      : (Object.values(selectedVideo.trajectory)[0] ?? null)
    : null;
  const trajectoryOptions = selectedVideo?.trajectory
    ? Object.keys(selectedVideo.trajectory)
    : [];

  // Auto-set trajectory key when video changes
  useEffect(() => {
    if (!selectedVideo) {
      setSelectedTrajectoryKey(null);
      return;
    }

    setSelectedTrajectoryKey(
      getInitialTrajectoryKeyForVideo(
        selectedVideo.id,
        selectedVideo.trajectory,
      ),
    );
  }, [selectedVideo?.id]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.activePanel, activePanel);
  }, [activePanel]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.mobileMediaPanel, mobileMediaPanel);
  }, [mobileMediaPanel]);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEYS.trackingEnabled3d,
      String(trackingEnabled3d),
    );
  }, [trackingEnabled3d]);

  useEffect(() => {
    if (!selectedVideoId || !selectedTrajectoryKey) return;

    const savedByVideo = getSavedTrajectoryByVideo();

    const next = {
      ...savedByVideo,
      [selectedVideoId]: selectedTrajectoryKey,
    };

    localStorage.setItem(
      STORAGE_KEYS.selectedTrajectoryByVideo,
      JSON.stringify(next),
    );
  }, [selectedVideoId, selectedTrajectoryKey]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.selectedVideoId, selectedVideoId);
  }, [selectedVideoId]);

  const handleUserChange = (uid: string) => {
    setSelectedUserId(uid);
    const user = USERS.find((u) => u.userId === uid);
    if (user?.videos[0]) setSelectedVideoId(user.videos[0].id);
    setCurrentTimeSec(0);
  };

  const renderKitchenScene = (className = "h-full") => (
    <div className={className}>
      <SceneErrorBoundary
        key={selectedTrajectory?.trajectory_id ?? selectedVideo?.id ?? "scene"}
        fallback={
          <div className="flex h-full items-center justify-center bg-white p-4 dark:bg-slate-950/80">
            <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center shadow-sm dark:border-white/[0.07] dark:bg-slate-900/70">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400">
                <AlertTriangle className="h-5 w-5" />
              </div>

              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                3D scene unavailable
              </h3>

              <p className="mt-1 text-[12px] leading-5 text-slate-500 dark:text-slate-400">
                The scene could not be rendered for this trajectory. You can
                still use the video and question panel.
              </p>
            </div>
          </div>
        }
      >
        <KitchenScene
          video={selectedVideo}
          tracking={tracking}
          trajectory={selectedTrajectory}
          currentTimeSec={currentTimeSec}
          trackingEnabled={trackingEnabled3d}
          onTrackingEnabledChange={setTrackingEnabled3d}
          queryTimeSec={selectedTrajectory?.query_time_sec ?? 0}
          onSeek={(t: number) => setCurrentTimeSec(t)}
        />
      </SceneErrorBoundary>
    </div>
  );

  if (isMobile) {
    return (
      <div className="min-h-[calc(100vh-77px)] overflow-y-auto bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-100">
        <section className="border-b border-slate-200 bg-white dark:border-white/[0.07] dark:bg-slate-950">
          <div className="flex flex-col gap-3 px-3 py-3">
            <div className="flex min-w-0 items-center gap-2">
              <div className="grid h-9 shrink-0 grid-cols-2 rounded-lg border border-slate-200 bg-slate-100 p-0.5 dark:border-white/[0.07] dark:bg-slate-900">
                {(["video", "3d"] as const).map((panel) => (
                  <button
                    key={panel}
                    type="button"
                    onClick={() => setMobileMediaPanel(panel)}
                    className={`flex h-8 w-16 items-center justify-center gap-1.5 rounded-md text-[12px] font-semibold transition-colors ${
                      mobileMediaPanel === panel
                        ? "bg-white text-blue-600 shadow-sm dark:bg-slate-800 dark:text-blue-400"
                        : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                    }`}
                  >
                    {panel === "video" ? (
                      <Video className="h-3.5 w-3.5" />
                    ) : (
                      <Box className="h-3.5 w-3.5" />
                    )}
                    {panel === "video" ? "Video" : "3D"}
                  </button>
                ))}
              </div>

              {trajectoryOptions.length > 1 && (
                <div className="min-w-0 flex-1">
                  <MobilePillDropdown
                    value={selectedTrajectoryKey ?? trajectoryOptions[0]}
                    options={trajectoryOptions.map((key) => ({
                      value: key,
                      label: key,
                      badge: "OOS",
                    }))}
                    onChange={setSelectedTrajectoryKey}
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2">
              <MobilePillDropdown
                value={selectedUserId}
                options={USERS.map((user) => ({
                  value: user.userId,
                  label: user.userId,
                  badge: String(user.videos.length),
                }))}
                onChange={handleUserChange}
              />

              <MobilePillDropdown
                value={selectedVideoId}
                options={(selectedUser?.videos ?? []).map((video, index) => ({
                  value: video.id,
                  label: video.id,
                  badge: `V${index + 1}`,
                }))}
                onChange={(videoId) => {
                  setSelectedVideoId(videoId);
                  setTimeout(() => setCurrentTimeSec(0), 0);
                }}
              />
            </div>
          </div>

          <div className="flex h-[44vh] min-h-[300px] max-h-[430px] flex-col overflow-hidden border-t border-slate-200 bg-slate-100 dark:border-white/[0.07] dark:bg-black">
            {selectedVideo ? (
              <>
                {mobileMediaPanel === "3d" && (
                  <div className="min-h-0 flex-1 overflow-hidden">
                    {renderKitchenScene()}
                  </div>
                )}

                <VideoPlayer
                  key={selectedVideo.id}
                  video={selectedVideo}
                  trajectory={selectedTrajectory}
                  currentTimeSec={currentTimeSec}
                  onTimeChange={setCurrentTimeSec}
                  controlsOnly={mobileMediaPanel === "3d"}
                />
              </>
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-slate-500 dark:text-slate-600">
                No video selected
              </div>
            )}
          </div>
        </section>

        <section className="bg-slate-50 dark:bg-slate-950">
          <div className="sticky top-0 z-20 flex border-b border-slate-200 bg-white px-3 dark:border-white/[0.07] dark:bg-slate-950">
            {(["questions", "json"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActivePanel(tab)}
                className={`flex-1 border-b-2 px-3 py-3 text-[13px] font-medium transition-all ${
                  activePanel === tab
                    ? "border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-400"
                    : "border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-300"
                }`}
              >
                {tab === "questions" ? "Questions" : "{ } JSON"}
              </button>
            ))}
          </div>

          <div className="min-h-[55vh]">
            {activePanel === "questions" ? (
              <QuestionPanel
                trajectory={selectedTrajectory}
                currentTimeSec={currentTimeSec}
                onSeek={setCurrentTimeSec}
              />
            ) : (
              <JsonViewer
                data={
                  selectedVideo?.rawJson ??
                  (selectedTrajectory ? selectedTrajectory : null)
                }
              />
            )}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div
      ref={layoutRef}
      className="flex h-[calc(100vh-77px)] overflow-hidden bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-100"
    >
      {/* LEFT: video selector / 3D scene */}
      <aside
        style={{ width: `${leftWidth}%` }}
        className="flex min-h-0 shrink-0 flex-col overflow-hidden bg-white dark:bg-slate-950/80"
      >
        {/* Left tabs */}
        <div className="flex shrink-0 gap-1 border-b border-slate-200 px-4 dark:border-white/[0.07]">
          {(["selector", "3d"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setLeftPanel(tab)}
              className={`border-b-2 px-4 py-3.5 text-[13px] font-medium transition-all ${
                leftPanel === tab
                  ? "border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-400"
                  : "border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-300"
              }`}
            >
              {tab === "selector" ? (
                <div className="flex items-center gap-1">
                  <Video className="h-4 w-4" /> Videos
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <Box className="h-4 w-4" />
                  3D Scene
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Left content */}
        <div className="min-h-0 flex-1 overflow-hidden">
          {leftPanel === "selector" ? (
            <div className="h-full overflow-y-auto">
              <UserVideoSelector
                users={USERS}
                selectedUserId={selectedUserId}
                selectedVideoId={selectedVideoId}
                onUserChange={handleUserChange}
                onVideoChange={(vid) => {
                  setSelectedVideoId(vid);
                  setTimeout(() => setCurrentTimeSec(0), 0);
                }}
              />
            </div>
          ) : (
            renderKitchenScene()
          )}
        </div>
      </aside>
      <div
        role="separator"
        aria-orientation="vertical"
        onPointerDown={startResizeLeft}
        className={`group relative z-20 w-1 shrink-0 touch-none cursor-col-resize select-none transition-opacity ${
          resizingSide === "left"
            ? "bg-blue-500 opacity-80"
            : "bg-slate-200 hover:bg-blue-500 dark:bg-white/[0.07] dark:hover:bg-blue-500"
        }`}
      >
        <div className="absolute left-1/2 top-0 h-full w-8 -translate-x-1/2 md:w-4" />
      </div>
      {/* MIDDLE: video always visible */}
      <main className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-slate-100 dark:bg-black">
        {selectedVideo ? (
          <VideoPlayer
            key={selectedVideo.id}
            video={selectedVideo}
            trajectory={selectedTrajectory}
            currentTimeSec={currentTimeSec}
            onTimeChange={setCurrentTimeSec}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-slate-500 dark:text-slate-600">
            No video selected
          </div>
        )}
      </main>
      <div
        role="separator"
        aria-orientation="vertical"
        onPointerDown={startResizeRight}
        className={`group relative z-20 w-1 shrink-0 touch-none cursor-col-resize select-none transition-opacity ${
          resizingSide === "right"
            ? "bg-blue-500 opacity-80"
            : "bg-slate-200 hover:bg-blue-500 dark:bg-white/[0.07] dark:hover:bg-blue-500"
        }`}
      >
        <div className="absolute left-1/2 top-0 h-full w-8 -translate-x-1/2 md:w-4" />
      </div>
      <aside
        style={{ width: `${rightWidth}%` }}
        className="flex min-h-0 shrink-0 flex-col overflow-hidden bg-white dark:bg-slate-950/80"
      >
        {/* Right tabs */}
        <div className="flex shrink-0 gap-1 border-b border-slate-200 px-4 dark:border-white/[0.07]">
          {(["questions", "json"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActivePanel(tab)}
              className={`border-b-2 px-4 py-3.5 text-[13px] font-medium transition-all ${
                activePanel === tab
                  ? "border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-400"
                  : "border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-300"
              }`}
            >
              {tab === "questions" ? (
                <div className="flex items-center gap-1">
                  <FileQuestionMark className="h-4 w-4" />
                  Questions
                </div>
              ) : (
                "{ } JSON"
              )}
            </button>
          ))}
        </div>

        {/* Trajectory selector */}
        {activePanel === "questions" &&
          trajectoryOptions.length > 1 && (
            <div className="shrink-0 border-b border-slate-200 px-4 py-3 dark:border-white/[0.07]">
              <label className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                Trajectory
              </label>
              <TrajectoryDropdown
                value={selectedTrajectoryKey}
                options={trajectoryOptions}
                onChange={setSelectedTrajectoryKey}
              />
            </div>
          )}

        {/* Right content */}
        <div className="min-h-0 flex-1 overflow-hidden">
          {activePanel === "questions" ? (
            <div className="h-full overflow-y-auto">
              <QuestionPanel
                trajectory={selectedTrajectory}
                currentTimeSec={currentTimeSec}
                onSeek={setCurrentTimeSec}
              />
            </div>
          ) : (
            <div className="h-full overflow-y-auto">
              <JsonViewer
                data={
                  selectedVideo?.rawJson ??
                  (selectedTrajectory ? selectedTrajectory : null)
                }
              />
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
