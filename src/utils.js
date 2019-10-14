export function parseURL(url) {
    // Let a blog post do the work
    const parser = document.createElement('a'),
        searchObject = {},
        queries, split, i
    // Let the browser do the work
    parser.href = url
    // Convert query string to object
    queries = parser.search.replace(/^\?/, '').split('&')
    for( i = 0; i < queries.length; i++ ) {
        split = queries[i].split('=')
        searchObject[split[0]] = split[1]
    }

    const vcs = parser.pathname.split('/')[1].toLowerCase()
    const vcsType = vcs === 'gh' ? 'github' : vcs === 'bb' ? 'bitbucket' : ""

    const circle = {
      vcsType:  vcsType,
      orgName: parser.pathname.split('/')[2],
      repoName: parser.pathname.split('/')[3],
      buildNumber: parser.pathname.split('/')[4],
    }

    return {
        protocol: parser.protocol,
        host: parser.host,
        hostname: parser.hostname,
        port: parser.port,
        pathname: parser.pathname,
        search: parser.search,
        searchObject: searchObject,
        hash: parser.hash,
        circle: circle,
    }
}
