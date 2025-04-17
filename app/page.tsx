import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-extrabold">
        University of Waterloo Software Engineering 2030 Class Profile
      </h1>

      <p>Site under construction.</p>

      <p>
        SE 30&apos; Discord server:{' '}
        <Link
          href="https://discord.gg/nw4N2NNBuE"
          className="underline text-bold"
        >
          nw4N2NNBuE
        </Link>
        .
      </p>
    </div>
  );
}
