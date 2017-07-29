import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

export default function HeaderBar() {
  return (
    <Grid>
      <Grid.Column width={3}>
        <Header size="huge">M_M</Header>
      </Grid.Column>
      <Grid.Column width={13}>M_M</Grid.Column>
    </Grid>
  )
}
