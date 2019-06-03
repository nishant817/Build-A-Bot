import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts';
import RobotHeads from '../parts/RobotHeads';
import RobotArms from '../parts/RobotArms';
import RobotTorsos from '../parts/RobotTorsos';
import RobotBases from '../parts/RobotBases';
import SidebarStandard from '../Sidebars/SidebarStandard';
import SidebarBuild from '../Sidebars/SidebarBuild';

Vue.use(Router);

export default new Router({
  routes: [
    // { name: 'Home', path: '/', component: HomePage },
    {
      name: 'Home',
      path: '/',
      components: {
        default: HomePage, // for default router view
        sidebar: SidebarStandard, // for sidebar router view
      },
    },

    {
      name: 'Build',
      path: '/build',
      components: {
        default: RobotBuilder, // for default router view
        sidebar: SidebarBuild, // for sidebar router view
      },
    },

    {
      name: 'BrowseParts',
      path: '/parts/browse',
      component: BrowseParts,
      children: [
        { name: 'RobotHeads', path: 'heads', component: RobotHeads },
        { name: 'RobotArms', path: 'arms', component: RobotArms },
        { name: 'RobotTorsos', path: 'torsos', component: RobotTorsos },
        { name: 'RobotBases', path: 'bases', component: RobotBases },
      ],
    },

    // { name: 'Parts', path: '/parts/:partType/:id', component: PartInfo }
    // to use above route with props instead of route params
    {
      name: 'Parts', path: '/parts/:partType/:id', component: PartInfo, props: true,
    },
    
  ],
});
