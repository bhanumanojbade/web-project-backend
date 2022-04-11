




module.exports.login = async (options) => {
    return new Promise(async (resolve, reject) => {
        options.mongoClient.connect(async (err, client) => {
            var body = options.body
            console.log("body", body)
            try {
                var db = client.db("manojBade");
                var query = { userName: body.userName };
                db.collection("users").find(query).toArray(function (err, result) {
                    if (err) throw err
                    let responseObj={
                        result:"success",
                        status:200,
                        data:{}
                    }
                    console.log("result",result);
                    if(result.length>0){
                    if (result[0].password == body.password) {
                        responseObj.data=result[0]
                        resolve({
                            response: responseObj,
                            status: 200
                        })
                    } else {
                        responseObj.result="invalid password";
                        responseObj.data={}
                        responseObj.status=400;
                        resolve({
                            response: responseObj,
                            status: 200
                        })
                    }
                }else{
                    responseObj.result="user does not exist";
                    responseObj.status=400;
                    resolve({
                        response: responseObj,
                        status: 200
                    })
                }
                });
            }
            catch (e) {
                reject({
                    response: e,
                    status: 400
                })
            }
        });
    })
}



