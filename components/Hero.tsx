export default function Hero() {
  return (
    <section className="px-16 pt-24 pb-20">
      <p
        className="fade-up text-xs tracking-[0.2em] uppercase mb-10"
        style={{ color: 'var(--color-ink-faint)' }}
      >
        Monorepo Portfolio · 2026
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '3rem',
        }}
      >
        <div style={{ flex: 1 }}>
          <h1
            className="serif fade-up fade-up-delay-1"
            style={{
              fontSize: '4.5rem',
              lineHeight: 1.05,
              marginBottom: '2rem',
            }}
          >
            멀티레포에서
            <br />
            모노레포로
          </h1>

          <p
            className="fade-up fade-up-delay-2"
            style={{
              fontSize: '1rem',
              color: 'var(--color-ink-muted)',
              lineHeight: 1.8,
              maxWidth: '550px',
            }}
          >
            바쁜 업무를 끝내고 외면했던 모노레포로의 설계를 25년 12월 부터
            시작했습니다.
            <br /> 26년도 연구 과제로 지정하며 105 개의 컴포넌트 라이브러리를
            <br />
            멀티레포에서 모노레포로 전환한 과정과 결과를 공유합니다.
          </p>

          <p
            className="fade-up fade-up-delay-3 mt-6"
            style={{
              fontSize: '0.875rem',
              color: 'var(--color-ink-faint)',
              lineHeight: 1.9,
              maxWidth: '480px',
            }}
          >
            안녕하세요 :) 귀한 시간 내어 제 포트폴리오에 방문해 주셔서
            감사합니다.
            <br />
            모쪼록 흥미롭게 읽어주시길 바라며, 당사와 컬쳐핏이 잘 맞았으면
            좋겠습니다.
          </p>
        </div>
      </div>

      <div
        className="fade-up fade-up-delay-3 flex gap-12 mt-12 pt-12"
        style={{
          borderTop: '1px solid var(--color-border)',
          fontSize: '0.8rem',
        }}
      >
        {[
          { label: '역할', value: '프론트엔드 개발자' },
          { label: '기간', value: '2025년 12월 ~ 현재' },
          { label: '부서 / 직급', value: '개발센터 / 전임(대리)' },
        ].map(({ label, value }) => (
          <div key={label}>
            <p
              style={{
                color: 'var(--color-ink-faint)',
                letterSpacing: '0.1em',
                marginBottom: '4px',
              }}
            >
              {label.toUpperCase()}
            </p>
            <p style={{ color: 'var(--color-ink)', fontWeight: 500 }}>
              {value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
