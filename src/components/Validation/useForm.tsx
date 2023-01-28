import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
interface Validation {
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: string;
    message: string;
  };
  custom?: {
    isValid: (value: string) => boolean;
    message: string;
  };
}
type ErrorRecord<T> = Partial<Record<keyof T, string>>;
type Validations<T extends {}> = Partial<Record<keyof T, Validation>>;

const useForm = <T extends Record<keyof T, any> = {}>(options?: {
  validations?: Validations<T>;
  initialValues?: Partial<T>;
  onSubmit?: () => void;
}) => {
  const [data, setData] = useState<T>((options?.initialValues || {}) as T);
  const [errors, setErrors] = useState<ErrorRecord<T>>({});
  const [isSent, setIsSetn] = useState(false);

  const handleChange =
    <S extends unknown>(key: keyof T, sanitizeFn?: (value: string) => S) =>
    (e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
      const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
      setData({
        ...data,
        [key]: value,
      });
    };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validations = options?.validations;
    if (validations) {
      let valid = true;
      const newErrors: ErrorRecord<T> = {};
      for (const key in validations) {
        const value = data[key];
        const validation = validations[key];
        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.message;
        }
        const pattern = validation?.pattern;
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }
        const custom = validation?.custom;
        if (custom?.isValid && !custom.isValid(value)) {
          valid = false;
          newErrors[key] = custom.message;
        }
      }
      if (!valid) {
        setErrors(newErrors);
        return;
      }
    }
    setErrors({});
    if (options?.onSubmit) {
      emailjs
        .send(
          `${import.meta.env.VITE_EMAILJS_SERVICE_KEY}`,
          `${import.meta.env.VITE_EMAILJS_TEMPLATE_KEY}`,
          data,
          `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`
        )
        .then(
          (response) => {
            setIsSetn(true);
            const time = setInterval(() => {
              setIsSetn(false);
              setData(options.initialValues as T);
            }, 7000);
            return () => clearInterval(time);
          },
          (error) => {
            setIsSetn(false);
            return;
          }
        );
    }
  };
  return {
    data,
    handleChange,
    handleSubmit,
    errors,
    isSent,
  };
};

export default useForm;
