import aux from "../components/appaux";

export default async function({ store, req, route, app }) {
  try {
    await store
      .dispatch("initAuth", {
        req: req,
        route: route,
        app: app,
        allow: true
      })
      .catch(err => {
        console.log("free-auth", err);
      });
  } catch (err) {
    aux.log("free-auth.js", (err && err.message) || err);
  }
}
