const steps = [
  {
    step: '01',
    title: '인프라 및 폴더 구조 수립',
    body: 'Yarn Workspaces 기반 모노레포 환경을 선언하고, 빌드 성능 최적화를 위한 Nx와 자동화된 버전 관리를 위한 Changesets를 도입했습니다. Atomic Design 원칙을 적용해 atoms / molecules / layout / organisms 구조로 105개 컴포넌트를 재배치했습니다.',
    tags: ['Yarn Workspaces', 'Nx', 'Changesets', 'Atomic Design'],
  },
  {
    step: '02',
    title: '유연한 의존성 관리 전략',
    body: '초기에는 dependencies로 의존성을 설정했으나 Changesets의 ‘버전 전파’ 현상이 라이브러리 사용자가 하나의 컴포넌트를 업데이트할 때마다 의도치 않게 다른 컴포넌트들까지 상위 버전으로 마이그레이션해야 하는 관리 복잡성을 초래할 수 있음을 파악했습니다. 해당 이슈를 파트 내 공유하여 “호스트 모듈에 설치된 라이브러리를 공유하여 사용함으로써 버전 충돌을 방지하고 업데이트 효율을 높이자”는 리더의 기술적 조언을 수용해 peerDependencies에 의존성을 명시하도록 변경해 개별 컴포넌트의 독립적인 배포 유연성을 확보했습니다.',
    tags: ['peerDependencies', '버전 전파 해소', '팀 협업'],
  },
  {
    step: '03',
    title: '시맨틱 버저닝 규칙 수립',
    body: '컴포넌트의 초기 버전은 1.0.0 으로 정의하고, 변경 성격에 따른 명확한 업데이트 규칙을 제안 및 시행했습니다. 새로운 기능 추가 또는 하위 호환되는 기능 변경 시에는 Minor 버전을 업데이트하고 버그 수정이나 성능 개선, 내부 리팩토링 등 하위 호환성을 유지하는 수정 사항에 대해서는 Patch 버전을 업데이트하도록 제안 및 시행했습니다. 그리고 초기 아키텍처 설계 시 발생했던 ‘버전 전파’ 이슈를 방지하기 위해, 리더와의 기술적 합의를 거쳐 Major 버전을 1.x.x 대에서 관리하는 전략을 채택했습니다. 이러한 규칙이 실무에 일관되게 적용될 수 있도록 Changesets를 도입했으며, 개발자가 커밋 시점에 변경 사항의 성격을 기록하게 함으로써, 배포 시점에 자동으로 버전이 계산되고 변경 이력이 생성되는 구조를 완성했습니다.',
    tags: ['Semantic Versioning', 'Major 1.x.x 고정', 'Changesets 자동화'],
  },
  {
    step: '04',
    title: 'AI 기반 마이그레이션 자동화',
    body: '105개 패키지에 공통으로 필요한 index.ts, package.json, project.json, rollup.config.js 생성 작업을 Claude Code에 위임해 반복 업무를 자동화했습니다. 이를 통해 휴먼 에러를 방지함과 동시에, 전체적인 시스템 설계와 복잡한 의존성 구조를 고도화하는 핵심 작업에 집중하여 전체 마이그레이션 기간을 획기적으로 단축할 수 있었습니다. 아울러, 대규모 리소스를 효율적으로 관리하기 위해 백그라운드 배포 자동화 스크립트를 설계했습니다. 빌드 설정 변경 시 전체 재배포가 필요한 경우엔 백그라운드 배포 스크립트를 구성해 병렬 개발 환경을 구축했습니다.',
    tags: ['Claude Code', '백그라운드 배포 스크립트', '휴먼 에러 방지'],
  },
  {
    step: '05',
    title: '트리쉐이킹으로 번들 최적화',
    body: '라이브러리 경량화를 위해 ESM 문법 적용, 선택적 import, Rollup의 preserveModules: true, sideEffects: false 설정으로 트리쉐이킹을 구성했습니다. lodash를 lodash-es로 전면 교체하여 실제 사용되는 코드만 번들에 포함되도록 개선했습니다.',
    tags: ['ESM', 'preserveModules', 'sideEffects: false', 'lodash-es'],
  },
  {
    step: '06',
    title: 'DX 도구 및 가이드라인 제공',
    body: '모노레포 전환을 진행하면서 파트 내 진입 장벽을 낮추기 위해 DX 도구와 가이드라인을 제공했습니다. 새로운 환경 도입 시 동료들이 겪을 수 있는 초기 학습 비용을 최소화하고자 상세한 트러블슈팅 문서와 공유용 기술 가이드를 작성하고 누락된 peerDependencies를 자동으로 탐색하여 설치하거나, 전체 라이브러리를 한 번에 업데이트하는 커스텀 자동화 스크립트를 배포했습니다. 이를 통해 수동 관리의 번거로움을 제거하고, 파트원들이 핵심 비즈니스 로직 개발에만 집중할 수 있는 안정적인 개발 환경을 구축했습니다.',
    tags: ['트러블슈팅 문서', '자동화 스크립트', '팀 DX'],
  },
  {
    step: '07',
    title: 'CI/CD 파이프라인',
    body: '배포 안정성 확보를 위한 CI/CD 파이프라인 구축과 자동화된 품질 검증 체계를 도입했습니다. 멀티레포 운영 당시의 로컬 수동 배포 방식은 배포 이력 공유 미흡으로 인한 버전 충돌이 빈번했고, 매번 커밋 내역이나 사내 넥서스를 수동으로 확인해야 하는 비효율이 존재했습니다. 이를 해결하고자 GitLab CI/CD를 구축하여 원격 저장소 푸시 시 빌드 및 배포가 자동 수행되도록 과정을 개선하여 Discord 웹훅으로 배포 완료 알림을 연동했습니다.',
    tags: ['GitLab CI/CD', 'Discord 웹훅'],
  },
  {
    step: '08',
    title: '품질 검증 체계',
    body: '대규모 리뉴얼 제품의 품질을 보장하기 위해 Playwright를 활용한 시각적 회귀 테스트 환경을 구축했습니다. 기존 Playwright 프로젝트 내에 visual.config.js 설정 파일을 별도로 구성하고 전용 명령어를 추가하여 모노레포 컴포넌트 적용 전후의 서버 화면을 정밀하게 캡처 및 비교하고, 마이그레이션 과정에서 발생할 수 있는 의도치 않은 UI 변경 사항을 사전에 검출하고 안정적인 릴리즈 기반을 마련했습니다.',
    tags: ['Playwright', '시각적 회귀 테스트'],
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

      <h2 className="serif mb-16" style={{ fontSize: '3rem', lineHeight: 1.1 }}>
        전환 여정기
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {steps.map(({ step, title, body, tags }, i) => (
          <div
            key={step}
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr',
              gap: '32px',
              padding: '32px 0',
              borderTop: '1px solid var(--color-border)',
              ...(i === steps.length - 1
                ? { borderBottom: '1px solid var(--color-border)' }
                : {}),
            }}
          >
            {/* 스텝 번호 */}
            <div style={{ paddingTop: '2px' }}>
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
            </div>

            {/* 내용 */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px',
                  flexWrap: 'wrap',
                }}
              >
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--color-ink)',
                  }}
                >
                  {title}
                </h3>
              </div>

              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-ink-muted)',
                  lineHeight: 1.85,
                  marginBottom: '16px',
                }}
              >
                {body}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.72rem',
                      background: 'var(--color-surface)',
                      color: 'var(--color-ink-muted)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '6px',
                      padding: '3px 10px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
