import { ReactNode } from 'react';

interface Props {
  value?: string;
  type: string;
  placeholder?: string;
  handler: (e) => void;
  children?: ReactNode;
  error?: boolean;
  disabled?: boolean;
}

export default function Field(props: Props) {
  return (
    <div
      className={`field${' ' + props.type}${
        props.disabled ? ' disabled' : ''
      }`}>
      {props.type === 'text' || props.type === 'email' ? (
        <input
          required
          value={props.value}
          onChange={(e) => props.handler(e)}
          placeholder={props.placeholder}
          type={props.type}
        />
      ) : null}
      {props.type === 'textarea' ? (
        <textarea
          value={props.value}
          required
          onChange={(e) => props.handler(e)}
          placeholder={props.placeholder}></textarea>
      ) : null}
      {props.type === 'button' ? (
        <button type="submit" onClick={(e) => props.handler(e)}>
          {props.children}
        </button>
      ) : null}
    </div>
  );
}
