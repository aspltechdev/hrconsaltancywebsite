const https = require('https');

https.get('https://www.parishrama.com/', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
        let match;
        const images = [];
        while ((match = imgRegex.exec(data)) !== null) {
            if (match[1].includes('partner') || match[1].includes('client') || match[1].includes('logo')) {
                images.push(match[1]);
            }
        }
        console.log(images.length ? images.join('\n') : 'No images found');

        // Also look for any images in general if specifically partners are not found
        if (images.length === 0) {
            const allImgs = [];
            const imgRegex2 = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
            let m;
            while ((m = imgRegex2.exec(data)) !== null) {
                allImgs.push(m[1]);
            }
            console.log('All images:\n' + allImgs.join('\n'));
        }
    });
}).on('error', err => console.error(err.message));
