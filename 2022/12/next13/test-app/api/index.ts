export const fetchHeaderData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
    return res.json();
}

export const fetchMenuData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/2`);
    return res.json();
}

export const fetchFooterData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    return res.json();
}