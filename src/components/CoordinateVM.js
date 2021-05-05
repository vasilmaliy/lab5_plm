import React from 'react'
import Direction from '../direction'
import { StyleSheet, Text, View} from 'react-native';

class CoordinateVM extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            curerentDir: Direction.LATITUTE,
            degree: 0,
            minute: 0,
            second: 0
        }
        this.initialization.bind(this)
        this.getMiddleCoordinateCurent.bind(this) 


        if ( props.deg && props.min && props.sec && props.dir ) {
            this.initialization()
        }
    }
    
    initialization () {
        const {deg, min, sec, dir} = this.props

        if ( dir == Direction.LATITUTE) {
            if (deg >= -90 && deg <= 90) {
                this.state.degree = deg;
                
                if (deg >= 0)
                    this.state.worldLetter = 'N'
                else 
                    this.state.worldLetter = 'S'
            }
            else {
                throw 'Incompatible degree'
            }
        } else {
            if ( deg >= -180 &&  deg <= 180) {
                this.state.degree = deg;
                if (deg >= 0)
                    this.state.worldLetter = 'E'
                else
                    this.state.worldLetter = 'W'
            }
            else {
                throw 'Incompatibe degree'
            }
        }

        if (min >= 0 && min <= 59) {
            this.state.minute = min
        }
        else {
            throw 'Incompatibe minute'
        }

        if (sec >= 0 && sec <= 59) {
            this.state.second = sec
        }
        else {
            throw 'Incompatibe second'
        }
    }

    getIntCoordinate() {
        return `${this.state.degree}°${this.state.minute}'${this.state.second}" ${this.state.worldLetter}`
    }

    getFloatSigned() {
        return (Math.abs(this.state.degree) +  parseFloat(this.state.minute)/60 + parseFloat(this.state.second/3600)*(this.state.degree >= 0 ? 1: -1))
    }

    getFloatCoordinate() {
        return `${this.getFloatSigned()}° ${this.state.worldLetter}`
    }

    getMiddleCoordinate( first, second ) {
        if (first.getCurrentDir() == blur.getCurrentDir() ) {
            let mid = parseFloat((first.getFloatSigned() + second.getFloatSigned()) / 2);
            let degree = parseInt(mid);
            mid -= degree;
            mid *= 60;
            let min = parseInt(mid);
            mid -= min;
            mid *= 60;
            return <CoordinateVM deg={degree} min={min} dir={first.getCurrentDir()} sec={mid} />;
        }
    }

    getMiddleCoordinateCurent( nil ) {
        return getMiddleCoordinate(this, nil)
    }

    getDegree() {
        return this.state.degree
    }

    getCurrentDir() {
        return this.state.curerentDir
    }

    getMinute() {
        return this.state.minute
    }

    getSecond() {
        return this.state.second
    }


    render() {
        return(
        <Text>
            {}
        </Text>
        );
    }
}

export default CoordinateVM

{/* <CoordinateVM dir='latitute' deg={45} min={36} sec={25}/> */}