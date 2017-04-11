{
  users: {
    isAuthed,
    isFetching,
    error,
    authedId, // probably not necesary
    lastUpdated,
    info: {
      name,
      uid,
      avatar
    }
  },

  search: {
    term,
    isFetching,
    response,
    error
  },

  map: {
    markers
    coordinates
  }

  currentLocation: {
    location: {}
  }


  userLocations: {
    isFetching,
    lastUpdated,
    [locationId]: {
      type,
      address,
      status,
      timestamp
    }
  }
}