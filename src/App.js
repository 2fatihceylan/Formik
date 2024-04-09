import './App.css';
import { Formik } from 'formik';

function App() {


  const submitHandle = (values) => {
    alert(JSON.stringify(values));
    console.log(values.email)

  }



  return (
    <div className='container'>
      
      <div className='formik-container'>
      <Formik
     
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        } else if(values.password.length<4){
          errors.password = 'Password must be at least 4 character!'
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          //submitHandle(JSON.stringify(values))
          submitHandle(values)
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form className='form-box' onSubmit={handleSubmit}>
          <input
            className='input-field'
            type="email"
            name="email"
            placeholder='Email Address'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            className='input-field'
            type="password"
            name="password"
            placeholder='Password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button className='button-submit' type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
      </div>


  </div>
  );
}

export default App;
