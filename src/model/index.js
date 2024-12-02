async function getFoods(dbConfig) {
  try {
    const result = dbConfig
      .postAllDocs({
        db: "healthy-weight-db",
        includeDocs: true,
      })
      .then((response) => {
        return response.result.rows;
      });
    return result;
  } catch (error) {
    console.log({ error });
    return { error };
  }
}

export default { getFoods };
