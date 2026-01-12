"use client";
import { useEffect } from "react";

const VoiceFlowWidget: React.FC = () => {
  useEffect(() => {
    (function (d: Document, t: string) {
      const v = d.createElement(t) as HTMLScriptElement;
      const s = d.getElementsByTagName(t)[0];

      v.onload = function () {
        // Ensure window.voiceflow exists on load
        //@ts-ignore
        if (window.voiceflow && window.voiceflow.chat) {
          //@ts-ignore
          window.voiceflow.chat.load({
            verify: { projectID: "65e43806424e36078a0e08cb" },
            url: "https://general-runtime.voiceflow.com",
            versionID: "production",
          });
        }
      };

      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      v.type = "text/javascript";
      s.parentNode?.insertBefore(v, s);
    })(document, "script");
  }, []);

  return null; // Return null as this is just a script
};

export default VoiceFlowWidget;
