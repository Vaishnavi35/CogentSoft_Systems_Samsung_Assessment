import React from 'react'
// import { useRoutes } from "react-router-dom";
import { useRoutes } from 'react-router-dom';
import Layout from '../Pages/Layout'
import MergeArrays from '../components/MergeArrays'
import Intersection from '../components/Intersection';
import Anagram from '../components/Anagram';
import CurryFun from '../components/CurryFun';
import PromiseAll from '../components/PromiseAll';
import DebounceThrottle from '../components/DebounceThrottle';
import RPS from '../components/RPS';
import StarRating from '../components/StarRating';
import PromiseSeries from '../components/PromiseSeries';

export default function Route() {
  const routes = useRoutes([
    {
        path: '/',
       element: <Layout />,
       children: [
        {
            index: true,
            element: <MergeArrays />
        },
        {
            path: '/merge-arrays',
            element: <MergeArrays />
        },
        {
          path: '/intersection',
          element: <Intersection />
        },
        {
          path: '/anagram',
          element: <Anagram />
        },
        {
            path: '/curry',
            element: <CurryFun />
        },
        {
          path: '/promise-all',
          element: <PromiseAll />
        },
        {
          path: '/promise-series',
          element: <PromiseSeries />
        },
        {
          path: '/dt',
          element: <DebounceThrottle />
        },
        {
          path: '/rps',
          element: <RPS />
        },
        {
            path: '/star-rating',
            element: <StarRating />
        }
       ]
    }
  ])
  return routes;
}
