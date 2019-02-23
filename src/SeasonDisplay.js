import React from 'react';

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        if(lat > 0){
            return 'Summer';
        } else {
            return 'Winter';
        }
    } else {
        if(lat > 0) {
            return 'Winter';
        } else {
            return 'Summer';
        }
    }
}


const seasonItems = {
    Winter: {
        text: "Burr.. It's cold..",
        iconName: "snowflake"
    },
    Summer: {
        text: "Damn it's hot outside!",
        iconName: "sun"
    }
};

class SeasonDisplay extends React.Component {
    constructor(props) {    
        super(props);
        this.state = { lat: props.lat, season: null};
    }
    componentDidMount() {
        this.setState({ season: getSeason(this.state.lat, new Date().getMonth()) });
        console.log(seasonItems[this.state.season])
    }

    render() {    
        if(!this.state.season){
            return <div>Loading..</div>
        } else {
            return (
            <div>
                <i className={`massive ${seasonItems[this.state.season].iconName} icon`} />
                <h2>{seasonItems[this.state.season].text}</h2>
                <i className={`massive ${seasonItems[this.state.season].iconName} icon`} />
            </div>
            )
        }
    
        
        
        
    }
}

export default SeasonDisplay;