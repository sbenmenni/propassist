# Propassist website

A static website for propassist.co: five marketing pages, a log-in page and the Propassist app (owner and tenant portals), plus one small stylesheet and four photos. There is no build step and no server code. Open `index.html` in a browser to preview it.

## What's in the folder

| File | Page |
|---|---|
| `index.html` | Home |
| `product.html` | Product |
| `about.html` | About |
| `team.html` | Team |
| `contact.html` | Contact |
| `styles.css` | Page basics (links, focus outlines) |
| `*.jpg` | The two property photos and the two founder photos |
| `login.html` | Log in (with Owner demo and Tenant demo accounts) |
| `auth.js` | Sign-in logic shared by the log-in page and the app |
| `app.html` | The Propassist app; opens only after logging in |

Layout, colors and spacing are written inline on each element (`style="..."`), so every page is self-contained. To change any text, open the page in a text editor, find the words and retype them.

## Colors and fonts

| Role | Value |
|---|---|
| Accent (buttons, logo, bands) | `#2F6871` |
| Text | `#172329` |
| Secondary text | `#5A676F` |
| Section background | `#EDF1F2` |
| Card background | `#FFFFFF` |
| Borders | `#D5DCDF` |
| Footer background | `#172329` |

Headings use Space Grotesk and body text uses Inter, both loaded from Google Fonts.

## Before going live

1. **Bios.** `team.html` has two placeholders in square brackets: `[SAMIR'S BIO ...]` and `[OLEKSIY'S BIO ...]`.
2. **Contact details.** `contact.html` has `[YOUR CONTACT EMAIL]` and `[YOUR PHONE NUMBER]`.
3. **Contact form.** The form is not connected to anything yet: the "Send application" button does nothing. Connect it to a form service (Formspree, Basin, Getform or similar) by giving the `<form>` tag the `action` and `method="post"` the service provides, adding a `name` to each field, and changing the button to `type="submit"`. GitHub Pages cannot receive form submissions by itself.
4. **Founder photos.** Check that `images/samir-benmenni.jpg` and `images/oleksiy-malytskyy.jpg` show the right person. They were assigned by the order the photos were sent.
5. **Logo.** The small house mark in the header is a stand-in drawn for this design. Replace it if there is an official logo.

## Publishing on GitHub Pages

1. Create a new public repository on GitHub and upload everything in this folder to its root.
2. In the repository, open **Settings**, then **Pages**. Under "Build and deployment", choose **Deploy from a branch**, pick the `main` branch and the `/ (root)` folder, and save.
3. Under "Custom domain" on the same page, enter `propassist.co` and save. Do this before the DNS change in the next step.
4. The domain owner then sets these DNS records where propassist.co is registered, replacing the records that point to the old site:

| Record | Name | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `YOUR-GITHUB-USERNAME.github.io` |

5. DNS changes can take up to 24 hours. Once the domain resolves, tick **Enforce HTTPS** on the Pages settings page.

Check the site on its temporary `YOUR-GITHUB-USERNAME.github.io/REPOSITORY-NAME` address first. Changing DNS replaces the current propassist.co.

GitHub's guide: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Log in and the app

Every page has a **Log in** link. Logging in opens the app (`app.html`); visiting `app.html` without logging in goes back to the log-in page.

| Account | Email | Password | Opens |
|---|---|---|---|
| Owner demo | `owner@demo.propassist.co` | `demo-owner` | Owner portal (can also preview the tenant view) |
| Tenant demo | `tenant@demo.propassist.co` | `demo-tenant` | Tenant portal only |

The log-in page also has one-click buttons for both demo accounts.

How it works today: sign-in and app data run in the visitor's browser (`auth.js` and `localStorage`). That suits demo accounts with example data, but it is not security: anyone can read the demo passwords in `auth.js`, and each visitor's changes stay in their own browser. Before real customers log in, replace the three functions in `auth.js` (`signIn`, `current`, `signOut`) with a hosted auth service such as Supabase Auth or Firebase Authentication, and move the app's data to that service's database.

The app's AI assistant and "Check asking rent" only work when the app runs inside claude.ai, so they are hidden on this site.

