import { useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal') as HTMLElement;

type ModalProps = {
  children: ReactNode;
};

export default function Modal({ children }: ModalProps) {
  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) elRef.current = document.createElement('div');

  useEffect(() => {
    const el = elRef.current!;
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, []);

  return (
    <>
      {createPortal(
        <div
          tabIndex={0}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            zIndex: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backdropFilter: 'blur(2px)',
          }}
        >
          {children}
        </div>,
        elRef.current,
      )}
    </>
  );
}
