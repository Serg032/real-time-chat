import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

function isUserLogged(router: AppRouterInstance): boolean {
  if (!localStorage.getItem("user")) {
    router.push("/");
  }

  return true;
}

export default isUserLogged;
