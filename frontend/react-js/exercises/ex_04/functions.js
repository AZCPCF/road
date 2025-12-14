const delDuplicate = (array) => array.sort((a, b) => a - b).filter((item, index) => array.indexOf(item) === index)
const result = (array) => console.log(array)

const modules = {
    delDuplicate,
    result
}
export default modules