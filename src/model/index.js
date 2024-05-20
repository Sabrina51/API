async function getInformation(dbConfig) {

  const result = dbConfig.postAllDocs({
    db: 'healthy-weight-db',
    includeDocs: true
  }).then(response => {
    return response.result.rows
  });
  return result
}


export default { getInformation }