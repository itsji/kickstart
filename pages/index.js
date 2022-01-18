import React, { Component } from "react";
import factory from "../ethereum/factory";
import Layout from '../components/Layout';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: <a>View Campaign</a>
      }
    });

    return items.map(i => {
      return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Address
          </Typography>
          <Typography variant="h5" component="div">
            {i.header}
          </Typography>
        </CardContent>
        
        <CardActions>
          <Button size="small">{i.description}</Button>
        </CardActions>
      </Card>
      )
    })
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                {this.renderCampaigns()}
              </Grid>
              <Grid item xs={4}>
                <Button variant="contained" startIcon={<AddIcon />}>
                  Add Campaign
                </Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
