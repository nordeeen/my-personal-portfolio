'use client';

import { useState, useCallback, useEffect } from 'react';
import { ProjectItem } from '@/lib/const';
import { ExternalLink, Github, Eye, X, Lock } from 'lucide-react';

const Project = (props: ProjectItem) => {
  const { title, imgBg, type, techStack, description } = props;
  const [preview, setPreview] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (preview) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [preview]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && preview) {
        setPreview(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [preview]);

  const handlePreview = useCallback(() => {
    if (type === 'confidential') {
      setPreview(true);
    }
  }, [type]);

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handlePreview}
        className="relative group rounded-xl h-[240px] sm:h-[260px] md:h-[280px] bg-cover bg-center overflow-hidden cursor-pointer shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1"
        style={{ backgroundImage: `url(${imgBg})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 drop-shadow-lg">
            {title}
          </h3>

          {description && (
            <p className="text-xs sm:text-sm text-white/90 mb-3 line-clamp-2 drop-shadow-md">
              {description}
            </p>
          )}

          <div className="flex flex-wrap gap-1.5 mb-3">
            {techStack.slice(0, 4).map((tech: string) => (
              <span
                key={tech}
                className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm border
                 border-white/30 text-white font-medium hover:bg-black/70 transition-colors">
                {tech}
              </span>
            ))}
            {techStack.length > 4 && (
              <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm text-white/80">
                +{techStack.length - 4}
              </span>
            )}
          </div>

          <div className="flex gap-2">
            {type === 'public' ? (
              <>
                <a
                  href={props.linkPort}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  onClick={(e) => e.stopPropagation()}>
                  <button
                    className="w-full rounded-lg px-3 py-1.5 bg-white hover:bg-gray-100
                   text-gray-900 text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md">
                    <ExternalLink size={12} />
                    Demo
                  </button>
                </a>

                <a
                  href={props.linkGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  onClick={(e) => e.stopPropagation()}>
                  <button
                    className="w-full rounded-lg px-3 py-1.5 bg-black/60 backdrop-blur-sm border border-white/40
                   hover:bg-black/80 text-white text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1.5">
                    <Github size={12} />
                    Code
                  </button>
                </a>
              </>
            ) : (
              <button
                type="button"
                className="w-full rounded-lg px-3 py-1.5 bg-gradient-to-r from-blue-500/80 to-purple-500/80 backdrop-blur-sm 
                border border-blue-400/50 text-white text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePreview();
                }}>
                <Eye size={14} />
                Preview
                <Lock size={10} className="opacity-80" />
              </button>
            )}
          </div>
        </div>

        {type === 'confidential' && !isHovered && (
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <Lock size={10} className="text-yellow-400" />
            <span className="text-[10px] text-white/90">Confidential</span>
          </div>
        )}
      </div>

      {type === 'confidential' && preview && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center sm:items-end justify-center z-50 p-4"
          onClick={() => setPreview(false)}>
          <div
            className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl max-w-3xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setPreview(false)}
              className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg transition-all duration-300 z-10"
              aria-label="Close">
              <X size={18} />
            </button>

            <div className="relative overflow-hidden rounded-t-xl">
              <img
                src={imgBg}
                alt={title}
                className="w-full h-auto max-h-[400px] object-cover rounded-t-xl"
                onLoad={() => setImageLoaded(true)}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-xl font-bold mb-1">{title}</h3>
                <div className="flex items-center gap-2">
                  <Lock size={12} className="text-yellow-400" />
                  <span className="text-white/70 text-xs">
                    Confidential Project
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5">
              {description && (
                <div className="mb-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
