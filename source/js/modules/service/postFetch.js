async function postFetch(url, data){
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: data,
    });
    if (!response.ok){
        throw new Error(`При выполнении Вашего запроса произошла ошибка. Статутус ошибки: ${response.status}, URL ошибки: ${url}`)
    }
    return await response.json();
}

export default postFetch;