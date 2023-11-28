import { useState } from 'react'
import {IoCloseOutline} from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { initialReducer, userLogin } from '../redux/userSlicer'
import { errorChecker } from '../utils'
import { getUserDetails } from '../redux/userDetailSlicer'
import Loading from '../components/Loading'
const Login = () => {
  // react hooks
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // states
  const {error:errorMessage, loading} = useSelector(state => state.user)
  const [error, setError] = useState()
  const initialState = { email: '',password:''}
  const [userDetail, setUserDetail] = useState(initialState)

  // event functions
  const handleChange = (e) => {
    setUserDetail({...userDetail,[e.target.name]:e.target.value})
  } 
  const handleSubmit = (e) => {
    e.preventDefault()
    setError(errorChecker(userDetail))
    dispatch(userLogin(userDetail))
    .then((result) => {
      if(!result.error && result.payload){
        setUserDetail(initialState)
        dispatch(getUserDetails(result.payload.token))
        localStorage.setItem('user',JSON.stringify(result.payload.token))
        navigate('/')
      }
    })
  }

  return (
    <>
    {
      loading ?
      <Loading words={'Logging you in :)...'}/> :
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
        <form className='user-form' onSubmit={handleSubmit}>
          <input
            className={`user-form-input ${error?.email ? 'input-error':''}`}
            type='email'
            name='email'
            value={userDetail.email}
            onChange={handleChange}
            placeholder='E-mail address'
          />
          <input
            className={`user-form-input ${error?.password ? 'input-error':''}`}
            type='password'
            name='password'
            value={userDetail.password}
            onChange={handleChange}
            placeholder='Password'
          />
          {
            errorMessage &&   
            <div className="error-message">
             *{errorMessage.error}
            </div>
          }
          <div id="user-extra">
            <label htmlFor="remember me">
              <input type="checkbox" />
              Remember me
            </label>
            Forgot Password?
          </div>
          <button>
            Login
          </button>
        
          <div className="signup-option">
            <p>Not a member yet?</p>
            <div onClick={() => {
              navigate('/user/signup')
              dispatch(initialReducer())
              }}> Sign up</div>
          </div>
        </form>
      </div>
    </div>
    }
    </>
  )
}

export default Login