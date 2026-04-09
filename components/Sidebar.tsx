'use client';

import { useEffect, useState, useRef } from 'react';

const sections = [
  { id: 'hero', label: 'Intro' },
  { id: 'problem', label: 'Problem' },
  { id: 'solution', label: 'Solution' },
  { id: 'process', label: 'Process' },
  { id: 'result', label: 'Result' },
  { id: 'learned', label: 'Learned' },
  { id: 'techstack', label: 'Tech Stack' },
];

export default function Sidebar() {
  const [active, setActive] = useState('hero');
  const clickedRef = useRef<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // 클릭으로 스크롤 중이면 클릭한 섹션만 active
            if (clickedRef.current) {
              if (id === clickedRef.current) setActive(id);
            } else {
              setActive(id);
            }
          }
        },
        { rootMargin: '-40% 0px -55% 0px' },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    // 클릭 즉시 active 반영
    setActive(id);
    clickedRef.current = id;

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    // 스크롤 완료 후 IntersectionObserver에 다시 위임
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      clickedRef.current = null;
    }, 800);
  };

  return (
    <aside
      style={{
        width: '240px',
        flexShrink: 0,
        position: 'sticky',
        top: 0,
        height: '100vh',
        borderRight: '1px solid var(--color-border)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '2.5rem 0',
      }}
    >
      <div style={{ padding: '0 2rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '2.5rem',
          }}
        >
          <img
            src="/profile.jpg"
            alt="프로필"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              objectFit: 'cover',
              flexShrink: 0,
            }}
          />
          <p
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.18em',
              color: 'var(--color-ink-faint)',
              margin: 0,
            }}
          >
            Jeong A Young
          </p>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {sections.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  all: 'unset',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '7px 10px',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive
                    ? 'var(--color-ink)'
                    : 'var(--color-ink-faint)',
                  background: isActive ? 'var(--color-surface)' : 'transparent',
                  transition: 'all 0.15s ease',
                }}
              >
                <span
                  style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: isActive
                      ? 'var(--color-accent)'
                      : 'transparent',
                    border: `1px solid ${isActive ? 'var(--color-accent)' : 'var(--color-ink-faint)'}`,
                    flexShrink: 0,
                    transition: 'all 0.15s ease',
                  }}
                />
                {label}
              </button>
            );
          })}
        </nav>
      </div>

      <div style={{ padding: '0 2rem' }}>
        <p
          style={{
            fontSize: '0.7rem',
            color: 'var(--color-ink-faint)',
            lineHeight: 1.6,
          }}
        >
          UI / UX / DX
          <br />
          Frontend Dev
        </p>
      </div>
    </aside>
  );
}
