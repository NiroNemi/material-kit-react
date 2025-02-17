import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard </title>
      </Helmet>

      <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: .3 }}>
          Hi, Welcome back
        </Typography>
        <Typography variant="body1" sx={{ mb: 5 }}>
          Please upload your video, Results will update within few hours
        </Typography>
        
      

        <Grid container spacing={3}>
          {/* <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Stundent Count" total={6} icon={'ant-design:user-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Highly Engaged Students" total={4} color="info" icon={'ant-design:thunderbolt-filled'} />
          </Grid> */}

          {/* <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Normally Engaged Students" total={1} color="warning" icon={'ant-design:minus-circle-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Disengaged Students" total={1} color="error" icon={'ant-design:dislike-filled'} />
          </Grid> */}

          <Grid item xs={12} md={6} lg={9}>
            <AppWebsiteVisits
              title="Engagement by part"
              subheader="During 40 minutes"
              chartLabels={[
                '0',
                '5',
                '10',
                '15',
                '20',
                '25',
                '30',
                '35',
                '40',
                // '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Face',
                  type: 'line',
                  fill: 'solid',
                  // color:'red',
                  data: [.37,.44,.23, .22, .27, .22,.13, .21,.11 ],
                },
                {
                  name: 'Eye',
                  type: 'area',
                  fill: 'gradient',
                  data: [.44, .55, .41, .67, .22, .43, .21, .41, .56],
                },
                {
                  name: 'Body pose',
                  type: 'area',
                  fill: 'gradient',
                  data: [.30, .25, .36, .30, .45, .35, .64, .52, .59],
                },
              ]}
              chartColors={[
                theme.palette.warning.main,
                // theme.palette.primary.main,
                // theme.palette.info.main,
                // theme.palette.error.main,
              ]}
            />
          
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <AppTrafficBySite
              title="Insights"
              list={[
                
                
                {
                  name: 'Overall Score',
                  value: 8.35,
                  icon: <Iconify icon={'ant-design:thunderbolt-filled'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Total Student Count',
                  value: 5,
                  icon: <Iconify icon={'ant-design:user-outlined'} color="#DF3E30" width={32} />,
                },
             
              ]}
            />
          </Grid>  
          {/* <Grid item xs={12} sm={3} md={3}>
            <AppWidgetSummary title="Total Stundent Count" total={6} icon={'ant-design:user-outlined'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Stundent Count" total={6} icon={'ant-design:user-outlined'} />
          </Grid> */}
          

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Engagement levels"
              chartData={[
                { label: 'Highly Engaged', value: 3344 },
                { label: 'Normal', value: 2443 },
                { label: 'Disengaged', value: 4443 },
                // { label: 'Facial ', value: 5435 },
              ]}
              chartColors={[
                theme.palette.warning.main,
                // theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.error.main,
              ]}
            />
          </Grid> */}
          

          <Grid item xs={12} md={6} lg={9}>
            <AppWebsiteVisits
              title="Overall score"
              subheader="During 40 minutes"
              chartLabels={[
                '0',
                '5',
                '10',
                '15',
                '20',
                '25',
                '30',
                '35',
                '40',
                // '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Face',
                  type: 'area',
                  fill: 'gradient',
                  // color:'red',
                  data: [.44, .55, .48, .67, .40, .50, .30, .41, .35],
                },
           
              ]}
              chartColors={[
                theme.palette.warning.main,
                // theme.palette.primary.main,
                // theme.palette.info.main,
                // theme.palette.error.main,
              ]}
            />
          </Grid>
       

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Google',
                  value: 341212,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
}
