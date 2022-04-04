import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

function guard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void {
  next();
}

export { guard };
