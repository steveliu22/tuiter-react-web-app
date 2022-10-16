import WhoToFollowListItem from './WhoToFollowListItem.js'
import who from './who.js'

const renderEachItem = () => {
  let ret = ''

  for (let i = 0; i < who.length; i += 1) {
    const profile = who[i]
    ret += WhoToFollowListItem(profile)
  }

  return ret
}

function WhoToFollowList () {
  return (`                
      <ul class="list-group">
      <li class="list-group-item">
          <h6 class="fw-bolder m-0">Who to follow</h6>
      </li>
      ${renderEachItem()}
      </ul>`)
}

export default WhoToFollowList
