import { useTransition } from "react";
interface tabProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}
export default function Navigation(props: tabProps) {
  const [isPending, startTransition] = useTransition();
  if (props.isActive) {
    return <b>{props.children}</b>;
  }
  if (isPending) {
    return <b className="pending">{props.children}</b>;
  }
  return (
    <button
      onClick={() => {
        startTransition(() => {
          props.onClick();
        });
      }}
      style={{ position: "fixed", zIndex: 101 }}
    >
      {props.children}
    </button>
  );
}
