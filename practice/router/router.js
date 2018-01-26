import Start from '../views/test/start.jsx'
import Continue from '../views/test/continue.jsx'
import Feeling from '../views/test/feeling.jsx'

import Sex from '../views/test/continue/sort/sex.jsx'
import Favor from '../views/test/continue/sort/favor.jsx'
import Allergy from '../views/test/continue/sort/allergy.jsx'
import DisLike from '../views/test/continue/sort/disLike.jsx'
const RouteConfig = {
  routes: [
    {
      path: '/start',
      component: Start
    },
    {
      path: '/continue',
      component: Continue,
      children: [
        {
          path: '/continue/sex',
          component: Sex
        },
        {
          path: '/continue/favor',
          component: Favor
        },
        {
          path: '/continue/allergy',
          component: Allergy
        },
        {
          path: '/continue/disLike',
          component: DisLike
        }
      ]
    },
    {
      path: '/feeling',
      component: Feeling
    }
  ]
}

export default RouteConfig