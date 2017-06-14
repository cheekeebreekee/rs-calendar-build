import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import mapStateToProps from './../selectors';
import Timeline from './Timeline';

class Day extends React.Component {
    toggleTimeline() {
        const timeline = document.querySelector('.timeline');
        timeline.classList.toggle('active');
    }

    render() {
        const {
            day,
            day: {
                date,
                isCurrentMonth,
                isToday,
                number
            },
            selected
        } = this.props;

        const formattedDate = date.format().substr(0,10).toString();

        const haveEvent = this.props.events.filter((event, i) => {
            return event['start'].substr(0,10) === formattedDate
        });

        const eventType = haveEvent.length ? " " + haveEvent[0]['type'] : "";
        return (
            <td
            key={date.toString()}
            className={"calendar__day" + (isToday ? " today" : "") + eventType + (isCurrentMonth ? "" : " different-month") + (date.isSame(selected) ? " selected" : "")}
            onClick={() => { this.props.selectCurrentEvents(formattedDate); this.props.select(day); this.toggleTimeline()} }>{number}</td>
        );
    }
}

function mapActionsToProps(dispatch) {
    return {
        selectCurrentEvents(day) {
            dispatch({type: 'FIND_EVENTS', payload: day});
        }
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Day);
