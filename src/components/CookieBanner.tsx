import { useState } from "react";
import CookieConsent from "react-cookie-consent";
import SettingsModal from "./CookieSettingsModal";

const CookieBanner = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Akzeptieren"
        declineButtonText="Ablehnen"
        enableDeclineButton
        cookieName="userConsent"
        style={{
          background: "black",
          color: "white",
          fontSize: "14px",
          padding: "16px",
        }}
        buttonStyle={{
          background: "#4CAF50",
          color: "white",
          fontSize: "13px",
          borderRadius: "6px",
          padding: "8px 16px",
        }}
        declineButtonStyle={{
          background: "#f44336",
          color: "white",
          fontSize: "13px",
          borderRadius: "6px",
          padding: "8px 16px",
          marginLeft: "10px",
        }}
        onAccept={() => console.log("✅ Cookies akzeptiert")}
        onDecline={() => console.log("❌ Cookies abgelehnt")}
        expires={150}
      >
        Diese Website verwendet Cookies für eine bessere Nutzungserfahrung.{" "}
        <span
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            marginLeft: "10px",
            color: "#90caf9",
          }}
          onClick={() => setIsSettingsOpen(true)}
        >
          Einstellungen
        </span>
      </CookieConsent>

      {/* Modal settings */}
      {isSettingsOpen && <SettingsModal close={() => setIsSettingsOpen(false)} />}
    </>
  );
};

export default CookieBanner;
