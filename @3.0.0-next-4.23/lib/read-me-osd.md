## Openseadragon

We are using our own patched version of OSD from https://github.com/Jinntec/openseadragon

Reason:
OSD removes all body children when going to fullscreen. This creates issues with `<pb-page>` also be gone so display is empty after existing full-screen.

Fork is up-to-date with upstream OSD 4.1.1




