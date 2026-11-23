# Propassist website

A static website for propassist.co: five HTML pages, one small stylesheet and four photos. There is no build step and no server code. Open `index.html` in a browser to preview it.

## What's in the folder

| File | Page |
|---|---|
| `index.html` | Home |
| `product.html` | Product |
| `about.html` | About |
| `team.html` | Team |
| `contact.html` | Contact |
| `styles.css` | Page basics (links, focus outlines) |
| `images/` | The two property photos and the two founder photos |
| `CNAME` | Tells GitHub Pages the site's domain is `propassist.co` |

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

1. Create a new public repository on GitHub and upload everything in this folder to its root, including `CNAME`.
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
