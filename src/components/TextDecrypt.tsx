"use client";

import React, { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";

const decryptOptions = {
  chars: "-./!?#%&@$€()[]{}<>~01abcdefghijklmnopqrstuvwxyz",
  interval: 70,
};

interface TextDecryptProps {
  text: string;
  className?: string;
}

export const TextDecrypt: React.FC<TextDecryptProps> = ({
  text,
  className,
}) => {
  const [result, dencrypt] = useDencrypt(decryptOptions);

  useEffect(() => {
    dencrypt(text);
  }, [text, dencrypt]);

  return (
    <p
      className={` font-mono tracking-widest ${className}`}
    >
      {result}&nbsp;
    </p>
  );
};
