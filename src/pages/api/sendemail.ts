import { NextApiRequest, NextApiResponse } from "next";
import * as Yup from 'yup';
import nodemailer from 'nodemailer';

export default async function (request: NextApiRequest, response: NextApiResponse) {
  const {name, email, message} = request.body;

  try {
    const schema = Yup.object().shape({
      name: Yup.string().required('Nome é obrigatório!'),
      email: Yup.string().required('Email é obrigatório!').email('Digite um email válido'),
      message: Yup.string().min(20, 'Mínimo de 20 dígitos')
    });

    await schema.validate({
      name,
      email,
      message
    }, {
        abortEarly: false,
    });

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'olga.wuckert78@ethereal.email',
        pass: 'yMHNSkGUBFrUgssXqz'
      }
    });

    const mailOption = {
      from: `${email}`,
      to: 'geziel_barbosa_@hotmail.com',
      subject: `New mail from ${name}`,
      text: `${message}`,
    };

     transporter.sendMail(mailOption, (err, data) => {
      if (err) {
        return response.status(400).json({message: "Error"});
      } else {
        return response.json({message: "Send"})
      }
    });

  } catch (err) {
    return response.status(400).json({message: "Error"});
  }
}
