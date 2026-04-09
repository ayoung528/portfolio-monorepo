export default function Solution() {
  return (
    <section
      className="px-16 py-20"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <p
        className="text-xs tracking-[0.2em] uppercase mb-8"
        style={{ color: 'var(--color-ink-faint)' }}
      >
        Solution
      </p>

      <div className="flex gap-20 items-start">
        <div style={{ flex: '0 0 420px' }}>
          <h2
            className="serif mb-6"
            style={{ fontSize: '3rem', lineHeight: 1.1 }}
          >
            모노레포로
            <br />
            전환하기
          </h2>
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--color-ink-muted)',
              lineHeight: 1.85,
            }}
          >
            Yarn Workspaces를 기반으로 모노레포를 선언하고, 캐싱이 지원되는{' '}
            <strong style={{ color: 'var(--color-ink)', fontWeight: 600 }}>
              Nx
            </strong>
            로 빌드를 최적화했습니다. 버전 변경 이력 관리를 위해{' '}
            <strong style={{ color: 'var(--color-ink)', fontWeight: 600 }}>
              Changesets
            </strong>
            을 도입해 릴리즈 프로세스를 체계화했습니다.
          </p>
        </div>

        <div className="flex-1">
          <div
            className="rounded-xl p-6"
            style={{ background: 'var(--color-surface)', fontSize: '0.82rem' }}
          >
            <p
              style={{
                color: 'var(--color-ink-faint)',
                marginBottom: '16px',
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
              }}
            >
              STRUCTURE
            </p>
            {[
              { indent: 0, text: 'packages/', isDir: true },
              { indent: 1, text: 'atoms/', isDir: true },
              { indent: 1, text: 'molecules/', isDir: true },
              { indent: 1, text: 'organisms/', isDir: true },
              { indent: 1, text: 'layout/', isDir: true },
              { indent: 0, text: 'nx.json', isDir: false },
              { indent: 0, text: '.changeset/', isDir: true },
            ].map(({ indent, text, isDir }, i) => (
              <div
                key={i}
                className="flex items-center gap-1"
                style={{
                  paddingLeft: `${indent * 20}px`,
                  lineHeight: '2',
                  color: isDir
                    ? 'var(--color-accent)'
                    : 'var(--color-ink-muted)',
                }}
              >
                <span style={{ opacity: 0.35, marginRight: '6px' }}>
                  {indent > 0 ? '└' : ''}
                </span>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
