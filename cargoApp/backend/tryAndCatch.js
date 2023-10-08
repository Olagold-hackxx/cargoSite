async function tryAndCatch(data) {
  try {
    await data()
  } catch (error) {
    console.log(error);
  }

}

module.exports = tryAndCatch;
