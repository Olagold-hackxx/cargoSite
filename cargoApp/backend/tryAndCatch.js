async function tryAndCatch(data) {
  try {
    data()
  } catch (error) {
    console.log(error);
  }

}

module.exports = tryAndCatch;
