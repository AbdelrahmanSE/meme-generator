export class MemesAPI {

    getMemes() {
        return fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json());
    }
}