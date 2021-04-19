export default class {
    constructor(resp){
        const files = {
            "files":[
                resp.url+"img/ConfiguresIcon.png"
            ]
        }
        resp.send(JSON.stringify(files))
    }
}