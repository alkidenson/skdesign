import { useFormik } from 'formik';
import { Data } from '../type';
import { useAppDispatch } from '../redux/reducers/store';
import InputMask from 'react-input-mask';
import { addData, addLessData } from '../redux/api';

function AddData() {
  const dispatch = useAppDispatch();

  const validate = (values: Data) => {
    const errors: Record<string, string> = {};
    let symbolToCheck = '_';
    if (!values.firstName) {
      errors.firstName = 'Заполните поле!';
    } else if (values.firstName.length < 2) {
      errors.firstName = 'Имя должно состоять хотя бы из двух символов!';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Имя должно быть короче 15 символов!';
    }

    if (!values.lastName) {
      errors.lastName = 'Заполните поле!';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Фамилия должна быть короче двадцати символов!';
    }

    if (!values.email) {
      errors.email = 'Заполните поле!';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Введите корректный адрес электронной почты!';
    }

    if (!values.phone) {
      errors.phone = 'Заполните поле!';
    } else if (values.phone.includes(symbolToCheck)) {
      errors.phone = 'Телефон должен состоять из 11 символов!';
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      if (values.phone) {
        const changedValue = values.phone
          .replace(/\)/g, '')
          .replace(/\(/g, '')
          .replace(/-/g, '')
          .replace(/ /g, '');
        addData({ ...values, phone: changedValue });
        dispatch({
          type: 'data/add',
          payload: { ...values, phone: changedValue },
        });

        addLessData({ ...values, phone: changedValue });
        dispatch({
          type: 'lessData/add',
          payload: { ...values, phone: changedValue },
        });
      }
      resetForm();
    },
  });

  return (
    <div className="add_form_container">
      <form onSubmit={formik.handleSubmit}>
        <div className="add_form_item">
          <label className="add_form_item_label" htmlFor="id">
            ID
          </label>
          <input
            className="add_form_item_input"
            id="id"
            name="id"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.id}
          />
          {formik.touched.id &&
          formik.errors.id ? <div>{formik.errors.id}</div> : null}
        </div>
        <div className="add_form_item">
          <label className="add_form_item_label" htmlFor="firstName">
            Имя
          </label>
          <input
            className="add_form_item_input"
            id="firstName"
            name="firstName"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
        </div>

        <div className="add_form_item">
          <label className="add_form_item_label" htmlFor="lastName">
            Фамилия
          </label>
          <input
            className="add_form_item_input"
            id="lastName"
            name="lastName"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
        </div>
        <div className="add_form_item">
          <label className="add_form_item_label" htmlFor="email">
            E-mail
          </label>
          <input
            className="add_form_item_input"
            id="email"
            name="email"
            type="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>
        <div className="add_form_item">
          <label className="add_form_item_label" htmlFor="email">
            Телефон
          </label>
          <InputMask
            className="add_form_item_input"
            mask="+7 (999) 999-99-99"
            name="phone"
            id="phone"
            type="string"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
        </div>
        <button
          className="addform_button_submit"
          disabled={formik.dirty && !formik.isValid}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddData;
