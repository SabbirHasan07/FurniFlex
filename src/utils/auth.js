export function login(data) {
    const usersData = JSON.parse(localStorage.getItem('demo-e-commerce')) || [];
    const user = usersData?.find((item) => item.email === data.email && item.password === data.password)
    localStorage.setItem('demo-e-commerce-logged-in-user', JSON.stringify(user))
    return user;
}

export function signUp(data) {
    let usersData = JSON.parse(localStorage.getItem('demo-e-commerce')) || [];
    const userExists = usersData.some(user => user.email === data.eamil);
    if (userExists) {
        console.log('User already exists.');
        return;
    }
    usersData.push(data);
    localStorage.setItem('demo-e-commerce', JSON.stringify(usersData));
    localStorage.setItem('demo-e-commerce-logged-in-user', JSON.stringify(data))
    return data;
}