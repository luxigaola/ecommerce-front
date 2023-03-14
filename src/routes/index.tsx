// import Shop from "@/components/core/Shop"
// import Home from "@/components/core/Home"
// import Shop1 from "@/components/core/Shop1"
import { Suspense } from "react"
import { lazy } from "react"
import { RouteObject } from "react-router-dom"


interface RouteConfig {
  path: string,
  element: React.LazyExoticComponent<any>,
  children?: RouteConfig[]
}

const routes: RouteConfig[] = [
  {
    path: '/',
    element: lazy(()=>import('@/components/core/Home'))
  },
  {
    path: '/shop',
    element: lazy(()=>import('@/components/core/Shop')),
    children: [{
      path: 'shop1',
      element: lazy(()=>import('@/components/core/Shop1'))
    }]
  }
]
const getRoutesList = (routes:RouteConfig[]) =>{
  const syncRoutes:RouteObject[] = []
  routes.forEach(route=>{
    const {path,children} = route
    syncRoutes.push({
      path,
      element:(
        <Suspense fallback={<div>路由加载中。。。。</div>}>
          <route.element/>
        </Suspense>
      ),
      children:children?.length ? getRoutesList(children) :[]
    })
  })
  return syncRoutes
}



export default getRoutesList(routes)