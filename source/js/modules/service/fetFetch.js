async function getFetch(url){
    const response = await fetch(url);
    if (!response.ok){
        throw new Error(`При выполнении Вашего запроса произошла ошибка. Статутус ошибки: ${response.status}, URL ошибки: ${url}`);
    }
    return await response.json();
}
export {getFetch};