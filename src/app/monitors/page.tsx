import Header from '@/components/Header';
import Monitor from '@/components/Monitor';

export default function Monitors() {
  return (
    <div className="flex flex-col items-center">
      <Header>Connected Monitors</Header>

      <div className="mt-8 grid w-full grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] place-content-center gap-10 px-6">
        <Monitor name="DESKTOP 007" />
        <Monitor name="Monitor 134x4" />
      </div>
    </div>
  );
}
