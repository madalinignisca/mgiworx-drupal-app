# ZUZU
A starter theme for Drupal 8 and Semantic Web Lovers

This theme is to be forked and create something really awesome and not used as a Base theme.

### TODO list
- [ ] create folder structure to organize templates
- [ ] create folder structure and empty sass files
- [ ] make a custom module example to implement a library independent of theme (separate repo)

> Note: Please don't ask for [Bootstrap] or [Foundation] integration on this theme.
There are already great projects on that:
* [Bootstrap](https://www.drupal.org/project/bootstrap)
* [Radix](https://www.drupal.org/project/radix)
* [Zurb Foundation](https://www.drupal.org/project/zurb_foundation)

The intention audience of this starter theme is for people that want total control on their website presentation.

This theme is not trying to solve everything like most people try to do in custom themes.
Instead is trying to implement a best practice model where people understand fast what to put in theme and separate reusable things in custom modules - one of the old and hope current concept the Drupal community tries to teach people.

The theme is offering the starting point where you start implementing awesome stuff specific to the theme itself.

### Requirements:
Node 4+
  - gulp-cli
  - bower

### What it will provide:
* for CSS, _using Sass of course_:
  * [Breakpoints](http://breakpoint-sass.com/)
  * [Zen Grids](http://zengrids.com/)
  * More to follow

### How to use it:
First, on your development box, modify your `web/sites/default/services.yml`
to force reloading all stuff related to your theme.
Make sure you don't do that on the production environment as that takes a huge performance hit.

To develop, make sure you have the most recent Node stable or LTS version.

In the theme folder, run:
`npm setup`

The theme expects that you use the [Drupal console server](http://docs.drupalconsole.com/en/commands/server.html)
For custom setup, edit `config.json` to your needs.

In the theme `info.yml` change the base theme to `Stable` if you want less markup.
By default I choosed `Classy` as more explicit html output doesn't hurts and fits
better the majority of websites.

To work, run `gulp` and as you work, watch the magic happening in your browser.
A new browser tab/window will be opened with BrowserSync injected.
