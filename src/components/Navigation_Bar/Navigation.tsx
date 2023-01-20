import { useTransition } from "react";
interface tabProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}
export default function Navigation(props: tabProps) {
  const [isPending, startTransition] = useTransition();
  if (props.isActive) {
    return <a className="active">{props.children}</a>;
  }
  if (isPending) {
    return <a className="pending">{props.children}</a>;
  }
  return (
    <a
      onClick={() => {
        startTransition(() => {
          props.onClick();
        });
      }}
    >
      {props.children}
    </a>
  );
}
