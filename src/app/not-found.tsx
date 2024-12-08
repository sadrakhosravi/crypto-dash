import { GlowCircle } from '@/components/glow-circle';
import FlickeringGrid from '@/components/ui/flickering-grid';
import Link from 'next/link';
import { JSX, SVGProps } from 'react';

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-background px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <SpaceIcon className="mx-auto h-24 w-24 text-primary" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Oops, looks like you've landed on the wrong planet!
        </h1>
        <p className="mt-4 text-muted-foreground">
          The page you're looking for seems to have drifted off into the cosmos.
          But don't worry, we've got your back!
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Dashboard
          </Link>
        </div>
      </div>

      <FlickeringGrid
        className="absolute inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
        squareSize={5}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.3}
        flickerChance={0.05}
      />
    </div>
  );
}

function SpaceIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
    </svg>
  );
}
