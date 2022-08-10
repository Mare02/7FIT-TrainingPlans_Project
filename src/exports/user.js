import axios from 'axios';

export default async function() {
    const sid = localStorage.getItem('sid')
    if (sid) {
        try {
            const res = await axios.get('http://783p122.e2.mars-hosting.com/7fit/info/checkSession', { params: { sid: sid } })
            console.log('--------------------');
            console.log('%cSESSION USER: ', `color: green;font-size: 1rem`);
            console.log(res);
            console.log('--------------------');
            if (res.status == 200) {
                return res
            } else {
                console.log('duvaj ga debilu');
            }
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log('Please log in or register to gain access');
        return false
    }
}