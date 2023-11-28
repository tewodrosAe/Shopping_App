import { useState } from 'react'
import {IoCloseOutline} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { initialReducer, userSignup } from '../redux/userSlicer'
import { errorChecker } from '../utils'
import { createUserDetails } from '../redux/userDetailSlicer'
import Loading from '../components/Loading'

const Signup = () => {
  // React hooks
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {error, loading} = useSelector(state => state.user)

  // States
  const initialState = {email:'',username:'', password:'', confirmpassword:''}
  const [userDetail,setUserDetail] = useState(initialState)
  const [errorHandler,setErrorHandler] = useState() 
  
  // Event functions
  const handleSubmit = (e) =>{
    e.preventDefault()

    setErrorHandler(errorChecker(userDetail))

    dispatch(userSignup(userDetail))
    .then(result => {
      if(!result.error && result.payload){
        const { user, token } = result.payload
        const userdetail = {user_id:user._id,username:user.username, email: user.email}
        dispatch(createUserDetails(userdetail))
        .then( res => {
          const {username,profile} = res.payload
          const details = {username,profile}
          localStorage.setItem('userdetail',JSON.stringify(details))
        })
        setUserDetail(initialState)
        localStorage.setItem('user',JSON.stringify(token))
        navigate('/')
      }
    })

  }
  const handleChange = (e) => {
    setUserDetail({...userDetail,[e.target.name]:e.target.value})
  }

  return (
    <>
    {
      loading ?
      <Loading words={'Signing you up :)...'}/>:
      <div className="user-container">
        <div className="user-form-container">
          <IoCloseOutline size={25} onClick={() => navigate('/')}/>
          <div className="logo pointer user-logo" onClick={() => navigate('/')}>
            <img src="/LOGO.png" alt="Logo" />
            <h1>TECH STOP</h1>
          </div>
          <h2>
            One Account <br/> Many possibilities
          </h2>
          <form 
            className='user-form signup-form' 
            onSubmit={handleSubmit}  
          >
            <input
              className={`user-form-input ${errorHandler?.email ? 'input-error':''}`}
              type='email'
              name='email'
              placeholder='E-mail address'
              value={userDetail.email}
              onChange={handleChange}
            />
            <input
              className={`user-form-input ${errorHandler?.username ? 'input-error':''}`}
              type='text'
              name='username'
              placeholder='Username'
              value={userDetail.username}
              onChange={handleChange}
            />
            <input
              className={`user-form-input ${errorHandler?.password ? 'input-error':''}`}
              type='password'
              name='password'
              placeholder='Password'
              value={userDetail.password}
              onChange={handleChange}
            />
            <input
              className={`user-form-input ${errorHandler?.confirmpassword ? 'input-error':''}`}
              type='password'
              name='confirmpassword'
              placeholder='Confirm Password'
              value={userDetail.confirmpassword}
              onChange={handleChange}
            />
            {
              error &&   
              <div className="error-message" style={{marginBottom:-20}}>
              *{error.error}
              </div>
            }
            <button>
              Sign up
            </button>
            
            <div className="signup-option">
              <p>Already a memeber?</p>
              <div  onClick={() => {
                navigate('/user/login')
                dispatch(initialReducer())
                }}>Login</div>
            </div>
          </form>
        </div>
      </div>
    }
    </>
  )
}

export default Signup