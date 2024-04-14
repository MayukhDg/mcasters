export function formatDate (date){
  const splitDate = date.split("-")
  const formattedDate = `${splitDate[-1]}-${splitDate[-2]}-${splitDate[-3]}`
  return formattedDate 
}