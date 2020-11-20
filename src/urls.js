import { UriTemplate } from 'uri-templates-es';

const url = new URL(window.location.href);
let urlTemplate;

export function setURLTemplate(template) {
    urlTemplate = new UriTemplate(template);
}

export function getParameter(name) {
    const params = urlTemplate.fromUri(window.location.href);
    console.log('<urls> %s: %o', window.location.href, params);
    return params[name];
}

export function setParameter(name, value) {
    const params = urlTemplate.fromUri(window.location.href);
    params[name] = value;
    const newUrl = urlTemplate.fill(params);
    const resolved = new URL(newUrl, window.location.href);
    console.log('<urls> new URL: %s', resolved.toString());
    url.href = resolved.toString();
}

export function pushHistory(msg, state) {
    history.pushState(state, msg, url.toString());
}