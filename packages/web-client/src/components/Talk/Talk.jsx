import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardActionArea , Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import type { TalkProps } from '../types'

const useStyles = makeStyles(theme => ({
  talk: {
    width: '15vw',
    margin: 10,
    backgroundColor: '#F4F4F8'
  }
}))

const Talk = ({talk}: TalkProps) => {
  const classes = useStyles()
  
  return (
    <Link to={`/talks/${talk.id}`}>
      <Card className={classes.talk}>
        <CardActionArea>
          <CardContent>
            <Typography>
              {talk.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}

export default Talk