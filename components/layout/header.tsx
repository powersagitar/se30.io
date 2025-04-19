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
      <span className="h-full w-full bg-[#C2A8F0]" />
      <span className="h-full w-full bg-[#A05DCB]" />
      <span className="h-full w-full bg-[#865DA4]" />
      <span className="h-full w-full bg-[#5D0096]" />
    </div>
  );
}

function MathematicsStrip() {
  return (
    <div className="flex h-2 w-screen">
      <span className="h-full w-full bg-[#EFBBF0]" />
      <span className="h-full w-full bg-[#EF60AD]" />
      <span className="h-full w-full bg-[#DF1AA0]" />
      <span className="h-full w-full bg-[#A2006E]" />
    </div>
  );
}
