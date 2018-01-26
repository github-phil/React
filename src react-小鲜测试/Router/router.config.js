import Start from './start';
import Gender from './Gender';
import Querystion from './Querystion';
import Q1 from './q1';
import Q2 from './q2';
const Route = {
    routes: [
        {
            path: '/start',
            component: Start
        },
        {
            path: '/Gender',
            component: Gender
        },
        {
            path: '/Querystion',
            component: Querystion,
            children: [
                {
                    path: '/Querystion/q1',
                    component: Q1
                },
                {
                    path: '/Querystion/q2',
                    component: Q2
                }
            ]
        }
    ]
};
export default Route;
