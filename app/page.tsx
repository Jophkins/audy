import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Home() {
  const tracks: { title: string; artist: string }[] = [
    { title: "Track 1", artist: "Artist A" },
    { title: "Track 2", artist: "Artist B" },
    { title: "Track 3", artist: "Artist C" },
    { title: "Track 4", artist: "Artist D" },
    { title: "Track 5", artist: "Artist E" },
  ];

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <p>Tracks list:</p>
        <div>
          {tracks.map((track, index) => (
            <div
              key={index}
              className="mb-2 border p-2 rounded border-black hover:bg-orange-700
              hover:text-green-500 cursor-pointer
             transition-colors duration-300 ease-in-out"
            >
              <span>{track.title}</span>
              &nbsp;by&nbsp;
              by
              &nbsp;by&nbsp;
              <span>{track.artist}</span>
            </div>
          ))}
        </div>
        <Button> Click me </Button>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
