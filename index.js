import React, { Component } from 'react'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { connect, Provider } from 'react-redux'
import { render } from 'react-dom'
import { createActions, combineActions, handleAction, handleActions } from 'redux-actions'
import { createLogger } from 'redux-logger'

let logger = createLogger()
const { increment, decrement, nothing } = createActions({
    INCREMENT: amount => ({ amount }),
    DECREMENT: amount => ({ amount: -amount })
})

const reducer = handleActions({
    [combineActions(increment, decrement)](state, { payload: { amount } }) {
        return { ...state, counter: state.counter + amount }
    }
}, { counter: 0 })


let store = createStore(reducer, applyMiddleware(logger))

store.dispatch(increment(100))
store.dispatch(decrement(200))
