import { Field, Formik, Form } from 'formik'
import React from 'react'
import './header.css'

const App = () => {
  return (
    <div>
        <header>
            <Formik
            initialValues={{ search: '' }}
            onSubmit={ async values=>{
                //llamar a api de unplash
                console.log(values)
            } }            
            >
                <Form>
                    <Field name="search"/>
                </Form>
            </Formik>    
        </header>    
    </div>
  )
}

export default App