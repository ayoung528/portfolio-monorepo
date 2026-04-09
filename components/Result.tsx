'use client';

const metrics = [
  {
    label: 'Parsed Size',
    before: 380,
    after: 310,
    unit: 'KB',
    change: '−70KB',
    positive: true,
  },
  {
    label: 'Stat Size',
    before: 220,
    after: 220.09,
    unit: 'KB',
    change: '+0.09KB',
    positive: false,
    note: '실질적 영향 없음',
  },
];

export default function Result() {
  const maxVal = 420;

  return (
    <section
      className="px-16 py-20"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <p
        className="text-xs tracking-[0.2em] uppercase mb-8"
        style={{ color: 'var(--color-ink-faint)' }}
      >
        Result
      </p>

      <div className="flex gap-20 items-start">
        {/* 왼쪽: 강조 수치 */}
        <div style={{ flex: '0 0 260px' }}>
          <h2
            className="serif mb-3"
            style={{ fontSize: '3rem', lineHeight: 1.1 }}
          >
            번들 사이즈
            <br />
            비교
          </h2>
          <p
            style={{
              fontSize: '0.84rem',
              color: 'var(--color-ink-muted)',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
            }}
          >
            트리쉐이킹 적용 전후, ERB 모듈의 실제 번들 사이즈 변화입니다.
          </p>

          <div
            className="rounded-2xl p-7"
            style={{ background: 'var(--color-surface)' }}
          >
            <p
              className="serif"
              style={{
                fontSize: '3.5rem',
                color: 'var(--color-ink)',
                lineHeight: 1,
              }}
            >
              −70KB
            </p>
            <p
              style={{
                fontSize: '0.78rem',
                color: 'var(--color-ink-muted)',
                marginTop: '8px',
              }}
            >
              Parsed size 감소
            </p>
          </div>
        </div>

        {/* 오른쪽: 바 차트 */}
        <div className="flex-1 flex flex-col gap-10 pt-2">
          {metrics.map(
            ({ label, before, after, unit, change, positive, note }) => (
              <div key={label}>
                <div className="flex items-center justify-between mb-4">
                  <span
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--color-ink)',
                    }}
                  >
                    {label}
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className="rounded-full px-3 py-1"
                      style={{
                        fontSize: '0.72rem',
                        background: positive
                          ? '#E6F0E9'
                          : 'var(--color-surface)',
                        color: positive ? '#2A6B3A' : 'var(--color-ink-muted)',
                        fontWeight: 500,
                      }}
                    >
                      {change}
                    </span>
                    {note && (
                      <span
                        style={{
                          fontSize: '0.7rem',
                          color: 'var(--color-ink-faint)',
                        }}
                      >
                        {note}
                      </span>
                    )}
                  </div>
                </div>

                {/* Before */}
                <div className="flex items-center gap-4 mb-2">
                  <span
                    className="w-12 text-right shrink-0"
                    style={{
                      fontSize: '0.7rem',
                      color: 'var(--color-ink-faint)',
                    }}
                  >
                    Before
                  </span>
                  <div className="flex-1 relative h-9 flex items-center">
                    <div
                      className="h-full rounded-lg"
                      style={{
                        width: `${(before / maxVal) * 100}%`,
                        background: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
                      }}
                    />
                    <span
                      className="absolute left-3"
                      style={{
                        fontSize: '0.72rem',
                        color: 'var(--color-ink-muted)',
                      }}
                    >
                      {before}
                      {unit}
                    </span>
                  </div>
                </div>

                {/* After */}
                <div className="flex items-center gap-4">
                  <span
                    className="w-12 text-right shrink-0"
                    style={{
                      fontSize: '0.7rem',
                      color: 'var(--color-ink-faint)',
                    }}
                  >
                    After
                  </span>
                  <div className="flex-1 relative h-9 flex items-center">
                    <div
                      className="h-full rounded-lg"
                      style={{
                        width: `${(after / maxVal) * 100}%`,
                        background: positive
                          ? '#D4EAD8'
                          : 'var(--color-surface)',
                        border: `1px solid ${positive ? '#A8D4AE' : 'var(--color-border)'}`,
                      }}
                    />
                    <span
                      className="absolute left-3"
                      style={{
                        fontSize: '0.72rem',
                        color: positive ? '#2A6B3A' : 'var(--color-ink-muted)',
                        fontWeight: positive ? 600 : 400,
                      }}
                    >
                      {after}
                      {unit}
                    </span>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
