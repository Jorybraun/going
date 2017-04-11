const FETCHING_MAP_LOCATION = "FETCHING_MAP_LOCATION"
const FETCHING_MAP_LOCATION_SUCCESS = "FETHCING_MAP_LOCATION_SUCCESS"
const FETCHING_MAP_LOCATION_FAILURE = "FETCHING_MAP_LOCATION_FAILURE"
const CLEAR_CURRENT_LOCATION = "CLEAR_CURRENT_LOCATION"

const SET_CURRENT_LOCATION = "SET_CURRENT_LOCATION"
// TODO:
  // ADD MARKER TO MAP
  // ADD USER MARKERS TO MAP

export const mapLoaded = (map) => ({
  type: MAP_LOADED,
  map
})

export const fetchingMapLocation = () => ({
  type: FETCHING_MAP_LOCATION,
})

export const fetchingMapLocationSucess = (locaiton, timestamp) => ({
  type: FETCHING_MAP_LOCATION_SUCCESS,
  location,
  timestamp
})

export const fetchingMapLocationFailure = () => ({
  type: FETCHING_MAP_LOCATION,
  error: 'error fetching location'
})

export const setCurrentLocation = (location) => ({
  type: SET_CURRENT_LOCATION,
  location,
})

const locationInitialState = {
  address: '',
  timestamp: '',
  location: {},
  place_id: ''
}

const location = (state = locationInitialState, action) => {
  switch (action.type) {
    case SET_CURRENT_LOCATION :
      return {
        address: action.location.formatted_address,
        location: action.location.geometry.location,
        place_id: action.location.place_id,
        timestamp: action.location.timestamp,
      }
    default :
      return state
  }
}

const initialState = {
  map: '',
  isFetching: false,
  locations: [],
  markers: [],
  currentLocation: { location: {lat: 45.501689045, lng: -73.567256073}}
}

export default function map (state = initialState, action) {
  switch (action.type) {
    // case (FETCHING_MAP_LOCATIONS) :
    //   return {
    //     ...state,
    //     isFetching: true,
    //   }
    // case (FETCHING_LOCATION_SUCCESS) :
    //   return {
    //     ...state,
    //     isFetching: false,
    //     locations: [...action.locations],
    //   }
    // case (FETCHING_MAP_LOCATION_FAILURE) :
    //   return {
    //     ...state,
    //     isFetching: false,
    //     error: action.error
    //   }
    case (SET_CURRENT_LOCATION) :
      return {
        ...state,
        currentLocation: location(state, action)
      }
    default :
      return state
  }
}