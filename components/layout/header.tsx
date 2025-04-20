export default function Header() {
  return (
    <header className="-mx-6">
      <MathematicsStrip />
      <EngineeringStrip />
    </header>
  );
}

function EngineeringStrip() {
  return (
    <div className="flex h-2 w-screen">
      <span className="bg-engineering-1 h-full w-full" />
      <span className="bg-engineering-2 h-full w-full" />
      <span className="bg-engineering-3 h-full w-full" />
      <span className="bg-engineering-4 h-full w-full" />
    </div>
  );
}

function MathematicsStrip() {
  return (
    <div className="flex h-2 w-screen">
      <span className="bg-mathematics-1 h-full w-full" />
      <span className="bg-mathematics-2 h-full w-full" />
      <span className="bg-mathematics-3 h-full w-full" />
      <span className="bg-mathematics-4 h-full w-full" />
    </div>
  );
}
