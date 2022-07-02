import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().min(11).max(11),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
});
