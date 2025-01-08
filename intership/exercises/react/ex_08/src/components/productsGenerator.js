const products = () => {
    let products = []
    let titles = ["Mobile", "Laptop"]
    let CompanyNames = ["Sony", "Apple", "SAMSUNG", "XIAOMI", "Razer", "Asus"]
    for (let i = 1; i <= 20; i++) {
        let title = Math.round(Math.random())
        let CompanyName = Math.floor(Math.random() * CompanyNames.length)
        products = [...products, { id: i, title: titles[title], content: CompanyNames[CompanyName] }]
    }
    return products
}
export default products