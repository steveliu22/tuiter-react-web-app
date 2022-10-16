import PostSummaryItem from './PostSummaryItem.js'
import posts from './posts.js'
const renderEachPSItem = () => {
  let ret = ''

  for (let i = 0; i < posts.length; i += 1) {
    const post = posts[i]
    ret += PostSummaryItem(post)
  }

  return ret
}

function PostSummaryList () {
  return (`<ul class="list-group border-1">
 ${renderEachPSItem()}
     </ul>`)
}

export default PostSummaryList
