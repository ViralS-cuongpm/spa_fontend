export default (to, from, next) => {

  if (localStorage.getItem('access_token')) {
    console.log(localStorage.getItem('access_token'));
    // verify with firebase or jwt
    next()
  } else {
    console.log(localStorage.getItem('access_token'));
    localStorage.removeItem('access_token')
    next('/user/login')
  }
}
