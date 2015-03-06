# Slack Cart Client
Listens on a pusher channel for URLs to open on the TV.

## Configuration
Add a `.env` file in the root of this directory containing the following keys filled in with real data:

```bash
PUSHER_URL=http://id:key@api.pusherapp.com/apps/app_id
```

## Commands
* `sudo node service.js install`
* `sudo node service.js uninstall`
* `sudo node service.js start`
* `sudo node service.js stop`
