export default () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Jory',
        uid: 'jory',
        avatar: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQJJoZBxC5NdnxwYZTN37BGPDpm0QUXFYv9Z5AWwRMHJg_hhrtZoig9-Yc',
      })
    }, 2000)
  })
}