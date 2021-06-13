import {useState} from 'react';

import {Header} from '@components/Header/index';
import {Footer} from '@components/Footer/index';
import {DescriptionSection} from '@components/DescriptionSection/index';
import {ModalSendEmail} from '@components/ModalSendEmail';

import {contents} from '@shared/data';

export default function Home() {
  const [modalSendEmailOpen, setModalSendEmailOpen] = useState(false);

  function onRequestOpen () {
    setModalSendEmailOpen(true);
  }

  function onRequestClose () {
    setModalSendEmailOpen(false);
  }

  return (
    <>

      <Header openEmailModal={onRequestOpen} />

      <div>
        {contents.map((item) => (
          <DescriptionSection
            key={item.title}
            title={item.title}
            description={item.description}
            reverse={item.reverse}
            asset={item.asset}
          />
        ))}
      </div>

      <ModalSendEmail isOpen={modalSendEmailOpen} onRequestClose={onRequestClose} />

      <Footer />
    </>
  )
}
