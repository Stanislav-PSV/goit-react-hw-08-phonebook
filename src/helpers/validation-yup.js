import * as yup from 'yup';
const phoneRegExp = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

export const schema = () =>
	yup.object().shape({
		name: yup
			.string()
			.required('Required')
			.matches(
				nameRegExp,
				"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
			),
		number: yup
			.string()
			.required('Required')
			.matches(
				phoneRegExp,
				'Phone number must be digits and can contain spaces, dashes, parentheses and can start without +'
			)
	});
