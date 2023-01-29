const dropdownList = document.querySelector('.dropdown__list')
const dropdownValue = document.querySelector('.dropdown__value')
const dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'))
function onClickList() {
  dropdownList.className.includes('dropdown__list_active')
    ? dropdownList.classList.remove('dropdown__list_active')
    : dropdownList.classList.add('dropdown__list_active')
}
dropdownValue.addEventListener('click', onClickList)
dropdownLink.forEach(
  (item) =>
    (item.onclick = function () {
      dropdownList.classList.remove('dropdown__list_active')
      dropdownValue.textContent = item.textContent
      return false
    })
)
// dropdownLink.forEach((item) =>
//   item.addEventListener('click', function () {
//     dropdownList.classList.remove('dropdown__list_active')
//     dropdownValue.textContent = item.textContent
//     return false
//   })
// )
