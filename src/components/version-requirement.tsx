import {ReactNode} from 'react';
import {T, Var, Branch, useGT} from 'gt-next';

import {Alert} from './alert';

export type VersionRequirementProps = {
  // e.g., "Sentry React Native SDK"
  minVersion: string;
  product: string;
  // e.g., "Logs for React Native"
  sdk: string;
  children?: ReactNode;
  // e.g., "7.0.0-beta.1"
  level?: 'info' | 'warning' | 'success'; // additional details, upgrade notes, links
};

/**
 * VersionRequirement renders a prominent callout stating the minimum SDK version
 * required for a given feature. It composes the shared Alert/Callout styles and
 * can be reused by any product area (not limited to Logs).
 */
export function VersionRequirement({
  product,
  sdk,
  minVersion,
  level = 'warning',
  children,
}: VersionRequirementProps) {
  const gt = useGT();
  return (
    <Alert title={gt('Version requirement')} level={level}>
      <T>
        <p>
          <Var>{product}</Var> requires <Var>{sdk}</Var> version <code><Var>{minVersion}</Var></code> or newer.
        </p>
      </T>
      {children && <div className="mt-2">{children}</div>}
    </Alert>
  );
}
