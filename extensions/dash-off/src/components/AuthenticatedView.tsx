import { withGmailClient } from "../lib/withGmailClient";

/**
 * Makes sure that we have a authenticated gmail client available in the children
 */
export default function AuthenticatedView({ children }: { children: JSX.Element }) {
  return withGmailClient(children);
}
