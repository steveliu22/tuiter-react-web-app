import Nav from '../nav';
import NavigationSidebar from './navigation-sidebar';
import WhoToFollowList from './who-to-follow-list';
import '@fortawesome/fontawesome-free/css/all.css'
function Tuiter () {
  return (
   <div>
     <Nav/>
     <NavigationSidebar active="home"/>
     <WhoToFollowList></WhoToFollowList>
     <h1>Tuiter</h1>
   </div>
  )
}
export default Tuiter
