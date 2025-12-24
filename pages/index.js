import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Button,
  Stack,
  Grid,
  Card,
  CardContent,
  CardActions,
  TextField,
  Chip,
  Alert,
  Paper,
  Switch,
  Checkbox,
  Slider,
  Divider,
  Avatar,
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Breadcrumbs,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar,
  LinearProgress,
  CircularProgress,
  Rating,
  Autocomplete,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Stepper,
  Step,
  StepLabel,
  IconButton
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "../contexts/ThemeContext";

const chips = ["MUI", "Next.js 15", "React 19", "Emotion", "Design System"];
const milestones = ["Brief", "Design", "Build", "Launch"];
const deployments = [
  { env: "Production", status: "Healthy", region: "US East", latency: "120ms" },
  { env: "Staging", status: "Warning", region: "EU West", latency: "260ms" },
  { env: "Preview", status: "Healthy", region: "AP South", latency: "190ms" }
];

export default function Home() {
  const [tab, setTab] = React.useState(0);
  const [plan, setPlan] = React.useState("team");
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const { mode, toggleTheme } = useTheme();

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ gap: 2 }}>
          <Avatar sx={{ bgcolor: "primary.main" }}>M</Avatar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MUI Demo Hub
          </Typography>
          <IconButton onClick={toggleTheme} color="inherit" sx={{ mr: 1 }}>
            {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <Button variant="outlined" onClick={() => setDrawerOpen(true)}>
            Menu
          </Button>
          <Button variant="text">Docs</Button>
          <Button>Get Started</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid
            size={{
              xs: 12,
              md: 7
            }}>
            <Stack spacing={2}>
              <Typography variant="overline" color="text.secondary">
                Design Systems
              </Typography>
              <Typography variant="h3" component="h1">
                Ship a polished UI fast with Material UI
              </Typography>
              <Typography color="text.secondary">
                This starter mixes Next.js 15 and MUI 7 with a clean Pages Router
                setup. Explore common components and layout patterns.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button size="large">Launch Demo</Button>
                <Button size="large" variant="outlined">
                  View Components
                </Button>
              </Stack>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {chips.map((label) => (
                  <Chip key={label} label={label} color="primary" variant="outlined" />
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 5
            }}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Weekly Update
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  All systems operational. Your build pipeline is healthy.
                </Typography>
                <Alert severity="success" sx={{ mb: 2 }}>
                  Deployments are running 12% faster this week.
                </Alert>
                <Stack spacing={2}>
                  <TextField label="Project Name" defaultValue="MUI Starter" />
                  <TextField label="Team" defaultValue="Design Ops" />
                </Stack>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button size="small" variant="outlined">
                  Review
                </Button>
                <Button size="small">Confirm</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6 }} />

        <Grid container spacing={3}>
          <Grid
            size={{
              xs: 12,
              md: 4
            }}>
            <Paper sx={{ p: 3 }} elevation={0}>
              <Typography variant="h6" gutterBottom>
                Settings
              </Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Switch defaultChecked />
                  <Typography>Enable alerts</Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Checkbox defaultChecked />
                  <Typography>Auto-updates</Typography>
                </Stack>
                <Box>
                  <Typography gutterBottom>Delivery speed</Typography>
                  <Slider defaultValue={40} />
                </Box>
              </Stack>
            </Paper>
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 4
            }}>
            <Paper sx={{ p: 3 }} elevation={0}>
              <Typography variant="h6" gutterBottom>
                Activity
              </Typography>
              <Stack spacing={2}>
                <Alert severity="info">New release candidate is ready.</Alert>
                <Alert severity="warning">Two tasks need review.</Alert>
                <Alert severity="error">One integration failed.</Alert>
              </Stack>
            </Paper>
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 4
            }}>
            <Paper sx={{ p: 3 }} elevation={0}>
              <Typography variant="h6" gutterBottom>
                Actions
              </Typography>
              <Stack spacing={2}>
                <Button fullWidth>Create environment</Button>
                <Button fullWidth variant="outlined">
                  Invite teammate
                </Button>
                <Button fullWidth variant="text">
                  View reports
                </Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6 }} />

        <Grid container spacing={3}>
          <Grid
            size={{
              xs: 12,
              md: 6
            }}>
            <Paper sx={{ p: 3 }} elevation={0}>
              <Typography variant="h6" gutterBottom>
                Tabs
              </Typography>
              <Tabs
                value={tab}
                onChange={(_, value) => setTab(value)}
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab label="Overview" />
                <Tab label="Usage" />
                <Tab label="Events" />
                <Tab label="Access" />
              </Tabs>
              <Box sx={{ mt: 2 }}>
                <Typography color="text.secondary">
                  {tab === 0 &&
                    "Quick snapshot of your product metrics and system health."}
                  {tab === 1 && "Usage trends by region and feature adoption."}
                  {tab === 2 && "Live activity feed with alerts and insights."}
                  {tab === 3 && "Permissioned access and audit history."}
                </Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 6
            }}>
            <Paper sx={{ p: 3 }} elevation={0}>
              <Typography variant="h6" gutterBottom>
                Selects
              </Typography>
              <Stack spacing={3}>
                <FormControl fullWidth>
                  <InputLabel id="plan-label">Plan</InputLabel>
                  <Select
                    labelId="plan-label"
                    value={plan}
                    label="Plan"
                    onChange={(event) => setPlan(event.target.value)}
                  >
                    <MenuItem value="starter">Starter</MenuItem>
                    <MenuItem value="team">Team</MenuItem>
                    <MenuItem value="enterprise">Enterprise</MenuItem>
                  </Select>
                </FormControl>
                <TextField select fullWidth label="Region" defaultValue="us-east">
                  <MenuItem value="us-east">US East</MenuItem>
                  <MenuItem value="eu-west">EU West</MenuItem>
                  <MenuItem value="ap-south">AP South</MenuItem>
                </TextField>
              </Stack>
            </Paper>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6 }} />

        <Grid container spacing={3}>
          <Grid
            size={{
              xs: 12,
              md: 6
            }}>
            <Paper sx={{ p: 3 }} elevation={0}>
              <Typography variant="h6" gutterBottom>
                Feedback
              </Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={2}>
                  <Button onClick={() => setDialogOpen(true)}>
                    Open dialog
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => setSnackbarOpen(true)}
                  >
                    Show toast
                  </Button>
                </Stack>
                <Box>
                  <Typography gutterBottom>Progress</Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <LinearProgress sx={{ flex: 1 }} />
                    <CircularProgress size={28} />
                  </Stack>
                </Box>
              </Stack>
            </Paper>
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 6
            }}>
            <Paper sx={{ p: 3 }} elevation={0}>
              <Typography variant="h6" gutterBottom>
                Navigation & Inputs
              </Typography>
              <Stack spacing={3}>
                <Breadcrumbs>
                  <Link underline="hover" color="inherit">
                    Home
                  </Link>
                  <Link underline="hover" color="inherit">
                    Library
                  </Link>
                  <Typography color="text.primary">Data</Typography>
                </Breadcrumbs>
                <Autocomplete
                  options={["Design", "Engineering", "Product", "Marketing"]}
                  renderInput={(params) => (
                    <TextField {...params} label="Team" />
                  )}
                />
                <Box>
                  <Typography gutterBottom>Rating</Typography>
                  <Rating defaultValue={4} />
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6 }} />

        <Grid container spacing={3}>
          <Grid
            size={{
              xs: 12,
              md: 5
            }}>
            <Paper sx={{ p: 3 }} elevation={0}>
              <Typography variant="h6" gutterBottom>
                Project Stepper
              </Typography>
              <Stepper activeStep={1} orientation="vertical">
                {milestones.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Paper>
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 7
            }}>
            <Paper sx={{ p: 3 }} elevation={0}>
              <Typography variant="h6" gutterBottom>
                Deployments Table
              </Typography>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Environment</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Region</TableCell>
                      <TableCell>Latency</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {deployments.map((row) => (
                      <TableRow key={row.env}>
                        <TableCell>{row.env}</TableCell>
                        <TableCell>{row.status}</TableCell>
                        <TableCell>{row.region}</TableCell>
                        <TableCell>{row.latency}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 280, p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItem button component="a" href="/">
                <ListItemText primary="Home" />
              </ListItem>
            </ListItem>
            <ListItem disablePadding>
              <ListItem button component="a" href="/shadcn">
                <ListItemText primary="Shadcn" />
              </ListItem>
            </ListItem>
          </List>
          <List>
            {["Dashboard", "Releases", "Teams", "Billing"].map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
          <Button fullWidth variant="outlined" onClick={() => setDrawerOpen(false)}>
            Close
          </Button>
        </Box>
      </Drawer>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Confirm changes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Apply the new configuration to your environment?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button variant="text" onClick={() => setDialogOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setDialogOpen(false)}>Confirm</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Deployment queued successfully.
        </Alert>
      </Snackbar>
    </Box>
  );
}

