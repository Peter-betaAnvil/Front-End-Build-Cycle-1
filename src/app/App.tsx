import { useState } from "react";
import LandingScreen from "./screens/LandingScreen";
import {FeaturesScreen, AboutScreen, ContactScreen} from "./screens/InfoScreens";
import LoginScreen from "./screens/LoginScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import CRMDashboard from "./screens/MainAppScreens";

type Screen = "landing" | "login" | "create-account" | "features" | "about" | "contact" | "dashboard";

// ── Root ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [screen, setScreen] = useState<Screen>("landing");

  const nav = {
    features: () => setScreen("features"),
    about:    () => setScreen("about"),
    contact:  () => setScreen("contact"),
    signIn:   () => setScreen("login"),
    landing:  () => setScreen("landing"),
  };

  if (screen === "landing") return (
    <LandingScreen
      onSignIn={nav.signIn}
      onFeatures={nav.features}
      onAbout={nav.about}
      onContact={nav.contact}
    />
  );

  if (screen === "features") return (
    <FeaturesScreen
      onBack={nav.landing} onSignIn={nav.signIn}
      onFeatures={nav.features} onAbout={nav.about} onContact={nav.contact}
    />
  );

  if (screen === "about") return (
    <AboutScreen
      onBack={nav.landing} onSignIn={nav.signIn}
      onFeatures={nav.features} onAbout={nav.about} onContact={nav.contact}
    />
  );

  if (screen === "contact") return (
    <ContactScreen
      onBack={nav.landing} onSignIn={nav.signIn}
      onFeatures={nav.features} onAbout={nav.about} onContact={nav.contact}
    />
  );

  if (screen === "login") return (
    <LoginScreen
      onSignIn={() => setScreen("dashboard")}
      onBack={nav.landing}
      onCreateAccount={() => setScreen("create-account")}
      onContact={nav.contact}
    />
  );

  if (screen === "create-account") return (
    <CreateAccountScreen
      onCreateAccount={() => setScreen("dashboard")}
      onSignIn={nav.signIn}
    />
  );

  return <CRMDashboard onSignOut={nav.signIn} />;
}
