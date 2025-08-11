import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import {ColorRing} from 'react-loader-spinner'

export default function Register() {
  
  const[errorMessage,setErrorMessage]=useState(null);
  const[isSuccess,setIsSuccess]=useState(false);
  const[isClicked,setIsClicked]=useState(false);

  const navigate=useNavigate();

  // const [loading, setLoading] = useState(false);
  // const [serverMessage, setServerMessage] = useState(null);
async function registerUser(values) {
  setIsClicked(true);
// try{
//       const { data } = await axios.post("https://tarmeezacademy.com/api/v1/register", values,
//        {headers: {
//       // Authorization: 'Bearer Token',
//       'Content-Type': 'application/json'
//     }} 
//     );
//     console.log('Registration success:', data);
// }
// catch(error){
//   console.log('error',error.response.data.message);
  

// }
  axios.post("https://tarmeezacademy.com/api/v1/register", values,
       {headers: {
      // Authorization: 'Bearer Token',
      'Content-Type': 'application/json'
    }} 
    ).then(function(x){
      setIsSuccess(true)
      setIsClicked(false);

        setTimeout(()=>{
navigate('/Login')
        },2000)
    })
    .catch(function(x){
       setErrorMessage(x.response.data.message);
       setIsClicked(false);
       setTimeout(()=>{
        setErrorMessage(null)
       },2000)
       
    });
  
}
  const registerFormik=  useFormik(
        {
          initialValues:{
            username:'',
            password:'',
            name:'',
            email:'',            
            repassword:'',
            phone:'',
          },
          //             
          onSubmit:registerUser,
          // validate:function(values)
          // {
          //    const errors={}
          //    const nameRegx=/^[A-Z][a-z]{3,8}$/;
          //    const phoneRegex=/^(20)?01[0125][0-9]{8}$/;
          //    if (! nameRegx.test(values.name))
          //    {
          //     errors.name="name must start with capital Name";
          //    }
          //    if (! phoneRegex.test(values.phone))
          //    {
          //     errors.phone="phone must be Egyptain nuber";
          //    }
          //    if(!(values.email.includes('@')||values.email.includes('.')))
          //    {
          //     errors.email='Invalid Email'
          //    }
          //    if(values.password.length<6||values.password.length>12)
          //    {
          //     errors.password="password must be from 6 to 12 character";
          //    }
          //    if (values.password!==values.repassword)
          //    {
          //     errors.repassword="password and rePassword doesn't match";
          //    }
            
            
          //   return errors;
          // }
          validationSchema:yup.object().shape(
            {
              username:yup.string().required("name is required").min(3,"min must be 3 characters").max(12,"min must be 3 characters"),
              name:yup.string().required("Name is required").min(3,"min must be 3 characters").max(12,"min must be 3 characters"),
              phone:yup.string().required('phone is required').matches(/^01[0125][0-9]{8}$/),
              email:yup.string().required().email('invailed value'),
              password:yup.string().min(6).max(12).required(),
              repassword:yup.string().oneOf([yup.ref('password')],"password and rePassword doesn't match"),
            }
          )
        }
    );
  return (
    <>
     <div className='p-5'>
        {isSuccess?<div className="p-4 mb-4 text-sm text-black-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-red-400" role="alert">
         Congratulation
            </div>:''}
      {errorMessage?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
         {errorMessage}
            </div>:''}   
        <h2 className='text-center'>Register Now</h2>
      <form onSubmit={registerFormik.handleSubmit} className="max-w-md mx-auto">
         <div className="relative z-0 w-full mb-5 group">
         <input  value={registerFormik.values.username}onBlur={registerFormik.handleBlur}onChange={registerFormik.handleChange} type="text" name="username" id="username" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
         <label htmlFor="username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">UserName</label>
         {registerFormik.errors.username&&registerFormik.touched.username?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
           {registerFormik.errors.username}
         </div>:''}
        </div>
       <div className="relative z-0 w-full mb-5 group">
        <input value={registerFormik.values.password} onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
       {registerFormik.errors.password&&registerFormik.touched.password?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {registerFormik.errors.password}
            </div>:''}
       </div>        
         <div className="relative z-0 w-full mb-5 group">
         <input  value={registerFormik.values.name}onBlur={registerFormik.handleBlur}onChange={registerFormik.handleChange} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
         <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
         {registerFormik.errors.name&&registerFormik.touched.name?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {registerFormik.errors.name}
         </div>:''}
        </div>        
       <div className="relative z-0 w-full mb-5 group">
        <input value={registerFormik.values.email} onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
       {registerFormik.errors.email&&registerFormik.touched.email?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
           {registerFormik.errors.email}
         </div>:''}
       </div>

    <div className="relative z-0 w-full mb-5 group">
      <input value={registerFormik.values.repassword} onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange} type="password" name="repassword" id="repassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="repassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
     {registerFormik.errors.repassword&&registerFormik.touched.repassword?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
{registerFormik.errors.repassword}
 </div>:''}
    </div>
    <div className="relative z-0 w-full mb-5 group">
      <input value={registerFormik.values.phone} onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange} type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
     {registerFormik.errors.phone&&registerFormik.touched.phone?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
{registerFormik.errors.phone}
</div>:''}
    </div>

  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
   {!isClicked? 'Submit': <ColorRing
  visible={true}
  height="40"
  width="40"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />}

   
  </button>
</form>
     </div>

    </>
  )
}
