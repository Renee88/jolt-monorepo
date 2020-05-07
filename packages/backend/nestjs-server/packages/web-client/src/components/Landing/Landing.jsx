import React from 'react'
import { makeStyles, Card, Typography, CardContent } from '@material-ui/core'
import type { UserType } from '../../types'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'

const useStyles = makeStyles(theme => ({
    welcome: {
        display: 'flex',
        fontSize: 30,
        fontFamily: 'poppins',
        height: '90vh',
        justifyContent: 'center',
        alignItems: 'center'
    },
    help: {
        height: 400,
        width: 685,
        boxShadow: 'grey 0px 1px 3px 1px'
    },
    text: {
        margin: 20
    },
    paragraph: {
        margin: 20,
        fontSize: 30,
        fontFamily: 'poppins',
        padding: 0
    },
    line: {
        marginBottom: 5
    }
}))

const Landing = ({ user }: { user: UserType }) => {
    const classes = useStyles()

    return (
        <div className={classes.welcome}>
            <Card className={classes.help}>
                <Typography className={classes.text} variant="h5" component="h2">Welcome!</Typography>
                <CardContent className={classes.paragraph}>
                    <Typography className={classes.line} variant="body2" component='p'>Here is some useful information to help you navigate through the system.</Typography>
                    <Typography className={classes.line} variant="body2" component='p'>To get started you can click the menu button on the right corner, it leads to a main manu.</Typography>
                    <Typography className={classes.line} variant="body2" component='p'>As you might have guessed this is how you navigate through different sections in the Jolt curation system.</Typography>
                    <Typography className={classes.line} variant="body2" component='p'>This menu also includes a link back to this page so you can access it whenever you need.</Typography>
                    <Typography className={classes.line} variant="body2" component='p'>The users, talks and rooms sections are mostly informative and hold basic information regarding jolters, jolts and availability of rooms.</Typography>
                    <Typography className={classes.line} variant="body2" component='p'>The session request page is the fun part of this app, where all the pieces come into place.</Typography>
                    <Typography className={classes.line} variant="body2" component='p'>You can send resuests to jolters for future sessions and update their status as needed.</Typography>
                    <Typography className={classes.line} variant="body2" component='p'>Adding a request is trivial and I am sure you will get by.</Typography>
                    <Typography className={classes.line} variant="body2" component='p'>Enjoy</Typography>
                    <InsertEmoticonIcon />
                </CardContent>
            </Card>
        </div>
    )
}

export default Landing
