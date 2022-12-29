import "solid-js";

// Added to fix the type issue with use:sortable.
declare module "solid-js" {
  namespace JSX {
    interface Directives {
      sortable: boolean;
    }
  }
}
