const fakeAjax = (url) => {
    const promise = new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve({data: "user info"})
        }, 2000)
    });

    return promise;
}

fakeAjax().then(response=>console.log(response.data))