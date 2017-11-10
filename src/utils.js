export function parseURL(url) {
    // Let a blog post do the work
    var parser = document.createElement('a'),
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

    let vcs = parser.pathname.split('/')[1].toLowerCase()
    let vcsType

    vcs === 'gh'
      ? vcsType = 'github'
      : vcs === 'bb'
        ? vcsType = 'bitbucket'
        : vcsType = '' //Should show an error I guess.

    let circle = {
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
