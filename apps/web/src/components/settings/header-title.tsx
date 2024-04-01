interface HeaderTitleProps {
  title: string;
  description: string;
}

export default function HeaderTitle({
  title,
  description,
}: HeaderTitleProps): JSX.Element {
  return (
    <div className="flex flex-col items-start ">
      <h1 className="text-2xl">{title}</h1>
      <p className="text-grey text-sm">{description}</p>
    </div>
  );
}
