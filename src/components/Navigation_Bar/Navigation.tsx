import { useTransition } from 'react';
interface tabProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
  label: string;
}
export default function Navigation(props: tabProps) {
  const [isPending, startTransition] = useTransition();
  if (props.isActive) {
    return (
      <a className='active' aria-label={props.label}>
        {props.children}
      </a>
    );
  }
  if (isPending) {
    return (
      <a className='pending' aria-label={props.label}>
        {props.children}
      </a>
    );
  }
  return (
    <a
      onClick={() => {
        startTransition(() => {
          props.onClick();
        });
      }}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          startTransition(() => {
            props.onClick();
          });
        }
      }}
      aria-label={props.label}
      tabIndex={0}
    >
      {props.children}
    </a>
  );
}
