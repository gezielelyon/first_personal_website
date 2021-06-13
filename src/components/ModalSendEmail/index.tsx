import { FormEvent, useState, useRef } from 'react';
import Modal from 'react-modal';

import {api} from '@services/api';

import {
  Container,
  Form,
  DivInput,
  SendButton
} from './styles';

interface IModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalSendEmail ({isOpen, onRequestClose}: IModalProps) {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [emailSend, setEmailSend] = useState(false);

  async function handleSendEmail (event: FormEvent) {
    event.preventDefault();

    const {data} = await api.post(
      '/api/sendemail',
      {
        name: nameRef.current.value,
        email:  emailRef.current.value,
        message: messageRef.current.value
      }
    );

    if (data.message == "Send") {
      setEmailSend(true);
    } else {
      setEmailSend(false);
    }
  }

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >

      <button type="button" className="react-modal-close" onClick={onRequestClose}>
        <img src="/close.svg" alt="close"/>
      </button>

      {emailSend ? (
        <Container>
          <h1 style={{marginTop: 30}}>Email enviado com sucesso</h1>
        </Container>
      ) : (
        <Container>
          <h1>Enviar email</h1>

          <Form action="#" onSubmit={handleSendEmail}>

            <DivInput>
              <span>Nome</span>
              <input ref={nameRef} type="text" />
            </DivInput>

            <DivInput>
              <span>Email</span>
              <input ref={emailRef} type="email" />
            </DivInput>

            <DivInput>
              <span>Mensagem</span>
              <textarea ref={messageRef} maxLength={500} />
            </DivInput>

            <SendButton type="submit">
              Enviar mensagem
            </SendButton>

          </Form>
        </Container>
      )}
    </Modal>
  );
}
