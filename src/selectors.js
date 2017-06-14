function mapStateToProps(state) {
    return {
        events: state.events,
        currentDate: state.selectedDate,
        speakers: state.speakers
    }
}

export default mapStateToProps;
