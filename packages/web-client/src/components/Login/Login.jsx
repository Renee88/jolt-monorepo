import React from 'react'
import { useState } from 'react'
import { makeStyles, Card, CardContent } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh'
  },
  input: {
    display: 'flex',
    margin: 'auto',
    padding: 5,
    fontSize: 18,
    borderRadius: 5,
    fontFamily: 'poppins'
  },
  submit: {
    display: 'flex',
    margin: 'auto',
    height: 30,
    width: 100,
    justifyContent: 'center',
    fontFamily: 'poppins',
    borderRadius: 5,
    boxShadow: '#222222 1px 1px 1px'
  },
  title: {
    fontSize: 30,
    fontFamily: 'poppins',
    textAlign: 'center'
  },
  card: {
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    height: '40vh',
    width: '40vw',
    boxShadow: 'grey 0px 1px 3px 1px'
  }
}))

const Landing = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
    <div className={classes.loginForm}>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <p className={classes.title}> Please login</p>
          <input type="text" className={classes.input} placeholder='E-mail' value={email} onChange={emailHandler} />
          <br />
          <input type='text' className={classes.input} placeholder='Password' value={password} onChange={passwordHandler} />
          <br />
          <div className={classes.submit} onClick={handleSubmit}>Login</div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Landing
