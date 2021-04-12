import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Pricing from './Pricing'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


// import auth0Client from '../Auth';
import './css/splash-screen.css';

// $.bigfoot();

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: 'ENVELOPES',
    subheader: 'Exterior Systems',
    price: '0',
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    img: "./img/CW_Axon.png",
    buttonText: 'View Envelopes',
    buttonVariant: 'contained',
    item: 0
  },
  {
    title: 'FLOORING',
    subheader: 'Flooring Systems',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    img: "./img/FS_Axon.png",
    buttonText: 'View Flooring',
    buttonVariant: 'contained',
    item: 1
  },
  {
    title: 'OTHER',
    subheader: 'Future Systems',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    img: "./img/MV_Axon.png",
    buttonText: 'Coming soon',
    buttonVariant: 'disabled',
    item: 2
  },
];

// const classes = useStyles();

let loading1 = true; 

function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: loading1,
        currentItem: 0
      };
    }

    async componentDidMount() {
    //   try {
    //     await auth0Client.loadSession();

    

        // setTimeout(() => {
        //   this.setState({
        //     loading: false,
        //   });
        // }, 1500)

    //   } catch (err) {
    //     console.log(err);
    //     this.setState({
    //       loading: false,
    //     });
    //   }
    }
    LoadingMessage() {
      return (
        <div className="splash-screen">
          {/* <Button href="#" color="primary" variant="outlined">
                Login
              </Button> */}
              <Container maxWidth="md" component="main">
            <Grid container spacing={5} alignItems="flex-end">
              {tiers.map((tier) => (
                // Enterprise card is full width at sm breakpoint
                <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                  <Card>
                    <CardHeader
                      title={tier.title}
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: 'center' }}
                      subheaderTypographyProps={{ align: 'center' }}
                      // action={tier.title === 'Pro' ? <StarIcon /> : null}
                      // className={classes.cardHeader}
                    />
                    <CardContent>
                      <div>
                        {/* <Typography component="h2" variant="h3" color="textPrimary">
                          ${tier.price}
                        </Typography> */}
                        <Typography variant="h6" color="textSecondary">
                          <img src={tier.img} style={{height: "250px", margin: "auto"}}></img>
                        </Typography>
                      </div>
                      {/* <ul>
                        {tier.description.map((line) => (
                          <Typography component="li" variant="subtitle1" align="center" key={line}>
                            {line}
                          </Typography>
                        ))}
                      </ul> */}
                    </CardContent>
                    <CardActions>
                      <Button fullWidth variant={tier.buttonVariant} 
                      color="secondary" 
                      onClick={() => { this.setState({loading: false, currentItem: tier.item});}}>
                        {tier.buttonText}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
          {/* <Pricing loading={loading1}></Pricing> */}
          {/* Wait a moment while we load your app. */}
          {/* <div className="loading-dot">.</div> */}
        </div>
      );
    }

    render() {

      // while checking user session, show "loading" message
      if(!loading1){
        this.setState({
          loading: false,
        });
        // this.props.loading = 1
      }
      
      if (this.state.loading) return this.LoadingMessage();

      // otherwise, show the desired route
      console.log(this.state)
      return <WrappedComponent item={this.state.currentItem} {...this.state} />;
    }

    
  };

  

}

export default withSplashScreen;