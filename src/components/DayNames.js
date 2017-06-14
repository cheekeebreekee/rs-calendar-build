import React from 'react';

export default class DayNames extends React.Component {
    render() {
        return (
          <tr className="calendar__row calendar__day-names">
            <td className="calendar__day">Sun</td>
            <td className="calendar__day">Mon</td>
            <td className="calendar__day">Tue</td>
            <td className="calendar__day">Wed</td>
            <td className="calendar__day">Thu</td>
            <td className="calendar__day">Fri</td>
            <td className="calendar__day">Sat</td>
          </tr>
        );
    }
}
