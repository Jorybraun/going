import auth from '../../helpers/authenticate'

const AUTH_USER = "AUTH_USER"
const UNAUTH_USER = "UNAUTH_USER"
const FETCHING_USER = "FETCHING_USER"
const FETCHING_USER_SUCCESS = "FETCHING_USER_SUCCESS"
const FETCHING_USER_FAILURE = "FETCHING_USER_FAILURE"

const authUser = (uid) => ({
  type: AUTH_USER,
  uid
})

const unauthUser = () => ({
  type: UNAUTH_USER
})

const fetchingUser = () => ({
  type: FETCHING_USER
})

const fetchingUserFailure = (error) => {
  console.warn(error)
  return {
    type: FETCHING_USER_FAILURE,
    error: 'error fetching User'
  }
}

const fetchingUserSuccess = (uid, user, timestamp) => ({
  type: FETCHING_USER_SUCCESS,
  uid,
  user,
  timestamp
})

export const fetchAndHandleAuthUser = () => {
  return (dispatch) => {
    dispatch(fetchingUser())
    auth().then((user) => {
      const {uid} = user
      dispatch(fetchingUserSuccess(uid, user, Date.now()))
      dispatch(authUser(uid))
    })
    .catch((error) => dispatch(fetchingUserFailure(error)))
  } 
}

const initialUserState = {
  lastUpdated: 0,
  info: {
    name: '',
    uid: '',
    avatar: '',
  },
}

function user (state = initialUserState, action) {
  switch (action.type) {
    case FETCHING_USER_SUCCESS :
      return {
        ...state,
        info: action.user,
        lastUpdated: action.timestamp,
      }
    default :
      return state
  }
}

const initialState = {
  isFetching: false,
  error: '',
  isAuthed: false,
  authedId: '',
}

export default function users (state = initialState, action) {
  switch (action.type) {
    case AUTH_USER :
      return {
        ...state,
        isAuthed: true,
        authedId: action.uid,
      }
    case UNAUTH_USER :
      return {
        ...state,
        isAuthed: false,
        authedId: '',
      }
    case FETCHING_USER :
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_USER_FAILURE :
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_USER_SUCCESS :
      return action.user === null
        ? {
          ...state,
          isFetching: false,
          error: '',
        }
        : {
          ...state,
          isFetching: false,
          error: '',
          [action.uid]: user(state[action.uid], action),
        }
    default :
      return state
  }
}