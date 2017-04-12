import { getAddress } from '../../helpers/map'
const MAP_LOADED = "MAP_LOADED"
const UNLOAD_MAP = "UNLOAD_MAP"
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
  mapReference: map
})

export const unloadMap = () => ({
  type: UNLOAD_MAP
})

export const fetchingMapLocation = () => ({
  type: FETCHING_MAP_LOCATION,
})

export const fetchingMapLocationSucess = (searchResults, timestamp) => ({
  type: FETCHING_MAP_LOCATION_SUCCESS,
  searchResults,
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

export const clearCurrentLocation = () => ({
  type: CLEAR_CURRENT_LOCATION
})

export const getAndSetCurrentLocation = (location) => (
  (dispatch) => {
    fetchingMapLocation()
    getAddress(location).then((response) => {
      const { results } = response.data

      if(results.length === 1){
        dispatch(setCurrentLocation(results[0]))
      }
      dispatch(fetchingMapLocationSucess(results, Date.now()))
    }).catch((error) => {
      dispatch(fetchingMapLocationFailure())
    })
  }
)

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
  currentLocation: { address: '', location: {lat: '', lng: ''}}
}

export default function map (state = initialState, action) {
  switch (action.type) {
    case (MAP_LOADED) :
      return {
        ...state,
        mapLoaded: true,
        mapReference: action.mapReference
      }
    case (UNLOAD_MAP) :
      return {
        ...state,
        mapLoaded: true,
        mapReference: action.mapReference
      }
    case (FETCHING_MAP_LOCATION) :
      return {
        ...state,
        isFetching: true,
      }
    case (FETCHING_MAP_LOCATION_SUCCESS) :
      return {
        ...state,
        isFetching: false,
        searchResults: [...action.locations],
      }
    case (FETCHING_MAP_LOCATION_FAILURE) :
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case (SET_CURRENT_LOCATION) :
      return {
        ...state,
        currentLocation: location(state, action)
      }
    case (CLEAR_CURRENT_LOCATION) :
      return {
        ...state,
        currentLocation: location(initialState, action)
      }
    default :
      return state
  }
}