const postsIndex = [
    { title: 'Blog intro', path: '2023-10-04.md', date: '2023-10-04' },
    { title: 'Light fixture install', path: '2023-10-13.md', date: '2023-10-13' },
    // { title: 'Test File3', path: 'test2.md', date: '2023-07-30' },
];

function grabPathByTitle(title) {
    return `/blog/posts/${postsIndex.filter(post => post.title === title)[0].path}`;
}

function grabPathByLatest() {
    const latest = `/blog/posts/${postsIndex.sort((a, b) => new Date(b.date) - new Date(a.date))[0].path}`;
    return latest;
};

const frame = document.getElementsByClassName('blog-frame')[0];
// Set frame to latest post [on load]
frame.src = grabPathByLatest();

// Define links to posts
let links = document.getElementsByClassName('links')[0];
for (post of postsIndex) {
    console.log(post.title);
    let a = document.createElement('a');
    let text = document.createTextNode(`${post.title} - ${post.date}`);
    a.setAttribute('href', '#');
    // Set frame to title [on click]
    a.setAttribute('onclick', `frame.src='${grabPathByTitle(post.title)}'`);
    a.appendChild(text);
    links.appendChild(a);
}
