function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action)
    let returnValue = next(action)
    return returnValue
  }
}

export default logger;
