exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Hello World',
      age: 35,
      email: 'maxjc@naver.com'
    })
  }
}