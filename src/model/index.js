async function getFoods(dbConfig) {
  try {
    const animalSourceFoods = await dbConfig
      .postFind({
        db: "forma-saudavel-db",
        selector: {
          id_categoria: {
            $or: [
              {
                $eq: "5",
              },
              {
                $eq: "9",
              },
              {
                $eq: "7",
              },
              {
                $eq: "6",
              },
            ],
          },
        },
      })
      .then((response) => {
        return response.result.docs;
      });

    const vegetableSourceFoods = await dbConfig
      .postFind({
        db: "forma-saudavel-db",
        selector: {
          id_categoria: {
            $or: [
              {
                $eq: "11",
              },
              {
                $eq: "1",
              },
              {
                $eq: "4",
              },
              {
                $eq: "2",
              },
              {
                $eq: "10",
              },
              {
                $eq: "3",
              },
            ],
          },
        },
      })
      .then((response) => {
        return response.result.docs;
      });

    let animalAux = [];
    animalSourceFoods.forEach((element) => {
      animalAux.push(element.alimentos);
    });

    let vegetableAux = [];
    vegetableSourceFoods.forEach((element) => {
      vegetableAux.push(element.alimentos);
    });

    return {
      aninal: animalAux.flat(),
      vegetable: vegetableAux.flat(),
    };
  } catch (error) {
    console.log({ error });
    return { error };
  }
}

async function getExercises(dbConfig) {
  try {
    const outdoorSourceEx = await dbConfig
      .postFind({
        db: "forma-saudavel-db",
        selector: {
          id_categoria: "100",
        },
      })
      .then((response) => {
        return response.result.docs;
      });

    const indoorSourceEx = await dbConfig
      .postFind({
        db: "forma-saudavel-db",
        selector: {
          id_categoria: "101",
        },
      })
      .then((response) => {
        return response.result.docs;
      });

    let outdoorAux = [];
    outdoorSourceEx.forEach((element) => {
      outdoorAux.push(element.exercicios);
    });

    let indoorAux = [];
    indoorSourceEx.forEach((element) => {
      indoorAux.push(element.exercicios);
    });

    return {
      outdoor: outdoorAux.flat(),
      indoor: indoorAux.flat(),
    };
  } catch (error) {
    console.log({ error });
    return { error };
  }
}

async function webhookInfo(req) {
  try {
    const event = req.headers["x-github-event"];
    const payload = req.body;

    console.log(`Evento recebido: ${event}`);
    console.log(`Evento payload: ${payload}`);
    console.log(`Evento req: ${req}`);

    let password = "B4GW784kn12lpaPtPkL02F_KPV6F";

    function sum(a, b) {
      return a + b;
    }

    sum(1, 2, 3);

    console.log(password);
  } catch (error) {
    return error;
  }
}

export default { getFoods, getExercises, webhookInfo };
