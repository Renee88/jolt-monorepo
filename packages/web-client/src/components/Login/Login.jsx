import React from 'react'
import { useState } from 'react'
import { makeStyles, Card, CardContent } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import './Login.css'

const useStyles = makeStyles(theme => ({
  card: {
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    height: 400,
    width: 350,
    boxShadow: 'grey 0px 1px 3px 1px'
  }
}))

const Landing = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)

  const classes = useStyles()

  const emailHandler = (e) => {
    setEmail(e.target.value)
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('user', email)
    location.replace('/landing')
  }

  return (
    <div className='loginForm'>
      <Card className={classes.card}>
        <CardContent className='content'>

          <p className='title'> Please login</p>

          <div className='inputs-container'>
          <input type='text' id='email' className='input' placeholder='E-mail' value={email} onChange={emailHandler} />
          {visible ? <input id='password' type='text' className='input' placeholder='Password' value={password} onChange={passwordHandler} />
            :<input id='password'  type='password' className='input' placeholder='Password' value={password} onChange={passwordHandler} /> }
          
          { visible ? <VisibilityOffIcon id='icon' onClick={()=> setVisible(false)}/> 
          :<VisibilityIcon id='icon' onClick={()=> setVisible(true)}/>}

          </div>
          <div id='submit' onClick={handleSubmit}>Login</div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Landing
