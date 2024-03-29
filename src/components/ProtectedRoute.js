import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../firebaseService/authContext'

const ProtectedRoute = ({children}) => {
    const { user } = UserAuth()

    if (!user) {
        return <Navigate to="/"/>
    }

    return children
}

export default ProtectedRoute