import React from "react";
import Turnstile from "react-turnstile";

const TurnstileComponent: React.FC<{ onVerify: (token: string) => void }> = ({
  onVerify,
}) => {
  return (
    <Turnstile
      sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
      onVerify={onVerify}
    />
  );
};

export default TurnstileComponent;
