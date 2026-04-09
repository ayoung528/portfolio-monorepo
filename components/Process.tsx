const steps = [
  {
    step: '01',
    title: '구조 설계',
    body: '컴포넌트를 atoms / molecules / organisms / layout 단위로 분리했습니다. 비슷한 성격과 동일한 의존성을 가진 컴포넌트는 하나의 패키지로 합쳐 불필요한 분리를 방지했습니다.',
    detail: 'peerDependencies에 ^1.0.0으로 내부 의존성 명시',
  },
  {
    step: '02',
    title: '트리쉐이킹 적용',
    body: 'ESM 문법으로 전환하고 Rollup의 preserveModules: true 설정으로 모듈별 독립 빌드를 구성했습니다. sideEffects: false 선언과 lodash → lodash-es 교체로 완성했습니다.',
    detail: '선택적 import → 불필요한 번들 제거',
  },
  {
    step: '03',
    title: '팀 적용 자동화',
    body: '다른 모듈 적용 시 불편했던 부분들을 스크립트로 자동화하고, 설치 가이드와 트러블슈팅 문서를 팀 내 공유했습니다. 리더 피드백을 반영해 설치 명령어도 단일화했습니다.',
    detail: 'yarn add + peer 설치를 커맨드 하나로',
  },
];

export default function Process() {
  return (
    <section
      className="px-16 py-20"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <p
        className="text-xs tracking-[0.2em] uppercase mb-8"
        style={{ color: 'var(--color-ink-faint)' }}
      >
        Process
      </p>

      <h2 className="serif mb-12" style={{ fontSize: '3rem', lineHeight: 1.1 }}>
        어떻게 해결했나
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {steps.map(({ step, title, body, detail }) => (
          <div
            key={step}
            className="rounded-xl p-7 flex flex-col gap-5"
            style={{ background: 'var(--color-surface)' }}
          >
            <span
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                color: 'var(--color-ink-faint)',
                fontWeight: 500,
              }}
            >
              STEP {step}
            </span>
            <h3
              style={{
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--color-ink)',
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontSize: '0.84rem',
                color: 'var(--color-ink-muted)',
                lineHeight: 1.8,
                flexGrow: 1,
              }}
            >
              {body}
            </p>
            <div
              className="rounded-lg px-3 py-2"
              style={{
                background: 'var(--color-accent-light)',
                fontSize: '0.72rem',
                color: 'var(--color-accent)',
                lineHeight: 1.6,
                fontWeight: 500,
              }}
            >
              {detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
