import { Header } from '@components/Header/index';
import { Footer } from '@components/Footer/index';
import { DescriptionSection } from '@components/DescriptionSection/index';

import { contents } from '@shared/data';

export default function Home() {
  return (
    <>
      <Header />

      <div>
        {contents.map(item => (
          <DescriptionSection
            key={item.title}
            id={item.id}
            title={item.title}
            description={item.description}
            reverse={item.reverse}
            asset={item.asset}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}
