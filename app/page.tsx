import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Process from '@/components/Process';
import Result from '@/components/Result';
import Learned from '@/components/Learned';
import TechStack from '@/components/TechStack';

export default function Home() {
  return (
    <div
      style={{
        background: 'var(--color-bg)',
        color: 'var(--color-ink)',
      }}
    >
      <div id="hero">
        <Hero />
      </div>
      <div id="problem">
        <Problem />
      </div>
      <div id="solution">
        <Solution />
      </div>
      <div id="process">
        <Process />
      </div>
      <div id="result">
        <Result />
      </div>
      <div id="learned">
        <Learned />
      </div>
      <div id="techstack">
        <TechStack />
      </div>
    </div>
  );
}
