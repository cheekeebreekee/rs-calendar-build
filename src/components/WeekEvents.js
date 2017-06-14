import React from 'react';
import mapStateToProps from './../selectors';
import Header from './Header';
import { connect } from 'react-redux';
import { Badge, PageHeader, PageHeaderHeading, Tabs, Tab } from 'react-lightning-design-system';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class WeekEvents extends React.Component {

    process(date) {
        return new Date(date);
    }

    render() {
          const GettingStartedGoogleMap = withGoogleMap(props => (
              <GoogleMap defaultZoom={15} defaultCenter={{ lat: 53.928751, lng: 27.685434 }}>
                 <Marker lat={27.685402} lng={53.928587} />
              </GoogleMap>
          ));

          const today = this.process(moment().format('L'));
          const weekAfter = this.process(moment().add(7, 'days').format('L'));
          const weekEvents = this.props.events.filter((event, i) => {
              console.log(event['start'].substr(0, 10));
              return this.process(event['start'].substr(0, 10)).getTime() >= today.getTime() && this.process(event['start'].substr(0, 10)).getTime() <= weekAfter.getTime();
          });
          const eventInfo = weekEvents.map((event, i) => {
              const eventStart = `Start: ${event['start'].substr(0, 10)} at ${event['start'].substr(11, 5)}`;
              return (
                  <div className="event-info" key={event['id']}>
                  {
                      <div>
                        <PageHeader>
                            <PageHeaderHeading title={event['title']} info={eventStart} figure={<Badge className="event-item__type slds-badge">{event['type']}</Badge>} />
                        </PageHeader>

                          <div className="event-info-wrapper">
                            <p className="event-info__description">Description: {event['description']}</p>
                            <p className="event-info__location">Location: {event['location']}</p>
                            <GettingStartedGoogleMap
                              className="event-info__map"
                              containerElement={
                                <div className="map-wrapper"  />
                              }
                              mapElement={
                                <div id="map-canvas" />
                              }

                            />
                          </div>
                          <section className="resource-wrapper">
                            <p className="resource-title">Resoruces: </p>
                              <Tabs type="default">
                                  {event['resources'].map((resource, i) => {
                                      return (
                                          <Tab key={i} eventKey={i} title={"Resourse #" + (i+1)}>
                                              <h3>{resource['description']}</h3>
                                              <p>Resource - <a href={resource['resource']} target="_blank">Resourse link</a></p>
                                              <span>Type: {resource['type']}</span>
                                          </Tab>
                                      )
                                  })}
                              </Tabs>
                          </section>
                          <p className="speaker-heading">Speakers:</p>
                          <div className="speakers-wrapper">
                              {event['speakers'].map((speaker, i) => {
                                  return this.props.speakers.map((item, i) => {
                                      if (speaker === item['id']) {
                                          return (
                                              <div className="speaker-item">
                                                  <img src={item['avatar']} />
                                                  <h3>{item['name']}</h3>
                                              </div>
                                          )
                                      }
                                  })
                              })}
                          </div>
                          <div className="submit-wrapper">
                            <Link className="event-item__btn feedback-btn" to={"/feedback/" + event['title']}>Leave Feedback</Link>
                          </div>
                      </div>
                      }
                  </div>
              )
          })
          if (!weekEvents) {
            return <div> Sorry, but the event was not found </div>
          }
          return (
            <div>
                <Header />
                {eventInfo}
            </div>
        )
    }
}

export default connect(mapStateToProps)(WeekEvents);
