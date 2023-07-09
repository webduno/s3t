const LOCAL_API_URL = "/api/"


async function getRepos () {
  try {
    const reqRes = await fetch(LOCAL_API_URL+"/repos",)
    return await reqRes.json()
  } catch (e:any) {
    console.error("getting errr", e)
    return null
  }
}

export default {
  getRepos,
}