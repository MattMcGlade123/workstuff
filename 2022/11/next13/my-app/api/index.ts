export const fetchAPost = async (targetnumber: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${targetnumber}`);
    return res.json();
}

export const fetchAllPosts = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts}`);
    return res.json();
}

export const fetchAnImage = async (targetnumber: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${targetnumber}`);
    return res.json();
}

export const fetchAllImages = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos}`);
    return res.json();
}

export const fetchUser = async (targetnumber: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${targetnumber}`, { cache: 'no-store' });
    return res.json();
}