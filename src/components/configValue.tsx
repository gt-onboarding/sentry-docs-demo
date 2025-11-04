import {Fragment} from 'react';
import {T, Branch, Var} from 'gt-next';

type Props = {
  children: JSX.Element;
  location: string;
  name: string;
};

const getDescriptiveLocation = (location: string): JSX.Element => {
  return (
    <T>
      <Branch
        branch={location}
        env={<Fragment>in System Environment</Fragment>}
        yaml={
          <Fragment>
            in <code>config.yaml</code>
          </Fragment>
        }
        python={
          <Fragment>
            in <code>sentry.conf.py</code>
          </Fragment>
        }
        cli={<Fragment>on the command line</Fragment>}
      >
        <Var>{(() => { throw new Error('Invalid location'); })()}</Var>
      </Branch>
    </T>
  );
};

export function ConfigValue({name, location, children}: Props): JSX.Element {
  return (
    <div style={{marginBottom: '2rem'}}>
      <h4 style={{marginBottom: 0, fontWeight: 'bold'}}>
        <code>{name}</code>
      </h4>
      <p>
        <T>
          <small>Declared <Var>{getDescriptiveLocation(location)}</Var></small>
        </T>
      </p>
      {children}
    </div>
  );
}
