import NavigationSidebar from '../index.js'

function navbarTest () {
  $('#wd-sidebar-test').append(`${NavigationSidebar()}`)
}

$(navbarTest)
