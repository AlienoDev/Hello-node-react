import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        // display: 'flex',
        // alignItems: 'center',
    },
    wrapper: {
        margin: theme.spacing.unit,
        position: 'relative',
    }
});

class CircularIntegration extends React.Component {
    constructor(props) {
        super(props)

        // initial state
        this.state = {
            classOn: true,
            classOff: false
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <div className="tc-pattern" onClick={() => {
                        if (this.state.classOn === true)
                            this.setState({ classOff: true, classOn: false })
                        else
                            this.setState({ classOn: true, classOff: false })
                    }}>
                        <div className="a-button-wave">
                            <div className="a-button-wave__icon" >
                                <p>{this.state.classOn ? 'ON' : 'OFF'}</p>
                            </div>
                            <div className={`a-button-wave__circle ${this.state.classOff ? 'Off a-button-wave__circle--size-sOff' : 'a-button-wave__circle--size-s'}`}></div>
                            <div className={`a-button-wave__circle ${this.state.classOff ? 'Off a-button-wave__circle--size-mOff' : 'a-button-wave__circle--size-m'}`}></div>
                            <div className={`a-button-wave__circle ${this.state.classOff ? 'Off a-button-wave__circle--size-lOff' : 'a-button-wave__circle--size-s'}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CircularIntegration.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIntegration);