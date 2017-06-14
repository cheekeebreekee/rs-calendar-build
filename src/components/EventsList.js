import React from 'react';
import { connect } from 'react-redux';
import { Badge } from 'react-lightning-design-system';
import { Link } from 'react-router-dom';
import mapStateToProps from './../selectors';

class EventsList extends React.Component {

    render() {
        const events = this.props.events.map((event, i) => {
            if (this.props.currentDate) {
                if (event['start'].substr(0, 10) === this.props.currentDate) {
                    return (
                        <li className="event-item" key={event['id']}>{
                            <div>
                                <h4 className="event-item__title">Title: {event['title']}</h4>
                                <div>
                                    <Badge className="event-item__type slds-badge">{event['type']}</Badge>
                                </div>
                                <p className="event-item__begin">Start: {`${event['start'].substr(0, 10)} at ${event['start'].substr(11, 5)}`}</p>
                                <Link className="event-item__btn" to={"/events/" + event['id']}>More info</Link>

                            </div>
                            }
                        </li>
                    )
                }
            }
        })
        return (
            <ul className="event-list">
            {
                events.some((event) => event) ? events : <p className="event-list__empty">There is now events on this day :(</p>
            }
            </ul>
        )
    }
}

export default connect(mapStateToProps)(EventsList);
