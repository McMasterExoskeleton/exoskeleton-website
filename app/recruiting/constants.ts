export const APPLICATIONS_OPEN = true;

/**
 * NOTE FOR THE TEAM — this link needs attention.
 *
 * This was previously the Google Forms `/edit` URL (the owner-only form
 * builder). It is now the public `/viewform` URL, which is correct.
 *
 * However: the form itself currently returns a Google sign-in wall to signed-out
 * visitors. That is a setting on the form, not something this repo can fix. If
 * that is deliberate (e.g. restricted to @mcmaster.ca accounts), leave it — the
 * page below tells applicants they will need to sign in. If it is not
 * deliberate, open the form's Settings → Responses and turn off
 * "Restrict to users in <domain>" / "Collect email addresses".
 */
export const APPLICATION_FORM_LINK =
  "https://docs.google.com/forms/d/1amRGHgcl6Jht-zRnIJkxi1lQm3fQzezfl_WmuJ2tuIc/viewform";

/** Shown next to the apply button so a sign-in prompt isn't a surprise. */
export const APPLICATION_NOTE =
  "You'll need to be signed in to a Google account to submit the form.";
