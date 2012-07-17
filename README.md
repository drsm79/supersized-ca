# supersized-ca

*CouchApp version of [Supersized](http://buildinternet.com/project/supersized)*

I wanted a photo gallery app that ran out of CouchDB. This is it. It uses the
best jQuery photo gallery that I could find one morning,
[Supersized](http://buildinternet.com/project/supersized) and took about an
hour to wire up.

One day I'll add something to let you enter/upload photos, for now that
interface is Futon.

## Install

Run the following to push into your localhost:5984 CouchDB:

    python situp.py push -d supersized -s http://localhost:5984 -e supersized

The application will be available on http://localhost:5984/supersized/_design/supersized/index.html

## Donate to build internet

If you like the app please donate to the build internet guys:

<form id="donate-form" action="https://www.paypal.com/cgi-bin/webscr" method="post">
  <input type="hidden" name="cmd" value="_s-xclick">
  <input type="hidden" name="hosted_button_id" value="JK9BVTS62DRJG">
  <input type="image" src="https://www.paypal.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
  <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

