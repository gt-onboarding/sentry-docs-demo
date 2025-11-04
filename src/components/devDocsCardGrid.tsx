import {useGT} from 'gt-next';

import BackendImg from 'sentry-docs/imgs/back-end.png';
import InfraImg from 'sentry-docs/imgs/dev-infra.png';
import FrontendImg from 'sentry-docs/imgs/front-end.png';
import IngestImg from 'sentry-docs/imgs/ingest.png';
import IntegrationsImg from 'sentry-docs/imgs/integrate.png';
import SkdsImg from 'sentry-docs/imgs/sdks.png';
import ServicesImg from 'sentry-docs/imgs/services.png';
import SelfHostedImg from 'sentry-docs/imgs/support.png';

import {Card} from './card';

export function DevDocsCardGrid() {
  const gt = useGT();

  return (
    <div className="flex flex-wrap gap-6 not-prose">
      <Card
        className="w-full"
        href="/development-infrastructure/"
        title={gt('Development Infrastructure')}
        description={gt('How to get your local dev environment up and running.')}
        image={InfraImg}
        imageAlt={gt('Development Infrastructure')}
      />

      <Card
        className="w-full md:w-[calc(50%-12px)]"
        href="/backend/"
        title={gt('Backend')}
        description={gt('The monolith that is powering Sentry.')}
        image={BackendImg}
        imageAlt={gt('Backend')}
      />
      <Card
        className="w-full md:w-[calc(50%-12px)]"
        href="/frontend/"
        title={gt('Frontend')}
        description={gt('How we write frontend code.')}
        image={FrontendImg}
        imageAlt={gt('Frontend')}
      />
      <Card
        className="w-full md:w-[calc(50%-12px)]"
        href="/services/"
        title={gt('Services')}
        description={gt('Running alongside the monolith.')}
        image={ServicesImg}
        imageAlt={gt('Services')}
      />
      <Card
        className="w-full md:w-[calc(50%-12px)]"
        href="/integrations/"
        title={gt('Integrations')}
        imageAlt={gt('Integrations')}
        description={gt('Connecting Sentry to other products.')}
        image={IntegrationsImg}
      />
      <Card
        className="w-full md:w-[calc(50%-12px)]"
        href="/ingestion/"
        title={gt('Ingestion')}
        imageAlt={gt('Ingestion')}
        description={gt('Receiving and processing data.')}
        image={IngestImg}
      />
      <Card
        className="w-full md:w-[calc(50%-12px)]"
        href="/sdk/"
        title={gt('SDKs')}
        imageAlt={gt('SDKs')}
        description={gt('Instrumenting user code.')}
        image={SkdsImg}
      />
      <Card
        className="w-full"
        href="/self-hosted/"
        title={gt('Self-Hosted Sentry')}
        imageAlt={gt('Self-Hosted Sentry')}
        description={gt('How you can run all of Sentry on your own server, without paying anything.')}
        image={SelfHostedImg}
      />
    </div>
  );
}
