import { AnimatePresence, motion } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { useEffect, useRef } from 'react';
import { Scene0_Intro } from './video_scenes/Scene0_Intro';
import { Scene1_Skills } from './video_scenes/Scene1_Skills';
import { Scene2_Projects } from './video_scenes/Scene2_Projects';
import { Scene3_Contact } from './video_scenes/Scene3_Contact';
import { Scene4_Outro } from './video_scenes/Scene4_Outro';

export const SCENE_DURATIONS: Record<string, number> = {
  intro: 6000,
  skills: 10000,
  projects: 16000,
  contact: 6000,
  outro: 8000,
};

const SCENE_COMPONENTS: Record<string, React.ComponentType> = {
  intro: Scene0_Intro,
  skills: Scene1_Skills,
  projects: Scene2_Projects,
  contact: Scene3_Contact,
  outro: Scene4_Outro,
};

const SCENE_START_SEC: Record<string, number> = (() => {
  const out: Record<string, number> = {};
  let cumulativeMs = 0;
  for (const [key, ms] of Object.entries(SCENE_DURATIONS)) {
    out[key] = cumulativeMs / 1000;
    cumulativeMs += ms;
  }
  return out;
})();

const AUDIO_SEEK_EPSILON_SEC = 0.18;

export default function VideoTemplate({
  durations = SCENE_DURATIONS,
  loop = true,
  muted = false,
  onSceneChange,
}: {
  durations?: Record<string, number>;
  loop?: boolean;
  muted?: boolean;
  onSceneChange?: (sceneKey: string) => void;
} = {}) {
  const { currentScene, currentSceneKey } = useVideoPlayer({ durations, loop });

  useEffect(() => {
    onSceneChange?.(currentSceneKey);
  }, [currentSceneKey, onSceneChange]);

  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '') as keyof typeof SCENE_DURATIONS;
  const sceneIndex = Object.keys(SCENE_DURATIONS).indexOf(baseSceneKey);
  void sceneIndex;

  const SceneComponent = SCENE_COMPONENTS[baseSceneKey];

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.45;
    const targetTime = SCENE_START_SEC[baseSceneKey] ?? 0;
    if (Math.abs(audio.currentTime - targetTime) > AUDIO_SEEK_EPSILON_SEC) {
      audio.currentTime = targetTime;
    }
    audio.play().catch(() => {});
  }, [currentSceneKey, baseSceneKey, muted]);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden bg-[#0f172a] text-white">
        {/* Persistent Background */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={`${import.meta.env.BASE_URL}images/bg-code.png`}
            className="w-full h-full object-cover opacity-20"
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute inset-0 bg-[#0f172a]/60 mix-blend-multiply" />
        </div>

        <AnimatePresence mode="popLayout">
          {SceneComponent && <SceneComponent key={currentSceneKey} />}
        </AnimatePresence>
      </div>

      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}audio/bg_music.mp3`}
        preload="auto"
        autoPlay
        muted={muted}
      />
    </>
  );
}
