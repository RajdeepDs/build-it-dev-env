import { Icons } from "@muse/ui/icons";
import Image from "next/image";

export default function BentoFeatures(): JSX.Element {
  return (
    <div className="bg-soft py-[113px] text-black">
      <div className="container flex flex-col">
        <div className="flex items-center">
          <Icons.Sparkles className="text-indigo-accent fill-indigo-accent mr-2 h-5 w-5" />
          <h1 className="text-indigo-accent">Features</h1>
        </div>
        <div className="mt-5">
          <h1 className="text-4xl font-bold">Unleash the power of Muse.</h1>
          <p className="text-grey-deep">
            Build faster, collaborate seamlessly, and deploy effortlessly with
            Muse&apos;s powerful suite of features.
          </p>
        </div>
      </div>
      <div className="container mt-10 grid grid-cols-3 gap-2">
        <div className="col-span-3 h-fit w-full rounded-xl bg-white p-4 shadow-lg">
          <div className="grid items-center md:grid-cols-2">
            <div className="mt-4">
              <Image
                src="/terminal-mockup.svg"
                alt="Terminal Mockup"
                width={588}
                height={244}
              />
            </div>
            <div className="mt-5 md:mt-0">
              <h2 className="text-indigo-accent">Integrated Terminal</h2>
              <h1 className="text-xl font-bold">
                Command Line power with in your workspace.
              </h1>
              <p className="text-grey">
                Execute advanced tasks and leverage familiar terminal commands
                directly within Muse&apos;s development environment. No need to
                switch between windows! Enjoy the flexibility of a built-in
                terminal for advanced development tasks.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-3 h-fit w-full rounded-xl bg-white p-4 shadow-lg md:col-span-2">
          <div className="grid items-center gap-2 md:grid-cols-2">
            <div className="mt-5 md:mt-0">
              <h2 className="text-indigo-accent">Real-Time Collaboration</h2>
              <h1 className="text-xl font-bold">Simultaneous Code Editing.</h1>
              <p className="text-grey">
                Collaborate in real-time! Everyone on the team can edit the
                codebase simultaneously, streamlining the development process.
                Work seamlessly with teammates on projects, seeing changes
                instantly and fostering efficient communication.
              </p>
            </div>
            <div>
              <Image
                src="/realtime-mockup.svg"
                alt="Realtime Mockup"
                width={588}
                height={244}
              />
            </div>
          </div>
        </div>
        <div className="col-span-3 h-full w-full rounded-xl bg-white p-4 shadow-lg md:col-span-1">
          <div className="mt-32">
            <Icons.FolderSync className="text-indigo-accent h-8 w-8" />
            <h2 className="text-indigo-accent">Cloud Sync</h2>
            <h1 className="text-xl font-bold">Keep everything sync.</h1>
            <p className="text-grey">
              Work seamlessly across devices. Muse automatically syncs your
              project files to the cloud, ensuring you always have the latest
              version.
            </p>
          </div>
        </div>
        <div className="col-span-3 h-full w-full rounded-xl bg-white p-4 shadow-lg md:col-span-1">
          <div className="flex flex-col justify-between">
            <Icons.Zap className="fill-indigo-soft text-indigo-soft mx-auto h-32 w-32 " />
            <div className="mt-8 text-center">
              <h2 className="text-indigo-accent">Cloud Sync</h2>
              <h1 className="text-xl font-bold">Keep everything sync.</h1>
              <p className="text-grey">
                Work seamlessly across devices. Muse automatically syncs your
                project files to the cloud, ensuring you always have the latest
                version.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-3 h-full w-full rounded-xl bg-white p-4 shadow-lg md:col-span-2">
          <div className="flex h-full flex-col items-center justify-between gap-2">
            <div className="mt-10 flex items-center justify-center gap-4">
              <Image
                src="/LogoDark.svg"
                alt="GitHub Mockup"
                width={50}
                height={244}
              />
              <Icons.ArrowLeftRight className="fill-indigo-accent text-indigo-accent mx-2 h-8 w-8" />
              <Image
                src="/github-mark.svg"
                alt="GitHub Mockup"
                width={50}
                height={244}
              />
            </div>
            <div className="mt-5 flex w-full flex-col items-center text-center md:mt-0">
              <h2 className="text-indigo-accent">
                Seamless GitHub integration
              </h2>
              <h1 className="text-xl font-bold">Connect Muse with GitHub.</h1>
              <p className="text-grey">
                Leverage the power of both platforms! Effortlessly manage your
                GitHub repositories and seamlessly integrate them into your Muse
                development workflow. Import projects directly from your GitHub
                repository, streamline collaboration, and enjoy the benefits of
                a unified development experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
