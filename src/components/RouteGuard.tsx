"use client";

// Static export (GitHub Pages) has no server, so auth/password routes are
// not available. RouteGuard renders children directly; route enablement is
// handled by the routes config in once-ui.config.ts.
interface RouteGuardProps {
  children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  return <>{children}</>;
};

export { RouteGuard };
