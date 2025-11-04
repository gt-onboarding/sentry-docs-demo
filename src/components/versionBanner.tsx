import {useState} from 'react';
import {Button} from '@radix-ui/themes';
import {T, Var, useGT} from 'gt-next';

export function VersionBanner({
  version,
  onClickLatest,
}: {
  onClickLatest: () => void;
  version: string;
}) {
  const [show, setShow] = useState(true);
  const gt = useGT();

  return (
    <div
      className={`fixed right-5 bg-opacity-70 dark:bg-opacity-60	backdrop-blur-sm flex items-center content-center top-24 p-3 shadow-xl rounded bg-yellow-400   ${show ? '' : 'hidden'}`}
    >
      <T>
        You're on version <Var>{version}</Var> of our SDK docs. Want to go to the latest version?{' '}
      </T>
      <Button className="ml-2 dark:bg-primary" onClick={onClickLatest}>
        {gt('Latest')}
      </Button>
      <Button
        variant="ghost"
        className="mx-2 dark:text-primary"
        onClick={() => setShow(false)}
      >
        {gt('Hide')}
      </Button>
    </div>
  );
}
