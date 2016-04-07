## Params

### startyear

Set the `startyear` param in your site's `config.toml` file to a year (in quotes). The HYPERVERSES theme will automatically start with that year and put a range in the site's copyright notice in the footer. For example, `startyear = "2012"` for a site with the last post written in 2016 (and author 'P.F. Hawkins') will put the following copyright in the footer: `Copyright 2012–2016 P.F. Hawkins`

## Big List

While most sites have an archive page or a paginated list of posts starting on the front page, the HYPERVERSES theme prefers to have the front page actually be a root node of content, an entryway into reading the site. But a big list of posts is still useful. So it has one at `/biglist.html`.

In order to set up the list, you must first `hugo new biglist` and then add `type = biglist` (assuming TOML) to `biglist.md`'s frontmatter.
