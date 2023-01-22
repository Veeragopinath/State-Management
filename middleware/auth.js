export default function({ store, route, redirect }) {

  if (!store.state.isLicensee && route.path !== '/login') {
    return redirect('/login');
}
  }