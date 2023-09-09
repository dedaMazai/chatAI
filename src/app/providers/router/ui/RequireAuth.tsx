import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { getUserAuthData } from '@/entities/User';
import { getRouteForbidden, getRouteMain } from '@/shared/const/router';

interface RequireAuthProps {
    children: JSX.Element;
}

export function RequireAuth({ children }: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();


    if (!auth) {
        return (
            <Navigate to={getRouteMain()} state={{ from: location }} replace />
        );
    }

    return children;
}
