import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import CircularIntegration from './button'
import Icon from '@material-ui/core/Icon'
import PaperSheet from './paper'
import Timeline from './timeline'
import TextField from '@material-ui/core/TextField';


class App extends Component {
  constructor(props) {
    super(props)

    // initial state
    this.state = {
      open: false,
      text: 'on',
      history: false,
      isAuth: false
    }
  }
  animateBottom = () => {
    let footer = document.getElementById('footer')
    let header = document.getElementById('App-in')
    let icons = document.getElementsByClassName('speButton')
    let text = document.getElementById('text')
    if (footer.style.height === '90%') {
      this.setState({ open: false })
      footer.style.height = '5%'
      if (this.state.isAuth) {
        icons[2].style.bottom = '1%'
        icons[2].style.opacity = 1;
        icons[1].style.bottom = '1%'
        header.style.height = '10%'
      }
      icons[0].style.opacity = 1;
      icons[0].style.bottom = '1%'
      text.style.opacity = 0
    }
  }
  animateTop = () => {
    let footer = document.getElementById('footer')
    let header = document.getElementById('App-in')
    let text = document.getElementById('text')
    let icons = document.getElementsByClassName('speButton')
    if (footer.style.height === '5%' || footer.style.height === '') {
      footer.style.height = '90%'
      if (this.state.isAuth) {
        icons[2].style.bottom = '85%'
        icons[1].style.bottom = '85%'
        header.style.height = '100%'
        icons[2].style.opacity = 0
        icons[0].style.opacity = 0
        icons[1].style.opacity = 1
      } else {
        icons[0].style.opacity = 1
      }
      icons[0].style.bottom = '85%'
      text.style.opacity = 1
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.isAuth ?
          <Grid container spacing={24} className="App-in" id="App-in">
            <Grid item xs sm>
              <Button variant="outlined" onClick={() => {
                this.animateBottom()
                if (this.state.history) {
                  this.setState({ history: false })
                }
              }}>
                Centrale
            </Button>
            </Grid>
            <Grid item xs sm>
              <Button variant="outlined" onClick={() => {
                this.animateBottom()
                this.setState({ history: true })
              }}>
                Historiques
            </Button>
            </Grid>
          </Grid> : false}
        <Grid container spacing={24} className="App-intro">
          <Grid item xs={12} sm={12}>
            {this.state.history && this.state.isAuth ?
              <Timeline />
              : this.state.isAuth ? <CircularIntegration /> :
              <div>
                <div >
                  <svg 
                      class="ha-logo loading" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 10 10">
                      <path
                        class="house" 
                        d="M1.9 8.5V5.3h-1l4-4.3 2.2 
                          2.1v-.6h1v1.7l1 1.1H7.9v3.2z"   /> 
                      <path 
                        class="circut"
                        d="M5 8.5V4m0 3.5l1.6-1.6V4.3M5 
                          6.3L3.5 4.9v-.6m2.7.7l.4.4L7 
                          5M5.9 6.1v.5h.5M4.2 5v.5h-.8m1 
                          1.5v.6h-.6m1.2.8L3.6 6.7M5 
                          8.4l1-.9h.7M4.6 3.6L5 4l.4-.4" />
                      <g>
                        <circle cx="5.5" cy="3.4" r="0.21" />
                        <circle cx="4.5" cy="3.4" r="0.21" />
                        <circle cx="6.6" cy="4.1" r="0.21" />
                        <circle cx="3.5" cy="4.1" r="0.21" />
                        <circle cx="4.2" cy="4.8" r="0.21" />
                        <circle cx="6.1" cy="4.8" r="0.21" />
                        <circle cx="7.1" cy="4.8" r="0.21" />
                        <circle cx="6.6" cy="6.6" r="0.21" />
                        <circle cx="5.9" cy="5.9" r="0.21" />
                        <circle cx="3.2" cy="5.5" r="0.21" />
                        <circle cx="3.5" cy="6.5" r="0.21" />
                        <circle cx="4.4" cy="6.8" r="0.21" />
                        <circle cx="3.6" cy="7.6" r="0.21" />
                        <circle cx="6.9" cy="7.5" r="0.21" />
                      </g>
                    </svg>
                  <Grid container spacing={8} alignItems="flex-end">
                      <Grid item xs={12}>
                          <TextField id="input-with-icon-grid" label="Username" />
                      </Grid>
                      <Grid item xs={12}>
                          <TextField id="input-with-icon-grid" label="password" />
                      </Grid>
                      <Button variant="extendedFab" style={{marginRight: 'auto', marginLeft: 'auto', marginTop: '10%', boxShadow: 'none !important', backgroundColor: '#038fc7'}}
                      onClick={()=>this.setState({isAuth: true})}>Valider</Button>
                  </Grid>
              </div>
          </div>}
          </Grid>
          <Grid item xs={3} sm>
            {this.state.isAuth ?
              <Button variant="fab" on aria-label="settings" className='speButton' onClick={() => {
                this.setState({ open: true, menu: 'Parametre' })
                this.animateTop()
              }}>
                <Icon>settings</Icon>
              </Button> : false}
          </Grid>
          <Grid item xs={4} sm>
            <Button variant="fab" aria-label="view_list" className='speButton' onClick={() => {
              let footer = document.getElementById('footer')
              if (footer.style.height === '90%') {
                this.setState({ open: false, menu: this.state.isAuth ? 'Devices' : 'Informations' })
                this.animateBottom()
              } else {
                this.setState({ open: true, menu: this.state.isAuth ? 'Devices' : 'Informations' })
                this.animateTop()
              }
            }}>
              <Icon>{this.state.open ? 'close' : this.state.isAuth ? 'view_list' : 'info'}</Icon>
            </Button>
          </Grid>
          <Grid item xs={3} sm>
            {this.state.isAuth ?
              <Button variant="fab" aria-label="account_circle" className='speButton' onClick={() => {
                this.setState({ open: true, menu: 'Profile' })
                this.animateTop()
              }}>
                <Icon>account_circle</Icon>
              </Button> : false}
          </Grid>
        </Grid>

        <div className="footer" id="footer" >
          <h3 id="text" style={{ opacity: 0, marginTop: '10%', color: 'white' }}>{this.state.menu}</h3>
          <PaperSheet />
          <PaperSheet />
          <PaperSheet />
        </div>
      </div>
    );
  }
}

export default App;
