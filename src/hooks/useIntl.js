import * as React from "react"

const IntlContext = React.createContext()

function intlReducer(state, action) {
  switch (action.type) {
    case "setEN": {
      return "en"
    }

    case "setDE": {
      return "de"
    }

    case "setAL": {
      return "al"
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function IntlProvider({ children }) {
  const [state, dispatch] = React.useReducer(intlReducer, "de")

  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch }

  return <IntlContext.Provider value={value}>{children}</IntlContext.Provider>
}

function useIntl() {
  const context = React.useContext(IntlContext)

  if (context === undefined) {
    throw new Error("useIntl must be used within a IntlProvider")
  }

  return context
}

export { IntlProvider, useIntl }
