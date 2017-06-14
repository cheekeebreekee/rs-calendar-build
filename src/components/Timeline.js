import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'react-lightning-design-system';
import { Button } from 'react-lightning-design-system';
import mapStateToProps from './../selectors';
import EventsList from './EventsList';
import moment from 'moment';

class Timeline extends React.Component {
    closeTimeline() {
        const timeline = document.querySelector('.timeline');
        timeline.classList.toggle('active');
    }
    render() {
        const { events } = this.props;

        let EventsComponent;

        if (events.length === 0) {
            EventsComponent = <div className="event-component">
                <Spinner type="brand" size="medium" />
            </div>
        } else {
            EventsComponent = <EventsList events={events}/>
        }
        const calendarDate = moment(this.props.currentDate).format('LLLL');
        const calendarDay = moment(this.props.currentDate).format('LLLL');
        console.log(events.selectedDate);
        return (
            <div ref="timeline" className="timeline">
                <div className="timeline-wrapper">
                    <h3 className="timeline__date">{calendarDate.toString().split(',')[1].replace(' ','')}</h3>
                    <h3 className="timeline__day">{calendarDay.toString().split(',')[0].replace(' ','')}</h3>
                    <Button className="timeline__close slds-btn" onClick={() => this.closeTimeline()}>Close</Button>
                </div>
                {EventsComponent}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Timeline);
