import { Icons } from "@buildit/ui/icons";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}
export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps): JSX.Element {
  const Icon = Icons[(icon as keyof typeof Icons) || "LayoutGrid"];

  return (
    <div className="border-grey-deep/50 max-h-[270px] rounded-xl border p-5 lg:w-[300px]">
      <div className="flex h-full flex-col items-start gap-y-[5px]">
        <Icon className="text-indigo-light h-8 w-8" />
        <h3 className="mt-3 text-base">{title}</h3>
        <p className="text-grey-muted mt-1 text-sm">{description}</p>
      </div>
    </div>
  );
}
