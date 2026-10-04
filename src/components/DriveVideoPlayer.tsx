import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export interface DriveVideoFile {
  id: string;
  name: string;
  videoMediaMetadata?: { width?: number; height?: number };
}

interface Props {
  file: DriveVideoFile;
  apiKey: string;
  modal?: boolean;
}

const desktopQuery = '(min-width: 768px) and (hover: hover) and (pointer: fine)';

export default function DriveVideoPlayer({ file, apiKey, modal = false }: Props) {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(() => !window.matchMedia(desktopQuery).matches);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(desktopQuery);
    const update = () => setIsMobile(!query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  const { width = 0, height = 0 } = file.videoMediaMetadata || {};
  const ratio = width > 0 && height > 0 ? width / height : 16 / 9;
  const preview = `https://drive.google.com/file/d/${encodeURIComponent(file.id)}/preview?rm=minimal`;
  const source = `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(file.id)}?${new URLSearchParams({ alt: 'media', key: apiKey })}`;

  return (
    <div
      className={`drive-video ${modal ? 'drive-video--modal' : ''}`}
      style={{ '--video-ratio': isMobile ? ratio : 16 / 9 } as CSSProperties}
    >
      {isMobile ? (
        failed ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
            <p className="text-sm text-gray-300">{t('photosets.videoUnavailable')}</p>
            <a className="text-sm underline" href={preview} target="_blank" rel="noopener noreferrer">
              {t('photosets.openVideo')}
            </a>
          </div>
        ) : (
          <video
            src={source}
            controls
            playsInline
            preload="none"
            poster={`https://drive.google.com/thumbnail?id=${encodeURIComponent(file.id)}&sz=w1000`}
            aria-label={file.name}
            className="absolute inset-0 h-full w-full object-contain"
            onError={() => setFailed(true)}
          />
        )
      ) : (
        <iframe
          src={preview}
          className="absolute inset-0 h-full w-full border-none"
          allow="autoplay; fullscreen"
          allowFullScreen
          title={file.name}
          sandbox={modal ? undefined : 'allow-same-origin allow-scripts allow-popups allow-presentation'}
        />
      )}
    </div>
  );
}
