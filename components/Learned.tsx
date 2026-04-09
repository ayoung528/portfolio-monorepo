export default function Learned() {
  return (
    <section
      className="px-16 py-20"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <p
        className="text-xs tracking-[0.2em] uppercase mb-8"
        style={{ color: 'var(--color-ink-faint)' }}
      >
        Learned
      </p>

      <div className="flex gap-20 items-start">
        <div style={{ flex: '0 0 320px' }}>
          <h2
            className="serif mb-6"
            style={{ fontSize: '3rem', lineHeight: 1.1 }}
          >
            배운 것들
          </h2>
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--color-ink-muted)',
              lineHeight: 1.85,
            }}
          >
            단순히 일감을 받아 결과를 내는 것이 아닌, 과정 속에서 미래를
            바라보며 다른 개발자도 내 코드를 손쉽게 이해하고 수정할 수 있도록
            만드는 것이 목표였습니다.
          </p>
        </div>

        <div className="flex-1 flex flex-col">
          {[
            {
              title: '불편함을 그냥 넘기지 않기',
              desc: '트리쉐이킹이 안 된다는 것을 알았을 때, 개선 방법을 찾고 실제로 적용하는 것까지 책임졌습니다.',
            },
            {
              title: '공유와 협업의 힘',
              desc: '팀에 공유하면서 리더님의 한 마디, "명령어 하나로 합쳐줘요"가 초기 설치 비용을 크게 줄였습니다.',
            },
            {
              title: '문서화는 개발의 일부',
              desc: '내가 겪은 트러블슈팅을 문서로 남기면 다음 사람은 같은 시간을 낭비하지 않습니다.',
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="flex gap-6 py-7"
              style={{ borderBottom: '1px solid var(--color-border)' }}
            >
              <div
                className="shrink-0"
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--color-accent)',
                  marginTop: '8px',
                }}
              />
              <div>
                <h3
                  className="mb-2"
                  style={{
                    fontSize: '0.9rem',
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
                    lineHeight: 1.75,
                  }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
