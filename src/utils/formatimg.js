const formatimg = url => {
    const res = process.env.PUBLIC_URL + url;
    console.log(res);
    return res;
}

export default formatimg;