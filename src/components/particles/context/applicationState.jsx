import React, { useReducer } from "react"

import ApplicationContext from "./applicationContext"

// Create global application reducer to handle state changes
const applicationReducer = (state, action) => {
  const { key, type, value } = action
  // Create a copy of state to prevent any chance of mutating
  const stateCopy = { ...state }

  switch (type) {
    case `set`: {
      let newState = { ...stateCopy }
      newState[key] = value
      return newState
    }

    case `updateBooking`: {
      let newState = { ...stateCopy }
      newState.booking[key] = value
      return newState
    }

    default: {
      return stateCopy
    }
  }
}

// Create global state provider to handle state and reducer dispatch events
const ApplicationState = ({ children }) => {
  const [state, dispatch] = useReducer(applicationReducer, {
    booking: {
      acceptedTOS: false,
      completeTrial: false,
      id: null,
      preferedArtist: null,
      viewingArtist: null,
    },
    user: null,
    userRefetch: null,
    viewingTreatment: null,
  })

  return (
    <ApplicationContext.Provider value={{ state, dispatch }}>
      {children}
    </ApplicationContext.Provider>
  )
}

export default ApplicationState
