export const getIdFromUrl = (url: string) => {
  let index = url.substr(0, url.length - 1).lastIndexOf('/')
  let id = url.substring(index + 1, url.length - 1)
  return id
}

export const clientId = 'sgKoHx8VFehR_elL2otJdSfKizG8VN-5MJUNeRltCH4'
